import {View, Text} from 'react-native';
import React, {useState} from 'react';
import useStyles from './styles';
import {Country, CountryPickerProps, Datacountries} from './types';
import RNPickerSelect from 'react-native-picker-select';

const Picker_Country: React.FC<CountryPickerProps> = props => {
  const styles = useStyles();
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);

  return (
      <RNPickerSelect
        placeholder={{label: 'Select a country', value: null}}
        items={Datacountries}
        onValueChange={value => {
          const selected = Datacountries.find(
            country => country.value === value,
          );
          setSelectedCountry(selected || null);
          props.onValueChange(value, selected?.dialCode || '');
        }}
        value={selectedCountry?.value || null}
      />
  );
};

export default Picker_Country;
