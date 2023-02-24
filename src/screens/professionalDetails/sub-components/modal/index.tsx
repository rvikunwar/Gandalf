import { View, Text, Pressable, Modal, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './style';
import { CloseSvg } from '../../../../assets';


interface OptionsModalProps {
    modalVisible: boolean,
    setModalVisible: (modal: boolean) => void
}

export default function OptionsModal({ modalVisible, setModalVisible }: OptionsModalProps) {
    return (
        <View style={styles.centeredView}>
            <Modal
                animationType="none"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <TouchableOpacity 
                            style={styles.close}
                            onPress={() => setModalVisible(!modalVisible)}>
                            <CloseSvg fill="gray"/>
                        </TouchableOpacity>

                        <Text style={styles.modalText}>Action</Text>
                        <View>
                            <Pressable
                                style={[styles.hired, styles.button ]}>
                                <Text style={styles.textStyle}>Hired</Text>
                            </Pressable>

                            <Pressable
                                style={[styles.button, styles.notHired ]}
                                onPress={() => {
                                    
                                }}>
                                <Text style={styles.textStyle}>Not hired</Text>
                            </Pressable>

                            <Pressable
                                style={[styles.button, styles.pending ]}
                                onPress={() => {
                                    
                                }}>
                                <Text style={styles.textStyle}>Pending</Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    )
}