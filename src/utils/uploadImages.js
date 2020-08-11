import ImagePicker from 'react-native-image-picker';
import * as Permissions from 'react-native-permissions';

const getPermissionAsync = async () => {
  const status = await Permissions.check(
    Permissions.PERMISSIONS.ANDROID.CAMERA,
  );
  if (status === Permissions.RESULTS.GRANTED) {
    return true;
  } else {
    const status = await Permissions.request(
      Permissions.PERMISSIONS.ANDROID.CAMERA,
    );
    if (status === Permissions.RESULTS.GRANTED) {
      return true;
    }
  }
};

export const uploadImage = async (handleUploadImage) => {
  try {
    const hasPermission = await getPermissionAsync();
    if (hasPermission) {
      const options = {
        title: 'Selecione uma foto',
        storageOptions: {
          skipBackup: true,
          path: 'images',
        },
      };
      ImagePicker.showImagePicker(options, handleUploadImage);
    }
  } catch (err) {}
};
