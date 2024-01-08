import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import useStyles from './styles';
import {Icon} from '@rneui/themed';
import AvatarComponets from '../../../../components/customs/Avatar';
import SelectDropdown from 'react-native-select-dropdown';
import {NavigationService} from '../../../..';
import {Calender_icon} from '../../../../assets/images/svg';
const Personal_info: React.FC = () => {
  const styles = useStyles();
  const [gender, setgender] = useState(true);
  const formData = new FormData();

  const [selectedgender, setSelectedGender] = useState(
    gender ? 'Male' : 'Female',
  );
  const [checkSelectDropdown, setCheckSelectDropdown] = useState(false);

  const renderDropdownIcon = () => {
    return (
      <View>
        <View style={styles.iconleft}>
          {gender && selectedgender === 'Male' ? (
            <Icon
              name="man-outline"
              type="ionicon"
              size={24}
              color={styles.icon.color}
            />
          ) : (
            <Icon
              name="woman-outline"
              type="ionicon"
              size={24}
              color={styles.icon.color}
            />
          )}
        </View>

        {checkSelectDropdown ? (
          <Icon name={'caret-down'} type="ionicon" />
        ) : (
          <Icon name={'caret-up'} type="ionicon" />
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
      <View style={styles.header}>
        <Icon
          name="arrow-back-outline"
          type="ionicon"
          style={styles.icon}
          onPress={() => NavigationService.goBack()}
        />
        <Text style={styles.textHeader}>Personal Info</Text>
        <Icon
          name="print-outline"
          type="ionicon"
          style={styles.icon}
          size={30}
        />
      </View>
      <View style={styles.avatar}>
        <AvatarComponets />
      </View>
      <View style={styles.content}>
        <View style={styles.viewTitle}>
          <Text style={styles.title}>Full name</Text>
          <Icon name="person" type="ionicon" style={styles.icon} />
        </View>
        <TextInput style={styles.txtInput} placeholder="Full name this here" />

        <View style={styles.viewTitle}>
          <Text style={styles.title}>Phone Number</Text>
          <Icon
            name="phone-in-talk"
            type="material-community"
            style={styles.icon}
          />
        </View>
        <TextInput
          style={styles.txtInput}
          placeholder="Phone number this here"
        />

        <View style={styles.viewTitle}>
          <Text style={styles.title}>Gender</Text>
          <Icon name="male-female-outline" type="ionicon" />
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
        />

        <View style={styles.viewTitle}>
          <Text style={styles.title}>Date of Birth</Text>
          <Calender_icon />
        </View>
        <View style={styles.viewInput}>
          <TextInput placeholder="2003/12/11" style={styles.input} />
          <TouchableOpacity>
            <Calender_icon />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Personal_info;
