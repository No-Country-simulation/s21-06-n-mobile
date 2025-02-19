import { Colors } from '@/constants/Colors';
import React from 'react';
import { StyleSheet, Text, TextInput, useColorScheme, View } from 'react-native';


interface IProps{
    Field : string | number,
    handleChange : {(e: React.ChangeEvent<any>): void; <T = string | React.ChangeEvent<any>>(field: T): T extends React.ChangeEvent<any> ? void : (e: string | React.ChangeEvent<any>) => void;},
    handleBlur: {(e: React.FocusEvent<any>): void; <T = any>(fieldOrEvent: T): T extends string ? (e: any) => void : void;},
    submitForm : (() => Promise<void>) & (() => Promise<any>),
    values : any,
    touched :  boolean | undefined,
    errors : string | undefined,
    security?: boolean | undefined,
    label?: string | undefined
}
const Input = (props:IProps) => {
    const colorScheme = useColorScheme();
    const colorObject = Colors[colorScheme ?? 'light'];
    return (
        <View style={styles.container}>
            {props.label != undefined && <Text style={[styles.label, {color : colorObject.text}]}>{props.label}</Text>}
            <TextInput
            onChangeText={props.handleChange(props.Field)}
            onBlur={props.handleBlur(props.Field.toString())}
            value={props.values[props.Field]}
            secureTextEntry={props.security === undefined ? false : props.security}
            style={styles.input}
            />
            <Text style={{ color: 'red' }}>{props.errors ?? ""}</Text>
            
      </View>
    );
}

const styles = StyleSheet.create({
    container:{
        paddingVertical: 10,
    },
    label:{
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom : 10,
    },
    input:{
        backgroundColor: '#E9F6FE',
        color: '#13CAD6',
        paddingHorizontal: 15,
        paddingVertical: 8,
        borderRadius: 10
    }
})

export default Input;
