// Searching using Search Bar Filter in React Native List View
// https://aboutreact.com/react-native-search-bar-filter-on-listview/

// import React in our code
import React, {useState, useEffect,Component} from 'react';
       
// import all the components we are going to use
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  FlatList,
  TextInput,
  Modal,
  Button,
  Alert,
  TouchableOpacity
} from 'react-native';


const Orderscreen = ({navigation}) => 
{
  const [isModalVisible, setModalVisible] = useState(false);
	const [inputValue, setInputValue] = useState("");
	const toggleModalVisibility = () => {
		setModalVisible(!isModalVisible);
    };

  const [search, setSearch] = useState('');
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [masterDataSource, setMasterDataSource] = useState([]);

  const item=()=>{

    Alert.alert('hi')
  }

    useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((responseJson) => {
        setFilteredDataSource(responseJson);
        setMasterDataSource(responseJson);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const searchFilterFunction = (text) => {
    // Check if searched text is not blank
    if (text) {
      // Inserted text is not blank
      // Filter the masterDataSource
      // Update FilteredDataSource
      const newData = masterDataSource.filter(
        function (item) {
          const itemData = item.title
            ? item.title.toUpperCase()
            : ''.toUpperCase();
          const textData = text.toUpperCase();
          return itemData.indexOf(textData) > -1;
      });
      setFilteredDataSource(newData);
      setSearch(text);
    } else {
      // Inserted text is blank
      // Update FilteredDataSource with masterDataSource
      setFilteredDataSource(masterDataSource);
      setSearch(text);
    }
  };
  
  const ItemView = ({item}) => 
  {
    
    return (
      // Flat List Item
         

      <Text
        style={styles.itemStyle}
        onPress={() => getItem(item)}>
        {item.id}
        {'\n'}
        {item.title.toUpperCase()}
      </Text>
    );
  };

  const ItemSeparatorView = () => 
  {

    
    return (
      // Flat List Item Separator
      
      <View style={{height: 2,width: '100%',backgroundColor: '#C8C8C8'}}/>
      
    );
  };

const getItem=(item)=>{

  Alert.alert('Id : ' + item.id + '\n'+'Title : ' + item.title);


};


    return (

      <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <TextInput
          style={styles.textInputStyle}
          onChangeText={(text) => searchFilterFunction(text)}
          value={search}
          underlineColorAndroid="transparent"
          placeholder="Search Here"
        />
 <View>
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
      </View>

        <Text style={styles.txt}>
            Current Orders
        </Text>

       
        <FlatList
          data={filteredDataSource}
          keyExtractor={(item, index) => index.toString()}
          ItemSeparatorComponent={ItemSeparatorView}
          renderItem={ItemView}
        />
      </View>

      <TouchableOpacity style={styles.addButton}
      onPress={() =>navigation.navigate('AddUpdatePage')}>
      <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>

    </SafeAreaView>


  );
};



const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  itemStyle: {
    padding: 10,
  },
  textInputStyle: {
    height: 40,
    borderWidth: 3,
    paddingLeft: 20,
    borderRadius:10,
    margin: 5,
    borderColor: '#009688',
    backgroundColor: 'yellow',
  },
  container2:
    {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 15
    },

    txt:{
      paddingLeft:100,
      fontSize:22,
      fontWeight:'bold'
    },
    addButton:{

      position:'absolute',
      zIndex:11,
      right:20,
      bottom:50,
      backgroundColor:'#307ecc',
      width:80,
      height:80,
      borderRadius:50,
      alignItems:'center',
      justifyContent:'center',
      elevation:8,
    },
    addButtonText:{
    color:'#fff',
    fontSize:24,
    },
    modalContent: {
      backgroundColor: 'white',
      padding: 22,
      justifyContent: 'center',
      borderRadius: 4,
      borderColor: 'rgba(0, 0, 0, 0.1)',
      height:450,
      width:360,
      alignSelf:'center'
    },
    note: 
    {
    position:'relative',
    padding:20,
    paddingRight:100,
    borderBottomWidth:2,
    borderBottomColor:'#bdb76b' ,   
    
    },

});

export default Orderscreen;