import { View, StyleSheet,Text, Button } from "react-native"
import { createHabitWithCustonId, createHabitWithAutoId } from "../services/habitServices"

export default function FireStoreDemo (){
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Firestore Operations</Text>

            <View style={styles.btnView}>
                <Button title="Create Habit with custom ID" onPress={createHabitWithCustonId}/>
                <Button title="Create Habit with auto ID" onPress={createHabitWithAutoId}/>
            </View>

        </View>
    )
}
const styles= StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    title:{
        fontSize:22,
        fontFamily:"Bold",
        marginBottom:20
    },
    btnView:{
        gap:10
    }
})