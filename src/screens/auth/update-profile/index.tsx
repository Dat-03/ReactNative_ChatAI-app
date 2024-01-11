import {View, Text, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import useStyles from './styles';
import {Default_avatar, NavigationService} from '../../..';
import {Icon} from '@rneui/themed';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
const Update_Profile: React.FC = () => {
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
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon
          name="arrow-back-outline"
          type="ionicon"
          color={'black'}
          size={30}
          style={styles.iconHeader}
          onPress={() => NavigationService.goBack()}
        />
        <Text style={styles.txtHeader1}>Complete your profile </Text>
        <Text style={styles.txtHeader2}>
          Please enter your profile. Don't worry, only you can see your personal
          data. No one else will be able to see it. Or you can skip it for now.
        </Text>
      </View>
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
          <TouchableOpacity
            style={styles.btnAvatar}
            onPress={handleChoosePhoto}>
            <Default_avatar />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default Update_Profile;
