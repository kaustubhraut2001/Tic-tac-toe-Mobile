import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const App = () => {
  const [iscross, setIsCross] = useState<boolean>(false);
  const [winMessage, setWinMessage] = useState<string>("");
  const [gamestate, setGamestate] = useState<string[]>(new Array(9).fill('empty'));

  const reloadGame = () => {
    setIsCross(false);
    setWinMessage("");
    setGamestate(new Array(9).fill('empty'));
  }

  const isWinner = () => {
    // Check for winning conditions
  }

  const onChangeIcon = (index: number) => {
    if (winMessage) {
      return;
    }
    
    if (gamestate[index] === 'empty') {
      const newGameState = [...gamestate];
      newGameState[index] = iscross ? 'cross' : 'circle';
      setGamestate(newGameState);
      setIsCross(!iscross);
    } 

    isWinner();
  }

  const renderGridCell = (index: number) => {
    return (
      <TouchableOpacity
        style={styles.gridCell}
        onPress={() => onChangeIcon(index)}
      >
        <Text style={styles.cellText}>{gamestate[index]}</Text>
      </TouchableOpacity>
    );
  }

  const renderGrid = () => {
    return (
      <View style={styles.gridContainer}>
        {gamestate.map((value, index) => (
          <View key={index} style={styles.gridRow}>
            {renderGridCell(index)}
          </View>
        ))}
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      {renderGrid()}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0', // Background color of the container
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#fff', // Background color of the grid
    padding: 5, // Padding around the grid
    borderRadius: 10, // Border radius of the grid
    borderWidth: 1, // Border width of the grid
    borderColor: '#ccc', // Border color of the grid
  },
  gridRow: {
    flexDirection: 'row',
  },
  gridCell: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc', // Border color of each cell
  },
  cellText: {
    fontSize: 40, // Font size of the cell text
    color: '#333', // Color of the cell text
  },
});

export default App;
