import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import ResultDetail from './ResultDetail';
import { useNavigation } from '@react-navigation/native';

export default function ResultsList({title,results}) {

console.log(results);
const navigation = useNavigation()
  return (
    <View style={{marginVertical:10}}>
      <Text style={{fontSize:20,fontWeight:'bold',margin:8}}>{title}</Text>
      <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={results}
      renderItem={({item})=>{
        return(
            <TouchableOpacity onPress={()=>navigation.navigate('Detail',{id:item.id})}>
                <ResultDetail result={item} />
            </TouchableOpacity>
        )
      }}/>
    </View>
  )
}

const styles = StyleSheet.create({})