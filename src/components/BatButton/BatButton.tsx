import React, { useState } from 'react';
import { Text, Pressable, Alert } from 'react-native';
import { styles } from './BatButtonStyles';
import { BatTextInput } from '../BatTextInput/BatTextInput';
import generatePass from '../../services/passwordService';
import * as Clipboard from 'expo-clipboard';

export function BatButton() {
    const [pass, setPass] = useState('')

    function handleGenerateButton(){
        let generateToken = generatePass()
        setPass(generateToken)
    }

    async function handleCopyButton(){
    if(!pass){
        Alert.alert('Erro', 'Gere uma senha primeiro')
        return
    }

    await Clipboard.setStringAsync(pass)
    Alert.alert('Copiado!', 'Senha copiada com sucesso')
}

    return (
        <>
            <BatTextInput pass={pass}/>

            <Pressable onPress={handleGenerateButton}
                style={({pressed}) => [
                styles.buttonGenerate,
                { opacity: pressed ? 0.7 : 1 }
            ]}
>
            <Text style={styles.textGenerate}>GENERATE</Text>
            </Pressable>

            <Pressable onPress={handleCopyButton}
                style={styles.buttonCopy}>
            <Text style={styles.textCopy}>COPY</Text>
            </Pressable>
        </>
);
}