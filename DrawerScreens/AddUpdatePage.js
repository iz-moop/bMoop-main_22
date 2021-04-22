import {
    SafeAreaView,
    Text,
    StyleSheet,
    View,
    Button,
    TextInput,
    Modal,
    Dimensions ,
    TouchableOpacity
  } from 'react-native';
  
  import React, { useState,Component} from "react";
  const { width } = Dimensions.get("window");

   
  const AddUpdatePage = ({navigation}) => 
  {
    
    const [isModalVisible, setModalVisible] = useState(false);
	const [inputValue, setInputValue] = useState("");
	const toggleModalVisibility = () => {
		setModalVisible(!isModalVisible);
    };

    

return(
<SafeAreaView style={{flex: 1}}>
     
     <View style={styles.container}>
        <View
          style={{flexDirection: 'row',top:30}}>
          <Text style={{  flex: 1, padding: 15,fontSize:18,fontWeight:'bold'}}>
            {'Table No :'}
          </Text>

          <TextInput
           placeholder='Enter Table No'
          placeholderTextColor='#303030'
            style={{
              borderWidth: 3,
              borderRadius:10,
              borderColor: '#000',
              flex: 1,
              padding: 15,
              right:70,
              width:100,
              height:50

            }}/>

        </View>

        <View
        style={{flexDirection: 'row',top:30}}>
          <Text style={{  flex: 1, padding: 15,fontSize:18,fontWeight:'bold'}}>
            {'Status :'}
          </Text>

          <TextInput
           placeholder='Enter Status'
          placeholderTextColor='#303030'
            style={{
              borderWidth: 3,
              borderRadius:10,
              borderColor: '#000',
              flex: 1,
              padding: 15,
              right:70,
              width:100,
              height:50

            }}/>
        </View>
        

<View style={{flexDirection:'row',top:30}}>

<Text style={{fontSize:30,left:150,top:10,fontWeight:'bold'}}>
  Special Instructions
  </Text>
  <TextInput
           placeholder='Enter Instructions Here '
          placeholderTextColor='#303030'
            style={{
              borderWidth: 3,
              borderRadius:10,
              flexDirection:'row',
              borderColor: '#000',
              padding: 15,
              width:320,
              height:100,
              right:130,
              top:60
            }}/>
   
</View>

<View>
<TouchableOpacity style={styles.btn}onPress={toggleModalVisibility}>
<Modal animationType="slide"
				transparent visible={isModalVisible}
				presentationStyle="overFullScreen"
				onDismiss={toggleModalVisibility}>
				<View style={styles.viewWrapper}>
					<View style={styles.modalView}>
						<TextInput placeholder="Item"
								value={inputValue} style={styles.textInput}
								onChangeText={(value) => setInputValue(value)} />

<TextInput placeholder="Price"
								value={inputValue} style={styles.textInput}
								onChangeText={(value) => setInputValue(value)} />

						<Button title="Add" onPress={toggleModalVisibility} />
					</View>
				</View>
			</Modal>

    <Text style={styles.btnTxt}>Add Item</Text>

</TouchableOpacity>
</View>

<View style={styles.MainContainer}>

<Text style={{fontSize:20}}>  Item1 : $100</Text>
<Text style={{fontSize:20,top:10}}>Item2 : $50</Text>
<Text style={{fontSize:20,top:10}}>Item3 : $10</Text>

</View>

<TouchableOpacity style={styles.btn1}>

    <Text style={styles.btnTxt}>Add/Update</Text>
    

</TouchableOpacity>

	 </View>

 
    </SafeAreaView>
);

}
  
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white',
        marginTop: 20,
        marginRight:1,
        borderWidth: 3,
        borderRadius:10,
        borderColor: 'black',
        marginTop: (Platform.OS === 'ios') ? 20 : 0

      },
    
  tt:{

      fontSize:20,
      top:50, 
      alignContent:'center',
      alignItems:'center',
      right:100,
      color:'black',
     },

     nameInput:{
      height:40,
      width:150,
      marginLeft:100,
      borderBottomWidth:2,
      marginTop:30,
      color: 'black',
      paddingLeft: 15,
      paddingRight: 15,
      borderWidth: 1,
      borderColor: '#000000'

  },
  btn:{

    height:40,
    width:120,            
    borderWidth:3,
    borderRadius:80,
    fontWeight:'bold',        
    marginLeft:20,
    marginTop:110,
    justifyContent:'center',
    alignItems:'center',

},
btn1:{


    height:40,
    width:250,    
    fontWeight:'bold',        
    borderWidth:3,
    borderRadius:10,
    marginLeft:20,
    marginTop:80,
    justifyContent:'center',
    alignItems:'center',

},


btnTxt:{
  color:'black',
  fontWeight:'bold',
  fontSize:20,
},

MainContainer: 
    {
      top:20,
       width:200,
      height:120,
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 3,
      borderRadius:10,
      borderColor: 'black',
      marginTop: (Platform.OS === 'ios') ? 20 : 0
    },
    screen: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#fff",
    },
    viewWrapper: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "rgba(0, 0, 0, 0.2)",
    },
    modalView: {
      alignItems: "center",
      justifyContent: "center",
      position: "absolute",
      top: "50%",
      left: "50%",
      elevation: 5,
      transform: [{ translateX: -(width * 0.4) },
            { translateY: -90 }],
      height: 180,
      width: width * 0.8,
      backgroundColor: "#fff",
      borderRadius: 7,
    },
    textInput: {
      width: "80%",
      borderRadius: 5,
      paddingVertical: 8,
      paddingHorizontal: 16,
      borderColor: "rgba(0, 0, 0, 0.2)",
      borderWidth: 1,
      marginBottom: 8,
    },

    viewStyle: {
        flex: 1,
        alignSelf: "center",
        flexDirection: "row",
        width: "92%",
        justifyContent: "space-between",
        alignItems: "center"
      },
      itemStyle: {
        fontSize: 10,
        fontFamily: "Roboto-Regular",
        color: "#007aff"
      },
      pickerStyle: {
        width: "100%",
        height: 40,
        color: "#007aff",
        fontSize: 14,
        fontFamily: "Roboto-Regular"
      },
      textStyle: {
        fontSize: 14,
        fontFamily: "Roboto-Regular"
      },
  
  });
  
  export default AddUpdatePage;