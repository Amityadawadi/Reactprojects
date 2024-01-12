import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from "react-native";
import React, { useState } from "react";
//import { CheckBox } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const ContactYoutube = ({navigation}) => {
  const [userName, setUserName] = useState("Amit");
  const [password, setPassword] = useState("amity");
  const [agree, setAgree] = useState(false);

  console.log(userName, password);

  const submit = () => {
    if(userName === "Amit" && password === "amity") {
        Alert.alert(`Welcome ${userName}`);
        navigation.navigate("Home");
    } else {
        Alert.alert("Invalid username or password");
      }
    
  };

    return ( 
    <View style={styles.mainContainer}>
        <Text style={styles.mainHeader}>Login form</Text>
        <View style={styles.inputContainer}>
            <Text style={styles.labels}>Username</Text>
            <TextInput
                style={styles.inputStyle}
                autoCapitalize="none"
                autoCorrect={false}
                placeholder="Enter your name"
                // value={userName}
                // onChange={(e) => setUserName(e.target.value)}
            />
        </View>

        <View style={styles.inputContainer}>
            <Text style={styles.labels}>Password</Text>
            <TextInput
                style={styles.inputStyle}
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry={true}
                placeholder="Enter your password"
                // value={password}
                // onChange={(e) => setPassword(e.target.value)}
                />
        </View>

        <View style={styles.wrapperText}>
            <CheckBox
                value={agree}
                onValueChange={() => setAgree(!agree)}
                color={agree ? "#4630EB" : undefined}
                />
            <Text style={styles.wrapperText}>I have read and agreed with the terms and conditions</Text>
        </View>

        <TouchableOpacity 
        onPress={() => {
            submit();
        }}
        style={[
            styles.buttonStyle, 
            {
                backgroundColor : agree ? "#6495ed" : "grey",
                borderRadius: 7,
                alignItems: "center",
                width: 200,
                marginLeft: 80
                
            },
        ]}
        disabled={!agree}>
            <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    mainContainer: {
        heaight: "100%",
        paddingHorizontal: 30,
        paddingTop: 30,
        paddingBottom: 400,
        backgroundColor: "#fff",
    },
    mainHeader: {
        fontSize: 40,
        color: "#344055",
        color: "#500",
        textAlign: "center",
        paddingTop: 20,
        paddingBottom: 15,
        textTransform: "capitalize",
        fontFamily: "bold",
    },
    description: {
        fontSize: 20,
        color: "#7d7d7d",
        paddingBottom: 10,
        lineHeight: 25,
        fontFamily: "regular",
    },
    inputContainer: {
        marginTop: 20,
    },
    labels: {
        fontSize: 20,
        color: "brown",
        marginTop: 10,
        marginBottom: 5,
        lineHeight: 25,
        fontFamily: "regular",
    },
    inputStyle: {
        borderWidth: 1,
        borderColor: "rgba(0,0,0,0.3)",
        paddingHorizontal: 15,
        paddingVertical: 7,
        borderRadius: 1,
        fontFamily: "regular",
        fontSize: 20,
    },
    buttonText: {
        fontSize: 30,
        textAlign: "center",
        color: "white",
    },
    wrapperText: {
        flexDirection: "row",
        marginBottom: 10,
        marginTop: 10
    }
    
})


export default ContactYoutube;