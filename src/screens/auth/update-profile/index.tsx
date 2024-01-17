import {Icon} from '@rneui/themed';
import React, {useState} from 'react';
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {NavigationService} from '../../..';
import {Avatar_btn} from './components';
import useStyles from './styles';
import CountryCodeDropdownPicker from 'react-native-dropdown-country-picker';
import SelectDropdown from 'react-native-select-dropdown';

const Update_Profile: React.FC = () => {
  const styles = useStyles();
  const [email, setEmail] = useState('');
  const [emailFocused, setEmailFocused] = useState(false);
  const [selected, setSelected] = useState<string>('+91');
  const [country, setCountry] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [gender, setgender] = useState(true);
  const formData = new FormData();

  const handleEmailFocus = () => {
    setEmailFocused(true);
  };

  const handleEmailBlur = () => {
    setEmailFocused(false);
  };
  const [selectedgender, setSelectedGender] = useState(
    gender ? 'Male' : 'Female',
  );
  const [checkSelectDropdown, setCheckSelectDropdown] = useState(false);

  const renderDropdownIcon = () => {
    return (
      <View>
        {checkSelectDropdown ? (
          <Icon name={'chevron-down-outline'} type="ionicon" />
        ) : (
          <Icon name={'chevron-up-outline'} type="ionicon" />
        )}
      </View>
    );
  };
  function handleDropdown(
    setGender: React.Dispatch<React.SetStateAction<boolean>>,
    formData: FormData,
  ): (selectedItem: any, index: number) => void {
    return (selectedItem, index) => {
      const newGender = selectedItem === 'Male';
      setGender(newGender);
      formData.append('gender', newGender.toString());
      setCheckSelectDropdown(true);
    };
  }

  return (
    <View style={styles.container}>
      <ScrollView nestedScrollEnabled showsVerticalScrollIndicator={false}>
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
            Please enter your profile. Don't worry, only you can see your
            personal data. No one else will be able to see it. Or you can skip
            it for now.
          </Text>
        </View>
        <Avatar_btn />
        <View style={styles.content}>
          <View style={styles.viewInput}>
            <View
              style={[
                styles.inputContainer,
                emailFocused && {borderColor: '#7E92F8'},
              ]}>
              <TextInput
                placeholder="Email"
                style={[styles.input, emailFocused && {borderColor: '#7E92F8'}]}
                onFocus={handleEmailFocus}
                onBlur={handleEmailBlur}
                onChangeText={text => setEmail(text)}
              />
              <Icon
                name="mail"
                type="ionicon"
                color={emailFocused ? '#7E92F8' : '#9E9E9E'}
                style={styles.iconInput}
              />
            </View>
          </View>
          <View style={styles.viewInput1}>
            <Text style={styles.txtTitleInput}>Phone Number</Text>
            <View style={[styles.inputCall]}>
              <CountryCodeDropdownPicker
                selected={selected}
                //@ts-ignore
                setSelected={setSelected}
                //@ts-ignore
                setCountryDetails={setCountry}
                phone={phone}
                //@ts-ignore
                setPhone={setPhone}
                phoneStyles={styles.inputphone}
                countryCodeContainerStyles={styles.inputCountry}
              />
              <Icon name="call" color={'#9E9E9E'} type="ionicon" />
            </View>
          </View>
          <View style={styles.viewTitle}>
            <Text style={styles.txtTitleInput}>Gender</Text>
          </View>
          <SelectDropdown
            data={['Male', 'Female']}
            onSelect={handleDropdown(setgender, formData)}
            buttonStyle={styles.btnDropdown}
            defaultValueByIndex={1}
            buttonTextStyle={styles.txtDropdown}
            dropdownOverlayColor="transparent"
            renderDropdownIcon={renderDropdownIcon}
            defaultButtonText={gender ? 'Male' : 'Female'}
            onFocus={() => setCheckSelectDropdown(!checkSelectDropdown)}
            dropdownStyle={styles.dropdownStyle}
          />
        </View>
        <View style={styles.footer}>
          <TouchableOpacity style={styles.btnSkip}>
            <Text style={styles.txtSkip}>Skip</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnNext}>
            <Text style={styles.txtNext}>Continue</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default Update_Profile;
