import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { View, Text, Flex, Input, Button, ScrollView } from 'native-base';
import { useColors } from '../hooks/useColors';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faComment } from '@fortawesome/free-regular-svg-icons/faComment';
export default function Chat({ navigation }) {
  const [messages, setMessages] = useState([
    { text: 'Hello', sender: 'me', time: new Date('2021-01-01 12:00:00') },
    { text: 'Hi', sender: 'other', time: new Date('2021-01-01 12:00:01') },
    { text: 'How are you?', sender: 'me', time: new Date('2021-01-01 12:00:02') },
    { text: 'I am fine, thanks', sender: 'other', time: new Date('2021-01-01 12:00:03') },
    { text: 'What about you?', sender: 'me', time: new Date('2021-01-01 12:00:04') },
    { text: 'I am good', sender: 'other', time: new Date('2021-01-01 12:00:05') },
    { text: 'Nice to hear that', sender: 'me', time: new Date('2021-01-01 12:00:06') },
    { text: 'Bye', sender: 'me', time: new Date('2021-01-01 12:00:07') }
  ]);
  const [inputText, setInputText] = useState('');
  const color = useColors();
  const [loading, setLoading] = useState(false);

  const getResponse = (text) => {
    setLoading(true);
    fetch(process.env.REACT_APP_API_URI + '/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ prompt: text + '->' })
    }).then(res => res.json())
      .then(data => setMessages([...messages, { text: data.text, sender: 'other', time: new Date() }]))
      .catch(console.warn)
      .finally(() => setLoading(false));
  };

  const handleSend = () => {
    if (inputText !== '') {
      setMessages([...messages, { text: inputText, sender: 'me', time: new Date() }]);
      getResponse(inputText);
      setInputText('');
    }
  };

  return (
    <SafeAreaView>
      <Flex h='full' bg={color.background} justifyContent={'flex-end'} _web={{ h: '95vh' }}>
        <Flex bg={color.background} flexDir={'column'} p={3}>
          <ScrollView flexDir={'column-reverse'}>
            {!messages.length && (
              <View flex={1} justifyContent={'center'} alignItems={'center'}>
                <FontAwesomeIcon icon={faComment} size={100} color={color.text} />
                <Text color={color.text} fontSize={'xl'}>Start a conversation</Text>
              </View>
            )}

            {messages.map((message, index) => (
              <View
                key={index}
                flex={1}
                m={1}
              >
                <View
                  key={index}
                  p={1}
                  borderRadius={5}
                  bg={message.sender === 'me' ? color.primary : color.secondary}
                  alignSelf={message.sender === 'me' ? 'flex-end' : 'flex-start'}
                >
                  <Text flexWrap={'wrap'} maxW={'100%'} color={color.text}>{message.text}</Text>
                </View>
              </View>
            ))}
            <View flexDirection="row" alignItems="center" justifyContent="space-between" p={1}>
              <Input
                placeholder="Type your message"
                onChangeText={text => setInputText(text)}
                value={inputText}
                multiline={true}
                onKeyPress={e => e.key === 'Enter' && !e.shiftKey && handleSend()}

                flex={4}
                color={color.text}
                placeholderTextColor={color.text}
                bg={"#F5F5F5"}
              />
              <Button
                flex={1}
                ml={2}
                bg={color.primary}
                borderWidth={2}
                borderColor={color.primary}
                onPress={handleSend}
                _text={{ color: color.text }}
              >
                Send
              </Button>
            </View>
          </ScrollView>
        </Flex>
      </Flex>
    </SafeAreaView>
  );
};
