import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { View, Text, Flex, Input, Button, ScrollView } from 'native-base';
import { useColors } from '../hooks/useColors';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faComment } from '@fortawesome/free-regular-svg-icons/faComment';
export default function Chat({ navigation }) {
  const [messages, setMessages] = useState([
    { role: "system", content: 'Helpout chatbot is a helpful, patient listener who tries to help patients understand and process their own feelings', time: new Date('2021-01-01 12:00:00') },
    { role: "assistant", content: "Hi, how're you doing?", time: new Date() }
  ]);
  const [inputText, setInputText] = useState('');
  const color = useColors();
  const [loading, setLoading] = useState(false);
  const [flag, setFlag] = useState(true)

  useEffect(()=>{
    if (flag) {
      setFlag(!flag)
      return
    }
    setLoading(true);
    fetch('https://lokeshc2.me/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(messages)
    }).then(res => res.json())
      .then(data => setMessages([...messages, data]))
      .catch(console.warn)
      .finally(() => setLoading(false));
    setFlag(!flag)
  }, [messages])

  const handleSend = () => {
    if (inputText !== '') {
      setMessages([...messages, { role:'user', content: inputText, time: new Date() }]);
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

            {messages.filter(m=>m.role!='system').map((message, index) => (
              <View
                key={index}
                flex={1}
                m={1}
              >
                <View
                  key={index}
                  p={1}
                  borderRadius={5}
                  bg={message.role=='user' ? color.primary : color.secondary}
                  alignSelf={message.role=='user' ? 'flex-end' : 'flex-start'}
                >
                  <Text flexWrap={'wrap'} maxW={'100%'} color={color.text}>{message.content}</Text>
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
