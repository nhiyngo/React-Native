import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';

export default function App() {
  const [userInput, setUserInput] = useState();

  const onStartGame = selectedNumber => {
    setUserInput(selectedNumber);
  };

  let content = <StartGameScreen onStartGame={onStartGame} />;

  if (userInput) {
    content = <GameScreen userInput={userInput} />;
  }

  return (
    <View style={styles.screen}>
      <Header title="Guess a Number" />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
