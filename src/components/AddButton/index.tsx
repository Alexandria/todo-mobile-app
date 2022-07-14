import { Center } from 'native-base'
import {StyleSheet, Text, View} from 'react-native'

export const AddButton = () =>{
    return <View style={styles.container}><View style={{alignItems:"center",display:"flex", alignContent:"center"}}><Text style={styles.text}>+</Text></View></View>
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#f98284",
        height: 50,
        width: 50,
        borderRadius:25

    },
    text:{
        fontSize:35, 
        color:"white"
    }

})