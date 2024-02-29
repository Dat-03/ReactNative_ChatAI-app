import React, {useState} from 'react';
import {Alert, Modal, Text, View} from 'react-native';
import {ModalSucces} from '../../../assets/images/svg';
import Loading_modal from './components/Loading';
import useStyles from './styles';

const ModalCustom: React.FC = () => {
  const styles = useStyles();
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.modal}>
          <View style={styles.modalView}>
            <View
              style={{alignItems: 'center', justifyContent: 'center', gap: 15}}>
              <ModalSucces />
              <Text style={styles.txtStatus}>Log in Successful!</Text>
              <View>
                <Text style={styles.loadingtxt}>Please wait...</Text>
                <Text style={styles.loadingtxt}>
                  You will be directed to the homepage.
                </Text>
              </View>
              <View>
                <Loading_modal />
              </View>
            </View>
          </View>
        </View>
      </Modal>
      {/* <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.textStyle}>Show Modal</Text>
      </Pressable> */}
    </View>
  );
};

export default ModalCustom;
