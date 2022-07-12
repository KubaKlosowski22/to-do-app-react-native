import React from 'react';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { colors } from '../../../../assets/const/Colors';

type PropsType = {
  onClick: () => void;
};

export const CheckButton: React.FC<PropsType> = ({ onClick }) => {
  return (
    <BouncyCheckbox
      size={25}
      fillColor={colors.lightBlue}
      unfillColor="#FFFFFF"
      onPress={onClick}
    />
  );
};
