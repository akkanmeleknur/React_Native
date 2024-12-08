import {StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import yelp from '../api/yelp';
import { Image } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function ResultsShowScreen({route}) {

  const [result,setResult] = useState(null);
  const id = route.params.id;

  const getResult = async(id) => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data)
  }

  useEffect(()=>{
    getResult(id);
  },[])

  if(!result)
  {
    return null;
  }

  return (
    <View>
      <Text style={styles.title}>{result.name}</Text>
      <Text style={styles.phone}>{result.phone}</Text>

      <View style={styles.icon}>
      {
      result.is_closed ? <AntDesign name="closecircleo" size={35} color="black" /> :
      <MaterialIcons name="delivery-dining" size={35} color="black" />
      }
      </View>
    
      <Image style={styles.image} source={result.image_url ? { uri: result.image_url } : null} />


    </View>
  );
}

const styles = StyleSheet.create({

  title:{
    alignSelf:'center',
    fontSize:25,
    fontWeight:'bold',
    margin:10,
    fontStyle:'italic',
    backgroundColor:'lightgrey',
    padding:8,
    borderRadius:10,
    borderColor:'grey',
    borderWidth:3
  },
  phone:{
     alignSelf:'center',
     fontSize:19,
     fontWeight:'bold',
     margin:5
  },
  image:{
    height:280,
    borderRadius:10,
    margin:10
  },
  icon:{
    alignSelf:'center'
  }
})