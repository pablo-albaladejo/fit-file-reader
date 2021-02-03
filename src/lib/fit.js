export const getFileHeader = (view) => {
  return {
    headerSize: view.getUint8(0),
    protocolVersion: view.getUint8(1),
    profileVersion: view.getUint16(2, true),
    dataSize: view.getUint32(4, true), //in bytes
    fileType: [view.getUint8(8), view.getUint8(9), view.getUint8(10), view.getUint8(11)].reduce((prev, acc) => prev + String.fromCharCode(acc), ""),
    crc: view.getUint16(11, true)  //ToDo: optional based on header size
  }
}

const getRecordHeader = (view, offset) => {
  const headerBinaryString = view.getUint8(offset).toString(2).padStart(8, '0')
  return {
    data: {
      compressed: parseInt(headerBinaryString[0]),
      messageType: parseInt(headerBinaryString[1]),
      developerDataFlag: parseInt(headerBinaryString[2]),
      reserved: parseInt(headerBinaryString[3]),
      localMessageType: parseInt(headerBinaryString.substring(4), 2)
    },
    size: 1
  }
}

const getRecordContentDefinition = (view, offset, developerDataFlag) => {
  let index = offset;
  const reserved = view.getUint8(index); index += 1;
  const architecture = view.getUint8(index); index += 1;
  const globalMessageNumber = view.getUint16(index, !architecture); index += 2;

  const numFields = view.getUint8(index); index += 1;
  const fields = []
  for (let i = 0; i < numFields; i++) {
    fields.push({
      definition: view.getUint8(index),
      size: view.getUint8(index + 1),
      type: view.getUint8(index + 2),
    }); index += 3;
  }

  let numDevFields = null;
  let devFields = null;
  if (developerDataFlag === 1) {
    numDevFields = view.getUint8(index); index += 1;
    devFields = []
    for (let i = 0; i < numFields; i++) {
      fields.push({
        definition: view.getUint8(index),
        size: view.getUint8(index + 1),
        type: view.getUint8(index + 2),
      }); index += 3;
    }
  }

  return {
    data: {
      reserved,
      architecture,
      globalMessageNumber,
      numFields,
      fields,
      numDevFields,
      devFields
    },
    size: index,
  }
}

const getRecordContentData = (view, offset, developerDataFlag) => {
  return {
    data: {},
    size: 1,
  }
}

const getRecordContent = (view, offset, messageType, developerDataFlag) => {
  return messageType === 1 ? getRecordContentDefinition(view, offset, developerDataFlag) : getRecordContentData(view, offset, developerDataFlag)
}

const getFileRecord = (view, offset) => {
  const recordHeader = getRecordHeader(view, offset)
  const recordContent = getRecordContent(view, offset + recordHeader.size, recordHeader.data.messageType, recordHeader.data.developerDataFlag)

  return {
    header: recordHeader.data,
    content: recordContent.data,
    size: recordHeader.size + recordContent.size,
  }
}

const getFileRecords = (view, offset, size) => {
  let records = []

  let index = offset
  while (index <= size) {
    const record = getFileRecord(view, index)
    records.push(record)
    index += record.size;
  }
  return records
}

export const getFileCRC = (view, offset) => {
  return view.getUint16(offset, true)
}

export const parseFile = (arrayBuffer) => {
  var view = new DataView(arrayBuffer);

  const header = getFileHeader(view);

  const records = getFileRecords(view, header.headerSize, header.dataSize);

  const crcOffset = header.headerSize + header.dataSize
  const crc = getFileCRC(view, crcOffset)

  return {
    header,
    records,
    crc,
  }
}