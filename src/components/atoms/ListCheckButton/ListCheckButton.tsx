import React from 'react';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

type PropsType = {
  onClick: () => void;
};

export const ListCheckButton: React.FC<PropsType> = ({ onClick }) => {
  return <BouncyCheckbox size={25} fillColor="#56B4D3" unfillColor="#FFFFFF" onPress={onClick} />;
};
