import React from 'react';
import { Text, TextInput, View, TextInputProps } from 'react-native';
import { Controller, FieldError, Control } from 'react-hook-form';

interface FormInputProps extends TextInputProps {
  name: string;
  label?: string;
  control: Control<any>;
  rules?: object;
  // error?: FieldError;
}

const FormInput: React.FC<FormInputProps> = ({
  name,
  label,
  control,
  rules,
  // error,
  ...inputProps
}) => {

  const error = false

  return (
    <View style={{ marginBottom: 16 }}>
      {label && <Text style={{ marginBottom: 4 }}>{label}</Text>}
      <Controller
        control={control}
        name={name}
        rules={rules}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={{
              borderWidth: 1,
              borderColor: error ? 'red' : '#ccc',
              padding: 10,
              borderRadius: 6,
            }}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            {...inputProps}
          />
        )}
      />
      {/* {error && <Text style={{ color: 'red', marginTop: 4 }}>{error.message}</Text>} */}
    </View>
  );
};

export default FormInput;
