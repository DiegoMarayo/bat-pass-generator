import React from 'react';
import { TextInput } from 'react-native';

import { styles } from './BatTextInputStyles';

interface BatTextInputProps{
        pass:string
}

export function BatTextInput(props:BatTextInputProps) {
return (
        <TextInput style={styles.inputer} placeholder='Your password will appear here' placeholderTextColor="#e5bf3c80"
        value={props.pass}
        />
);
}