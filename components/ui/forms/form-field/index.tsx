import React from 'react';
import {Control, Controller, FieldError, FieldValues, Path} from 'react-hook-form';
import {StyleSheet, TextInput, TextInputProps, View} from 'react-native';
import {Text} from "@/components/ui/rn-text";
import {FONT} from "@/constants/font-family";
import {COLORS} from "@/constants/Colors";

interface FormFieldProps<T extends FieldValues> extends TextInputProps {
    control: Control<T>;
    name: Path<T>;
    label?: string;
    rules?: any;
    error?: FieldError;
}

const FormField = <T extends FieldValues>({
                                              control,
                                              name,
                                              label,
                                              rules,
                                              error,
                                              ...inputProps
                                          }: FormFieldProps<T>) => {
    return (
        <View className={''}>
            {label && <Text variant={'title_medium'} style={styles.label}>{label}</Text>}
            <Controller
                control={control}
                render={({field: {onChange, onBlur, value}}) => (
                    <TextInput
                        style={[styles.input, error && styles.inputError, {fontFamily: FONT.MontserratLight, fontSize: 14}]}
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value as string}
                        selectionColor={COLORS.default}
                        {...inputProps}
                    />
                )}
                name={name}
                rules={rules}
            />
            {error && <Text style={styles.errorText}>{error.message}</Text>}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 16,
    },
    label: {
        marginBottom: 4,
        fontSize: 16,
        // fontWeight: '500',
    },
    input: {
        height: 50,
        borderWidth: 1,
        borderColor: '#ccc',
        backgroundColor: COLORS.tint,
        borderRadius: 8,
        paddingHorizontal: 12,
        fontSize: 16,
    },
    inputError: {
        borderColor: 'red',
    },
    errorText: {
        marginTop: 4,
        color: 'red',
        fontSize: 14,
    },
});

export default FormField;