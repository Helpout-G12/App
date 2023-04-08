import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Container, Content, Input, Button } from 'native-base';
import { useColorScheme } from 'react-native-appearance';

const ChatScreen = () => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');
  const colorScheme = useColorScheme();
  const color = {
    background: colorScheme === 'light' ? 'white' : 'black',
    primary: '#007bff',
    text: colorScheme === 'light' ? 'black' : 'white'
  };

  const handleSend = () => {
    if (inputText !== '') {
      setMessages([...messages, { text: inputText, sender: 'me' }]);
      setInputText('');
    }
  };

  return (
    <Container style={{ backgroundColor: color.background }}>
      <Content>
        <View style={styles.chatContainer}>
          {messages.map((message, index) => (
            <View
              key={index}
              style={[
                styles.messageContainer,
                message.sender === 'me'
                  ? styles.rightMessage
                  : styles.leftMessage
              ]}
            >
              <Text style={{ color: color.text }}>{message.text}</Text>
            </View>
          ))}
        </View>
        <View style={styles.inputContainer}>
          <Input
            style={{ color: color.text }}
            placeholder="Type your message"
            placeholderTextColor={color.text}
            value={inputText}
            onChangeText={text => setInputText(text)}
          />
          <Button onPress={handleSend} style={{ backgroundColor: color.primary }}>
            <Text style={{ color: color.text }}>Send</Text>
          </Button>
        </View>
      </Content>
    </Container>
  );
};

const styles = StyleSheet.create({
  chatContainer: {
    padding: 10
  },
  messageContainer: {
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    maxWidth: '80%'
  },
  leftMessage: {
    backgroundColor: '#e1e1e1',
    alignSelf: 'flex-start'
  },
  rightMessage: {
    backgroundColor: '#007bff',
    alignSelf: 'flex-end'
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10
  }
});

export default ChatScreen;