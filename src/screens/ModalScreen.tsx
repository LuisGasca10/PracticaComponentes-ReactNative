import { View, Text, Button, Modal, Alert, Pressable, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { styles } from '../theme/appTheme'
import HeaderTitle from '../components/HeaderTitle'

const ModalScreen = () => {

    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View style={styles.globalMargin}>
            <HeaderTitle text='Modal' />

            <Button
                title='Abrir Modal'
                onPress={() => setModalVisible(!modalVisible)}
            />

            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    setModalVisible(!modalVisible);
                }}>

                {/* Background */}
                <View style={{ ...stylesModal.centeredView, flex: 1, backgroundColor: 'rgba(0,0,0,0.3)' }}>

                    <View style={stylesModal.modalView}>
                        <Text style={stylesModal.modalText}>Hello World!</Text>
                        <Pressable
                            style={[stylesModal.button, stylesModal.buttonClose]}
                            onPress={() => setModalVisible(!modalVisible)}>
                            <Text style={stylesModal.textStyle}>Hide Modal</Text>
                        </Pressable>
                    </View>

                </View>

            </Modal>

        </View>
    )
}

const stylesModal = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
});

export default ModalScreen