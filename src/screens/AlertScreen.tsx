import { Alert, Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HeaderTitle from '../components/HeaderTitle'
import { styles } from '../theme/appTheme'
import prompt from 'react-native-prompt-android'

const AlertScreen = () => {
    const showAlert = () => {
        Alert.alert('Alert Title', 'My Alert Msg', [
            {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'destructive',
            },
            { text: 'OK', onPress: () => console.log('OK Pressed') },
        ],
            {
                cancelable: true,
            }

        );
    }

    const showPrompt = () => {

        // Alert.prompt(
        //     'Estas seguro?',
        //     'Esta Accion no se puede revertir'

        // );

        prompt(
            'Enter password',
            'Enter your password to claim your $1.5B in lottery winnings',
            [
                { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
                { text: 'OK', onPress: password => console.log('OK Pressed, password: ' + password) },
            ],
            {
                type: 'secure-text',
                cancelable: false,
                defaultValue: 'test',
                placeholder: 'placeholder'
            }
        );

    }


    return (
        <View style={styles.globalMargin}>
            <HeaderTitle text='Alert Screen' />

            <Button title='Mostrar alerta'
                onPress={showAlert}
            />

            <Button title='Mostrar prompt'
                onPress={showPrompt}
            />

        </View>
    )
}

export default AlertScreen

