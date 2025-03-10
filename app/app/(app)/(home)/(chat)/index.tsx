import { Ionicons, MaterialIcons } from '@expo/vector-icons'
import React, { useState, useCallback, useEffect } from 'react'
import { Dimensions, StyleSheet, TouchableOpacity, View } from 'react-native'
import { GiftedChat, IMessage, Send } from 'react-native-gifted-chat'

const windowWidth = Dimensions.get('window').width;

export default function Index() {
  const [messages, setMessages] = useState<any>([])

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://randomuser.me/api/portraits/thumb/men/75.jpg',
        },
      },
      {
        _id: 2,
        text: 'Hello',
        createdAt: new Date(),
        user: {
          _id: 1,
          name: 'React Native',
          avatar: 'https://randomuser.me/api/portraits/thumb/men/75.jpg',
        },
      },
    ])
  }, [])

  const onSend = useCallback((messages: IMessage[] = []) => {
    setMessages((previousMessages: IMessage[]) =>
      GiftedChat.append(previousMessages, messages),
    )
  }, [])

  const renderSend = (props: any) => {
    return (
      <Send {...props} alwaysShowSend={true} >
        <View style={styles.sendButton} >
          <MaterialIcons name="send" size={24} color="#909090" />
        </View>
      </Send>
    );
  };

  return (
    <>
      <GiftedChat
          messages={messages}
          messagesContainerStyle={{borderWidth: 1, borderColor: '#fff',paddingBottom: 10}}
          textInputProps={{
            style: styles.textInput,
            placeholderTextColor: '#888',
          }}
          renderSend={renderSend}
          onSend={messages => onSend(messages)}
          user={{
            _id: 1,
          }}
        />
    </>
        
  )
}
const styles = StyleSheet.create({
  textInput: {
    width: windowWidth - 24 - 20,
    backgroundColor: '#e0e0e0',
    borderRadius: 20,
    paddingHorizontal: 15,
    height: 45,
    fontSize: 16,
  },
  sendButton: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    padding: 10,
    borderRadius: 50,
  }
});