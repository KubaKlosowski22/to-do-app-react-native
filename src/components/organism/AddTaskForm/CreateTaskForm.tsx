import React from 'react';
import { Formik } from 'formik';
import { View, TextInput, StyleSheet } from 'react-native';
import { SubmitButton } from '../../atoms/SubmitButton/SubmitButton';
import { Input } from '../../atoms/Form/Input/Input';

type PropsType = {
  onSubmit: () => void;
};

export const CreateTaskForm: React.FC<PropsType> = ({ onSubmit }) => {
  return (
    <Formik initialValues={{ task: '' }} onSubmit={(values) => console.log(values)}>
      {({ handleChange, handleBlur, handleSubmit, values }) => (
        <View>
          <View style={styles.inputContainer}>
            <Input
              value={values.task}
              placeholder="Write down your task..."
              onChangeText={handleChange('task')}
              onBlur={handleBlur('task')}
            />
          </View>
          <View style={styles.submitButtonContainer}>
            <SubmitButton onPress={() => onSubmit()} />
          </View>
        </View>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    margin: 15,
  },
  submitButtonContainer: {
    alignItems: 'center',
    marginTop: 16,
  },
});
