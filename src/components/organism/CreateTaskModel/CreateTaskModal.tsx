import React, { useState } from 'react';
import { Modal, View, StyleSheet } from 'react-native';
import { AddButton } from '../../atoms/AddButton/AddButton';
import { ModalHeader } from '../../molecule/Modal/Header/ModalHeader';
import { CreateTaskForm } from '../AddTaskForm/CreateTaskForm';
import { colors } from '../../../../assets/const/Colors';

type PropsType = {};

export const CreateTaskModal: React.FC<PropsType> = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View>
      <Modal visible={modalVisible} transparent onRequestClose={() => setModalVisible(false)}>
        <View style={styles.modalContentWrapper}>
          <View style={styles.modalContent}>
            <ModalHeader onClose={() => setModalVisible(false)} />
            <CreateTaskForm onSubmit={() => setModalVisible(false)} />
          </View>
        </View>
      </Modal>
      <AddButton onClick={() => setModalVisible(true)} />
    </View>
  );
};

const styles = StyleSheet.create({
  modalContentWrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalContent: {
    flex: 1,
    backgroundColor: colors.white,
    paddingVertical: 30,
    paddingHorizontal: 20,
    marginHorizontal: 20,
    borderRadius: 6,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontFamily: 'montserrat',
  },
  modalHeaderText: {
    fontSize: 16,
    fontFamily: 'montserrat',
  },
});
