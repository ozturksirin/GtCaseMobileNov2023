import React from 'react';
import {Text, TextInput, View} from 'react-native';
import {styles} from '../styles/inputModelStyle';

interface InputModelProps {
  placeholder?: string;
  value?: string;
  onChangeText?: (text: string) => void;
  secureTextEntry?: boolean;
  keyboardType?: any;
  autoCapitalize?: any;
  autoCorrect?: boolean;
  autoFocus?: boolean;
  editable?: boolean;
  maxLength?: number;
  multiline?: boolean;
  numberOfLines?: number;
  onBlur?: () => void;
  onFocus?: () => void;
  onSubmitEditing?: () => void;
  onEndEditing?: () => void;
  returnKeyType?: any;
  err?: string;
}

const InputModel: React.FC<InputModelProps> = props => {
  const {
    placeholder,
    value,
    onChangeText,
    secureTextEntry,
    keyboardType,
    autoCapitalize,
    autoCorrect,
    autoFocus,
    editable,
    maxLength,
    multiline,
    numberOfLines,
    onBlur,
    onFocus,
    onSubmitEditing,
    onEndEditing,
    returnKeyType,
    err,
  } = props;
  return (
    <>
      <View style={styles.container}>
        <TextInput
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
          autoCapitalize={autoCapitalize}
          autoCorrect={autoCorrect}
          autoFocus={autoFocus}
          editable={editable}
          maxLength={maxLength}
          multiline={multiline}
          numberOfLines={numberOfLines}
          onBlur={onBlur}
          onFocus={onFocus}
          onSubmitEditing={onSubmitEditing}
          onEndEditing={onEndEditing}
          returnKeyType={returnKeyType}
        />
        <Text style={styles.err}>{err}</Text>
      </View>
    </>
  );
};

export default InputModel;
