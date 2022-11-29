/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Modal} from 'react-native';

const AppModal = ({visible, children, height = '90%', top = '0%', style}) => {
  const [showModal, SetShowModal] = useState(visible);
  useEffect(() => {
    ToggleModal();
  }, [visible]);

  const ToggleModal = () => {
    if (visible) {
      SetShowModal(true);
    } else {
      SetShowModal(false);
    }
  };
  return (
    <Modal
      transparent={true}
      visible={showModal}
      animationType={'fade'}
      onRequestClose={() => SetShowModal(false)}
      presentationStyle={'overFullScreen'}
      supportedOrientations={'portrait-upside-down'}>
      <View style={styles.modalBackground}>
        <View style={[styles.modalCon, {height, top}, style]}>{children}</View>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  modalBackground: {
    // flex:1,
    //backgroundColor:'skyblue',
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop:10,
  },
  modalCon: {
    //top:"20%",
    width: '90%',
    //  height:'90%',
    backgroundColor: 'white',
    // marginTop:10,
    //  paddingHorizontal:20,
    paddingVertical: 20,
    borderRadius: 15,
    elevation: 10,
    marginVertical: 10,
    //    marginTop:"20%",
  },
});
export default AppModal;
