import React, {useState} from 'react';
import {Text, View} from 'react-native';
import useStyles from './styles';
import {Picker_Country} from './components';

const ScreenText: React.FC = () => {
  const styles = useStyles();
  const [selectedCountry, setSelectedCountry] = useState<string>('');
  const [dialCode, setDialCode] = useState<string>('');

  const handleCountryChange = (value: string, dialCode: string) => {
    setSelectedCountry(value);
    setDialCode(dialCode);
  };

  return (
    <View style={styles.container}>
      <View style={styles.view1}>
        <Picker_Country onValueChange={handleCountryChange} />
        {selectedCountry && <Text>Dial Code: {dialCode}</Text>}
      </View>
    </View>
  );
};

export default ScreenText;
