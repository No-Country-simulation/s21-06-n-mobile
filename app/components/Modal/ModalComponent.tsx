
import { useConfiguration } from '@/hooks/useConfiguration';
import { Modal, StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';

interface ModalProps {
    visible: boolean;
    onClose: () => void;
    title?: string;
    children?: React.ReactNode;
}
const ModalComponent: React.FC<ModalProps> = ({ visible, onClose, title, children }) => {
    const { colorObject } = useConfiguration();

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={visible}
            onRequestClose={onClose}
        >
            <View style={styles.overlay}>
                <View style={[styles.modalContainer, { backgroundColor: colorObject.background }]}>
                    <View style={styles.positionButton}>
                        <TouchableOpacity style={[styles.closeButton, {backgroundColor: '#D1C8FE'}]} onPress={onClose}>
                            <AntDesign name="close" size={24} color="black" />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.content}>
                        {children}
                    </View>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        width: '100%',
        alignItems: 'center',
    },
    modalContainer: {
        width: '90%',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
        position: 'relative'
    },
    title: {
        fontSize: 18,
        lineHeight: 21,
        letterSpacing: -0.2,
        fontWeight: 500,
        marginVertical: 5
    },
    content: {
        marginBottom: 20,
        width: '100%',
    },
    closeButton: {
        padding: 5,
        borderRadius: 80,
    },
    positionButton: {
        position: 'absolute',
        top: 15,
        right: 15,
        zIndex: 50
    }
});

export default ModalComponent;
