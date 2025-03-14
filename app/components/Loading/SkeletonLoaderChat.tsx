import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import { useConfiguration } from '@/hooks/useConfiguration';

const ChatSkeleton = () => {
    const { colorObject } = useConfiguration();

    return (
        <View style={[styles.container, { backgroundColor: colorObject.background }]}>
            <ScrollView contentContainerStyle={[styles.scrollContainer, { backgroundColor: colorObject.background }]}>
                <View style={{ backgroundColor: colorObject.background }}>
                    <SkeletonPlaceholder backgroundColor={colorObject.skeletonBackground} highlightColor={colorObject.skeletonHighlight}>
                        <>
                            {Array(6).fill(null).map((_, index) => (
                                <View
                                    key={index}
                                    style={[
                                        styles.messageContainer,
                                        index % 2 === 0 ? styles.leftMessage : styles.rightMessage,
                                    ]}
                                >
                                    {/* Avatar (solo para mensajes recibidos) */}
                                    {index % 2 === 0 && (
                                        <SkeletonPlaceholder.Item width={40} height={40} borderRadius={20} />
                                    )}
                                    {/* Burbuja de mensaje */}
                                    <SkeletonPlaceholder.Item
                                        width={index % 2 === 0 ? '70%' : '60%'} // Ancho variable
                                        height={Math.random() * 40 + 40} // Altura variable
                                        borderRadius={10}
                                        marginLeft={index % 2 === 0 ? 10 : 0}
                                        marginTop={10} // Espacio entre mensajes
                                    />
                                </View>
                            ))}
                        </>
                    </SkeletonPlaceholder>
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        zIndex: 1000
    },
    scrollContainer: {
        flexGrow: 1,
        justifyContent: 'flex-end',
    },
    messageContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    leftMessage: {
        alignSelf: 'flex-start',
    },
    rightMessage: {
        alignSelf: 'flex-end',
    },
});

export default ChatSkeleton;