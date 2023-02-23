import { View, Text } from 'react-native'
import React from 'react'
import Modal from "react-native-modal";


interface OptionsModalProps {
    isVisible: boolean
}

export default function OptionsModal({ isVisible }: OptionsModalProps) {
    return (
        <View>
            <Modal isVisible={isVisible}>
                <View style={{ backgroundColor: "white" }}>
                    <Text>I am the modal content!</Text>
                </View>
            </Modal>
        </View>
    )
}