import * as React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { AddButton } from '../../components/AddButton'
import { TodoCard } from '../../components/TodoCard'

export const TodoScreen = () =>{
    return <View style={styles.container}>
        <Text>Today's Date is 07/04/2022 </Text>
        <View style={styles.cardContainer}>
            <TodoCard title='Take out trash'/>
            <TodoCard title='Reacd Book'/>
            <TodoCard title='Work out'/>
        </View>
        <AddButton/>
    </View>
  }

const styles = StyleSheet.create({
    container:{
        flex:1,
        display:"flex",
        paddingHorizontal:20
    },
    cardContainer:{
        paddingVertical:10
    }
})