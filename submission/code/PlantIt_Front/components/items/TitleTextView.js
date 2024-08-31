import { View, Button, StyleSheet, TouchableOpacity, Text} from "react-native";

export default function TitleTextView({title,heightFromTop,lengthLeft}) {
    return(
        
           <View style ={styles.body }>
                <View style={styles.container}>
                    <Text style={[styles.titleText , {top : heightFromTop},{left:lengthLeft}]}>{title}</Text>
                </View>
           </View>
        
    ); 
}

const styles = StyleSheet.create({
    body:{
        textAlign: "center",
        justifyContent:"center",
        alignItems: "center"

    },

    container:{
        flexDirection: "column",
        gap:"1rem",
        

    },

    titleText: {
      fontSize: 80,
      fontWeight: "bold",
      color: "white",
      textShadowColor:"black",
      textShadowOffset:{width:5,height:5},
      textShadowRadius:8,
      

    },
    
  });