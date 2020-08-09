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
    // const test = JSON.parse(response);
    console.log();
    const data = JSON.parse(response.data);
    console.log(data.url);
    const source = {uri: data.url};
    return source;
  } catch (e) {
    console.log(e);
  }
};
