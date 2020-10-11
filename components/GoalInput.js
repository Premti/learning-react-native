import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity} from "react-native"

const GoalItem = (props) => {


    return(
        <TouchableOpacity onPress={props.onDelete.bind(this, props.id)}>
        <View style={styles.listItem}>
            <Text>{props.title}</Text>
            </View>
            </TouchableOpacity>
    )
}
export default GoalItem

const styles = StyleSheet.create({
    listItems: {
        padding: 10,
        backgroundColor: "grey",
        borderColor: "black",
        borderWidth: 1,
        margin: 10
      }
})
