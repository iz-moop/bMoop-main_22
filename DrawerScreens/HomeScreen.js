import React,{Component} from 'react';
import{View,Image,ImageBackground,StyleSheet,Text}from 'react-native';


export default class HomeScreen extends Component
{
    
      
    constructor(props)
    {
        super(props);

        

    }

    render()
    {
        return(

    <View style={{ flex:1,justifyContent:'center',alignItems:'center'}}>

<Text>This is Home Screen</Text>

</View>
    

);

}

}

const styles=StyleSheet.create(
    {

        txtt:{

            fontSize:40,
            top:150,
            color:'red',
            fontStyle:'italic',
            
        },


    });