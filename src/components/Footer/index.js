import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Shoes from '../Shoes';

export default function Footer() {
 return (
   <View>
     <Text style={styles.title}>VOCÊ TAMBÉM PODE GOSTAR</Text>
     <View style={{flexDirection: 'row'}}>
       <ScrollView horizontal showsHorizontalScrollIndicator={false}>

            <View style={{marginHorizontal: 10}}>
              <Shoes img={require('../../assets/images/1.png')} cost="250,00">
                  Nike Air Max Dia
              </Shoes>
            </View>

            <View style={{marginHorizontal: 10}}>
              <Shoes img={require('../../assets/images/2.png')} cost="415,28">
                  Nike Epica React
              </Shoes>
            </View>

            <View style={{marginHorizontal: 10}}>
              <Shoes img={require('../../assets/images/3.png')} cost="382,36">
                  Nike Squidward Tentacles
              </Shoes>
            </View>

       </ScrollView>
     </View>
   </View>
  );
}

const styles = StyleSheet.create({
  title:{
    fontSize:24,
    fontFamily:'Anton_400Regular',
    marginVertical: '2%',
    paddingHorizontal: '2%'
  }
});