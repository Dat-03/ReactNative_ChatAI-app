import React, {useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import useStyles from './styles';
import {NavigationService, images} from '../../..';
import {routes} from '../../../constants';

const Onbroad: React.FC = () => {
  const styles = useStyles();

  const data = [
    {
      image: images.banner1,
      text1: 'Welcome to Wibu AI app',
      text2: 'Lorem iusmod tempor...',
    },
    {
      image: images.banner2,
      text1: 'Banner 2',
      text2: 'Lor',
    },
    {
      image: images.banner3,
      text1: 'Banner 3',
      text2: 'L e...',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const currentItem = data[currentIndex];

  const handleNext = () => {
    const nextIndex = currentIndex + 1;

    if (nextIndex < data.length) {
      setCurrentIndex(nextIndex);
    } else {
      NavigationService.navigate(routes.WELCOME);
    }
  };

  return (
    <View style={styles.container}>
      <Image style={styles.imgBanner} source={currentItem.image} />
      <View style={styles.content}>
        <Text style={styles.txtContent1}>{currentItem.text1}</Text>
        <Text style={styles.txtContent2}>{currentItem.text2}</Text>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.button1}
          onPress={() => NavigationService.navigate(routes.WELCOME)}>
          <Text style={styles.textBtn1}>Skip</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button2} onPress={handleNext}>
          <Text style={styles.textBtn2}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Onbroad;
