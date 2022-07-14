import {StyleSheet, View, Text } from "react-native"

interface Props {
    title: string
    backgroundColor?: string
}

export const TodoCard = ({title, backgroundColor }:Props) =>{
    return <View style={[styles.container, {backgroundColor:backgroundColor?backgroundColor:"white"}]}><Text>{title}</Text></View>
}

const styles = StyleSheet.create({
    container:{
        elevation:5,
        backgroundColor:"white",
        padding:15,
        borderRadius:10,
        shadowColor:"#000",
        shadowOpacity:0.2,
        marginVertical: 5
        
    }
})