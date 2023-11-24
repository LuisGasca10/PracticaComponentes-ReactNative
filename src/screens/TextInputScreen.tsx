import { View, Text, StyleSheet, KeyboardAvoidingView, Platform, ScrollView } from 'react-native'
import React, { useContext, useState } from 'react'
import HeaderTitle from '../components/HeaderTitle'
import { styles } from '../theme/appTheme'
import { TextInput } from 'react-native-gesture-handler'
import { useForm } from '../hooks/useForm'
import CustomSwitch from '../components/CustomSwitch'
import { ThemeContext } from '../context/themeContext/ThemeContext'

const TextInputScreen = () => {

    const { onChange, email, form, phone, name, isSuscribe } = useForm({
        name: '',
        email: '',
        phone: '',
        isSuscribe: false,
    })
    const { theme: { colors, dividerColor } } = useContext(ThemeContext);

    // const onChange = (value: string, field: string) => {
    //     setForm({
    //         ...form,
    //         [field]: value
    //     });
    // }

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >

            <ScrollView>



                <View style={styles.globalMargin}>
                    <HeaderTitle text='Text inputs' />

                    <TextInput
                        style={{
                            ...stylesTxtScreen.txtInputStyle, borderColor: colors.text,
                            color: colors.text
                        }}
                        placeholder='Ingrese su Nombre'
                        autoCapitalize='words'
                        autoCorrect={false}
                        onChangeText={(value) => onChange(value, 'name')}
                        placeholderTextColor={dividerColor}
                    />
                    <TextInput
                        style={{
                            ...stylesTxtScreen.txtInputStyle, borderColor: colors.text,
                            color: colors.text
                        }}
                        placeholder='Ingrese su email'
                        autoCapitalize='none'
                        keyboardType='email-address'
                        autoCorrect={false}
                        onChangeText={(value) => onChange(value, 'email')}
                        placeholderTextColor={dividerColor}
                    />

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ color: colors.text }}>Suscribirme</Text>

                        <CustomSwitch isOn={isSuscribe} onChange={(value) => onChange(value, 'isSuscribe')} />

                    </View>


                    <HeaderTitle text={JSON.stringify(form, null, 5)} />
                    <HeaderTitle text={JSON.stringify(form, null, 5)} />
                    <TextInput
                        style={{
                            ...stylesTxtScreen.txtInputStyle, borderColor: colors.text,
                            color: colors.text
                        }}
                        placeholder='Ingrese su numero'
                        autoCorrect={false}
                        keyboardType='numeric'
                        onChangeText={(value) => onChange(value, 'phone')}
                        placeholderTextColor={dividerColor}
                    />


                    <View style={{ height: 100 }} />

                </View>
            </ScrollView>


        </KeyboardAvoidingView>
    )
}

export default TextInputScreen

const stylesTxtScreen = StyleSheet.create({
    txtInputStyle: {
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.5 )',
        height: 50,
        paddingHorizontal: 10,
        borderRadius: 8,
        marginVertical: 10
    }
});