import React, {useState} from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import {Default_avatar} from '../../../../..';
import useStyles from './styles';

const Avatar_btn: React.FC = () => {
  const styles = useStyles();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isImageSelected, setIsImageSelected] = useState(false);
  const options = {
    mediaType: 'photo',
    quality: 1,
  };
  const handleChoosePhoto = () => {
    //@ts-ignore
    launchImageLibrary(options, response => {
      console.log(response);
      if (response.assets) {
        //@ts-ignore
        setSelectedImage(response.assets[0].uri);
        setIsImageSelected(true);
      }
    });
  };

  const handleChangePhoto = () => {
    setSelectedImage(null);
    setIsImageSelected(false);
    handleChoosePhoto();
  };
  return (
    <View style={{alignItems: 'center', paddingVertical: 20}}>
      {selectedImage ? (
        <TouchableOpacity
          style={styles.selectedImageContainer}
          onPress={handleChangePhoto}>
          <Image
            source={{uri: selectedImage}}
            style={styles.selectedImage}
            resizeMode="cover"
          />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.btnAvatar} onPress={handleChoosePhoto}>
          <Default_avatar />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Avatar_btn;
