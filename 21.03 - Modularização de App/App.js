import {View} from 'react-native';
import estilo from './src/css/style.js';
import React from 'react';
import Header from './src/components/header.js';
import Body from './src/components/body.js';
import Footer from './src/components/footer.js';

export default function App() {
  return (
    <View style = {estilo.container}>

          <Header></Header>

          <Body></Body>
         
          <Footer></Footer>

    </View>
  );
}

