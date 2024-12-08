import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Image } from 'react-native'

export default function ResultDetail({result}) {
  return (
    <View style={{margin:6}}>
        <Image 
        style={{width:290,height:180,borderRadius:8,marginBottom:5}}
        source={result.image_url ? {uri:result.image_url}:null}
        />
      <Text style={{fontWeight:"bold"}}>{result.name}</Text>
      <Text style={{fontSize:10}}>{result.rating} Yıldızlı Restoran , {result.review_count} Değerlendirme</Text>
    
    </View>
  )
}

const styles = StyleSheet.create({})