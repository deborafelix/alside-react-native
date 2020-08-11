import RNFetchBlob from 'rn-fetch-blob';

export const uploadImage = async (img) => {
  try {
    const response = await RNFetchBlob.fetch(
      'POST',
      'http://localhost:3333/files',
      {
        'Content-Type': 'multipart/form-data',
      },
      [
        {
          name: 'image',
          filename: img.fileName,
          type: img.type,
          data: RNFetchBlob.wrap(img.uri),
        },
      ],
    );
    const data = JSON.parse(response.data);
    const source = {uri: data.url};
    return source;
  } catch (e) {
    console.log(e);
  }
};
