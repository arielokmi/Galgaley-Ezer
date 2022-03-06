import React, { useState } from "react";
import {
        View,
        StyleSheet,
        ScrollView,
        ImageBackground,
        Text,
    }
    from "react-native";
    import FirstLineHeader from "../components/FirstLineHeader";
    import MyGoal from "../components/MyGoal";
    const Winners = () =>
     {
        
            return (
            <View style = {styles.contianerWinners}>    
            <ScrollView>
             <FirstLineHeader/>
             <MyGoal/>
                 </ScrollView>   
             </View>
             
            )
    };

    const styles = StyleSheet.create({
        contianerWinners:{
            flex: 1,
            backgroundColor:"#FFFFFF",
        },
        goalsHeaders:{
            height: 123,
            backgroundColor:"#FFDE6F",
            borderBottomLeftRadius: 30,
            borderBottomRightRadius: 30,
            alignItems:"center",
        },
        myGoaltitle:{
            fontSize:24,

        },
        myGoal:{
            fontSize:14,
            height: 47,
            width: 119,
            backgroundColor:"#FFFFFF",
            alignItems:"center",
            justifyContent:"center",
        },

    });
    
    export default Winners;                    