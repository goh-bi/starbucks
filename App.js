import React,  { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, FlatList } from 'react-native';


 
export default function App() {

  const [isDisplayed, setIsDisplayed] = useState(false);
  const [products, setProducts] = useState([
    {
        name: 'Consultant OMS',
    },
    {
        name: 'Administrateur de base de données',
    },
    {
        name: 'Gestionnaire de stocks',
    },
    {
        name: 'Resources Humaines',
    },
    {
        name: 'Logistitien',
    },
    {
        name: 'Informaticien',
    },
    {
        name: 'Medecin',
    },
    {
        name: 'Infimier',
    },
    {
        name: 'Jardinier',
    },
    {
        name: 'Vigile',
    },
    {
        name: 'Chauffeur',
    },
    {
        name: 'Regisseur',
    },
    {
        name: 'Comptable',
    },
    {
        name: 'Directeur',
    },
    {
        name: 'Pharmacien',
    },
    {
        name: 'Cuisinier',
    },
]);

// let menu = products.map(product => (
//   <View key={Math.random()} style={styles.card}>  
//     <Text style={styles.cardTitle}> {product.name} </Text>
//   </View>)
// );
  return (  
      <View style={styles.container}>
        {/* <Image source={require('./assets/images/who.png')} 
        style={styles.logo} />
        <Text style={styles.title}>World Health Organization</Text>
        {isDisplayed ? (<Text style={{color: '#1d5b99', fontWeight: 'bold'}}>Faire votre choix?</Text>) : (<Text style={{color: '#1d5b30', fontWeight: 'bold'}}>Postuler à l'OMS</Text>)} */}
        {/* {isDisplayed && menu} */}
        {true && (
        <FlatList data={products} renderItem={({item}) => (<View key={Math.random()} style={styles.card}>  
            <Text style={styles.cardTitle}> {item.name} </Text>
         </View>)} keyExtractor={item => Math.random().toString() } style={{ width: '100%'}}
          ListHeaderComponent={ 
          <>
          <Image source={require('./assets/images/who.png')} 
        style={styles.logo} />
        <Text style={styles.title}>World Health Organization</Text>
        {isDisplayed ? (<Text style={{color: '#1d5b99', fontWeight: 'bold'}}>Faire votre choix?</Text>) : (<Text style={{color: '#1d5b30', fontWeight: 'bold'}}>Postuler à l'OMS</Text>)}
          </>
        }
         ListFooterComponent= {
          <View style={{marginTop: 40}}> 
            <Button title={isDisplayed ? 'Fermez le menu' : 'Ouvrir le Menu'}  onPress={() => setIsDisplayed(prevState => !prevState)} color='#1d5b60'/>
         </View>
        }
        ListFooterComponentStyle={{alignItems: 'center'}}
        ListHeaderComponentStyle={{alignItems: 'center'}}
         />)}
        {/* <View style={{marginTop: 40}}> 
          <Button title={isDisplayed ? 'Fermez le menu' : 'Ouvrir le Menu'}  onPress={() => setIsDisplayed(prevState => !prevState)} color='#1d5b60'/>
        </View> */}
        <StatusBar style="auto" />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50,
    paddingBottom: 15,
  },
  title: {
    color: '#1d5b99',
    fontSize: 32,
    textTransform: 'uppercase',
    // #85d5dd
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 15,
  },
  card: {
    width: '100%',
    paddingBottom: 30,
    borderBottomWidth: 1,
    borderColor: '#1d5c99',
  },
  // cardTitle: {
  //   width: '100%',
  //   paddingBottom: 30,
  //   borderBottomWidth: 1,
  //   borderColor: '#1d5c99',
  // }, 
});
