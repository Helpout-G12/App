import { View, Text, Image, Container, Row, Column, Link, Button } from 'native-base'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import leaf from "../assets/images/leaf.png";

const ThoughtDiaryScreen = () => {
  return (
    <SafeAreaView>
      <View>
        <Container alignItems={'center'} m="auto" mt={10} borderWidth={1}>
          <Row>
            <Column display={"flex"} justifyContent="center" marginBottom={3}>
              <Image source={leaf} alt="leaf" size='lg' mt={4} />
            </Column>
          </Row>
          <Row>
            <Column display={"flex"} justifyContent="center" marginBottom={2}>
              <Text textAlign={"center"}>Thought Diary</Text>
            </Column>
          </Row>
          <Row>
            <Column display={"flex"} justifyContent="center">
              <Text textAlign={"center"} color="gray.700" marginBottom={4}>
                An online, guided thought diary app to help you capture and review
                your thoughts. Following CBT principles and best practises.
              </Text>
            </Column>
          </Row>
          <Row>
            <Column display={"flex"} justifyContent="center">
              <Link to="/newThought">
                <Button bgColor={'green.800'}>Get Started</Button>
              </Link>
            </Column>
          </Row>
        </Container>
      </View>
    </SafeAreaView>
  )
}

export default ThoughtDiaryScreen