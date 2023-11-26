import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {styles} from '../styles/buttonModelStyle';

interface ButtonModelProps {
  onPress: () => void;
  title: string;
  disabled?: boolean;
  style?: any;
  activeOpacity?: number;
  accessibilityLabel?: string;
}

const ButtonModel: React.FC<ButtonModelProps> = ({
  onPress,
  title,
  disabled,
  style,
  activeOpacity,
  accessibilityLabel,
}) => {
  return (
    <TouchableOpacity
      style={[styles.container, style]}
      onPress={onPress}
      disabled={disabled}
      activeOpacity={activeOpacity}
      accessibilityLabel={accessibilityLabel}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default ButtonModel;
