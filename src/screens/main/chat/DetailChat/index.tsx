import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import React from 'react';
import useStyles from './styles';
import {Icon} from '@rneui/themed';
import Logo_outline from '../../../../assets/images/svg/components/Logo_outline';
import {Button_Send, LogoIcon_outline} from '../../../../assets/images/svg';

const Detail_Chat: React.FC = () => {
  const styles = useStyles();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon name="arrowleft" type="antdesign" style={styles.iconHeader} size={28}/>
        <Text style={styles.txtHeader}>Wibu AI</Text>
      </View>
      <View style={styles.content}>
        <LogoIcon_outline width={90} height={90} viewBox="-5 10 80 50" />
        <Text style={styles.txtContent}>Capabilities</Text>
      </View>
      <View style={styles.viewbtnContent}>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.txtButton}>Answer all your questions.</Text>
          <Text style={styles.txtButton}>(Just ask me anything you like!)</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.txtButton}>Generate all the text you want.</Text>
          <Text style={styles.txtButton}>
            (essays, articles, reports, stories, & more)
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.txtButton}>Conversational AI.</Text>
          <Text style={styles.txtButton}>
            (I can talk to you like a natural human)
          </Text>
        </TouchableOpacity>
        <Text style={styles.txtButton}>
          These are just a few examples of what I can do.
        </Text>
      </View>
      <View style={styles.footer}>
        <TextInput
          style={styles.input}
          placeholderTextColor={'silver'}
          placeholder="Ask me anything..."
        />
        <TouchableOpacity style={{paddingTop: 15}}>
          <Button_Send />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Detail_Chat;
