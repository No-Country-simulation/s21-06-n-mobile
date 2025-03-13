import SkeletonLoaderChat from '@/components/Loading/SkeletonLoaderChat';
import Show from '@/components/Show/Show';
import { MaterialIcons } from '@expo/vector-icons';
import React, { useState, useCallback, useEffect } from 'react';
import { Dimensions, StyleSheet, View, Text, Image } from 'react-native';
import { GiftedChat, IMessage, InputToolbar, Send } from 'react-native-gifted-chat';
import { useConfiguration } from '@/hooks/useConfiguration';
import { useLocalSearchParams } from 'expo-router';
import { EventChats } from '@/mock/Events';

const windowWidth = Dimensions.get('window').width;

export default function Index() {
    const [messages, setMessages] = useState<IMessage[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const { colorObject } = useConfiguration();
    const { idEvent } = useLocalSearchParams();
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            if (idEvent !== undefined && idEvent.length !== 0) {
                let messages = EventChats.find((x) => x.eventId === idEvent);
                const loadedMessages: IMessage[] = [...(messages?.messages || [])].reverse();
                setMessages(loadedMessages);
            }
            setLoading(false);
        }, 2000);
    }, [idEvent]);

    const onSend = useCallback((newMessages: IMessage[] = []) => {
        setMessages((previousMessages) => GiftedChat.append(previousMessages, newMessages));
    }, []);

    const renderSend = (props: any) => {
        return (
            <Send {...props} alwaysShowSend={true}>
                <View style={styles.sendButton}>
                    <MaterialIcons name="send" size={30} color={colorObject.tabIconSelected} />
                </View>
            </Send>
        );
    };

    const renderInputToolbar = (props: any) => {
        return (
            <InputToolbar
                {...props}
                containerStyle={[styles.inputToolbar, { backgroundColor: colorObject.inputToolbarBackground }]}
            />
        );
    };

    const renderTime = (props: any) => {
        return (
            <Text style={[styles.timeText, { color: colorObject.text }]}>
                {new Date(props.currentMessage?.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </Text>
        );
    };
    return (
        <View style={[styles.container, { backgroundColor: colorObject.background }]}>
            <Show>
                <Show.When isTrue={!loading && messages.length > 0}>
                    <GiftedChat
                        messages={messages}
                        messagesContainerStyle={{ paddingBottom: 10 }}
                        textInputProps={{
                            style: [styles.textInput, { backgroundColor: colorObject.inputBackground, color: colorObject.text }],
                            placeholderTextColor: colorObject.placeholderText
                        }}
                        renderSend={renderSend}
                        onSend={(newMessages) => onSend(newMessages)}
                        user={{
                            _id: 1, // ID del usuario actual
                        }}
                        renderAvatarOnTop={true}
                        renderBubble={(props) => (
                            <View
                                style={[
                                    styles.bubble,
                                    {
                                        backgroundColor: props.position === 'left' ? colorObject.chatBubbleBackground : colorObject.buttonBackground,
                                        alignSelf: props.position === 'left' ? 'flex-start' : 'flex-end',
                                    },
                                ]}
                            >
                                <Text style={{ color: props.position === 'left' ? colorObject.text : colorObject.textButton }}>
                                    {props.currentMessage?.text}
                                </Text>
                            </View>
                        )}
                        renderInputToolbar={renderInputToolbar}
                        renderTime={renderTime}
                    />
                </Show.When>
                <Show.When isTrue={!loading && messages.length === 0}>
                    <View style={styles.emptyChatContainer}>
                        {/* <Image
                            source={require('@/assets/images/empty-chat.png')}
                            style={styles.emptyChatImage}
                        /> */}
                        <Text style={[styles.emptyChatText, { color: colorObject.text }]}>No hay chat activo</Text>
                    </View>
                </Show.When>
                <Show.Else>
                    <SkeletonLoaderChat />
                </Show.Else>
            </Show>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    textInput: {
        width: windowWidth - 80,
        borderRadius: 20,
        paddingHorizontal: 15,
        height: 45,
        fontSize: 16,
    },
    inputToolbar: {
        borderTopWidth: 0,
        paddingLeft: 5,
        paddingVertical: 5,
        justifyContent: 'center'
    },
    sendButton: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 5,
        borderRadius: 20,
        paddingHorizontal: 10
    },
    bubble: {
        maxWidth: '80%',
        padding: 10,
        borderRadius: 10,
        marginVertical: 5
    },
    timeText: {
        fontSize: 12,
        marginTop: 5,
        opacity: 0.7,
    },
    emptyChatContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    emptyChatImage: {
        width: 150,
        height: 150,
        marginBottom: 20,
    },
    emptyChatText: {
        fontSize: 18,
        fontWeight: '500',
    },
});