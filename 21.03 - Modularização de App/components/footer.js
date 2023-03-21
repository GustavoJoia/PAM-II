import React from "react";
import {View, Text, Linking, TouchableOpacity} from 'react-native';
import estilo from "../css/style";
import { AntDesign } from '@expo/vector-icons';

export default function Footer(){
    return(

        <View style = {estilo.footer}>
            <TouchableOpacity>
                <Text style = {estilo.link} onPress={() => Linking.openURL('http://google.com')}>
                    Não tenho cadastro
                </Text>
            </TouchableOpacity>
            
            <AntDesign style = {estilo.footerIcon} name="shake" size={24} color="black" />

            <TouchableOpacity>
                <Text style = {estilo.link} onPress={() => Linking.openURL('http://google.com')}>
                    Esqueci minha senha
                </Text>
            </TouchableOpacity>
            
        </View>

    )
}