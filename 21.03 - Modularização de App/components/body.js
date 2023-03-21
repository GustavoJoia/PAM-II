import React from "react";
import estilo from "../css/style";
import { Text, TextInput, View, TouchableOpacity} from 'react-native';
import { Feather } from '@expo/vector-icons';

export default function Body(){
    return(

        <View style = {estilo.box}>
              <Text style = {estilo.titulo}>Carteirinha</Text>
              <View style = {estilo.viewIcon}>
                  <Feather name="user" size={24} color="black" />
                  <TextInput style = {estilo.input} placeholder='E-mail (ex: contato@email.com)' />
              </View>
              <View style = {estilo.viewIcon}>
                  <Feather name="key" size={24} color="black" />
                  <TextInput style = {estilo.input} secureTextEntry={true} placeholder='Senha' />
              </View>
          
              <TouchableOpacity style = {estilo.button}>
              <Text style = {estilo.btnText}>ENTRAR</Text>

              </TouchableOpacity>
          
          </View>

    )
}