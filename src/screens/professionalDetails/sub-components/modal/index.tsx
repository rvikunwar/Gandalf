import { View, Text, Pressable, Modal, TouchableOpacity, ActivityIndicator } from 'react-native'
import React from 'react'
import styles from './style';
import { CloseSvg } from '../../../../assets';


interface OptionsModalProps {
    modalVisible: boolean,
    setModalVisible: (modal: boolean) => void;
    updateJobApp: (status: number) => void;
    loader: boolean;
}

export default function OptionsModal({ modalVisible, setModalVisible, updateJobApp, loader }: OptionsModalProps) {
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
                        <View style={styles.buttonContainer}>

                            <Pressable
                                disabled={loader}
                                onPress={()=>updateJobApp(0)}
                                style={[styles.button, styles.pending ]}
                                >
                                <Text style={styles.textStyle}>Applied</Text>
                            </Pressable>

                            <Pressable
                                disabled={loader}
                                onPress={()=>updateJobApp(1)}
                                style={[styles.button, styles.completed ]}
                                >
                                <Text style={styles.textStyle}>Completed</Text>
                            </Pressable>
                            
                            <Pressable
                                disabled={loader}
                                onPress={()=>updateJobApp(2)}
                                style={[styles.button, styles.accepted ]}
                                >
                                <Text style={styles.textStyle}>Accepted</Text>
                            </Pressable>

                            <Pressable
                                disabled={loader}
                                onPress={()=>updateJobApp(3)}
                                style={[styles.button, styles.rejected ]}
                                >
                                <Text style={styles.textStyle}>Rejected</Text>
                            </Pressable>

                            <Pressable
                                disabled={loader}
                                onPress={()=>updateJobApp(4)}
                                style={[styles.hired, styles.button ]}>
                                <Text style={styles.textStyle}>Hired</Text>
                            </Pressable>

                            <Pressable
                                disabled={loader}
                                onPress={()=>updateJobApp(5)}
                                style={[styles.button, styles.notHired ]}>
                                <Text style={styles.textStyle}>Not hired</Text>
                            </Pressable>

                            { loader && <ActivityIndicator style={styles.loader} size="large" color="#0000ff"/>}
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    )
}