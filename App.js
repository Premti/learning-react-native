import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';
import GoalItem from './components/GoalItem.js';
import GoalInput from './components/GoalInput.js'

export default function App() {

  const [courseGoals, setCourseGoals] = useState([])
  const [isAddMode, setIsAddMode] = useState(false)

  const addGoalHandler = (goalTitle) => {
   setCourseGoals(currentGoals => [...currentGoals, {uid: Math.random().toString(), value: goalTitle}])
   setIsAddMode(false)
  }

  const removeGoalHandler = (goalId) => {
      setCourseGoals(currentGoals => {
        return currentGoals.filter(goal => goal.uid !== goalId)
      })
  }

  const cancelGoalAdditionHandler = () => {
    setIsAddMode(false)
  }

  return (

    <View style={styles.firstView}>
      <Button title="Add new goal" onPress={() => setIsAddMode(true)}/>
     <GoalInput visible={isAddMode} onAddGoal={addGoalHandler} onCancel={cancelGoalAdditionHandler}/>
        <FlatList
        keyExtractor={(item, index) => item.uid}
        data={courseGoals}
        renderItem={itemData => (
         <GoalItem id={itemData.item.uid} onDelete={removeGoalHandler} title={itemData.item.value}/>
        )}
         />
     
    </View>

  );
}

const styles = StyleSheet.create({
  firstView: {
    padding: 50
  },
  
 
})