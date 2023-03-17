import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {

  const [cc,setcc]=useState('');
  const[nom,setnom]=useState();
  const[asigna,setasigna]=useState();
  return (
    <View style={styles.container}>
      <View style={[styles.container,{flex:1,backgroundColor:"#c6e0b4"}]}>
      <Text style={{fontWeight:'bold'}}>Calculadora Basica</Text>
    </View>
    <View style={[styles.container,{flex:10,backgroundColor:"white"}]}>
      <View style={[{display:"flex",flexDirection:"row",marginBottom:20,gap:10}]}><Text style={{fontWeight:'bol'}}>Identificacion</Text>
      <TextInput placeholder='ingrese numero la cc'style={styles.inputs}onChangeText={cc=>setcc(cc)}value={cc}></TextInput>
      </View>
      <View style={[{display:"flex",flexDirection:"row",marginBottom:20 ,gap:10}]}><Text style={{fontWeight:'bol'}}>Nombres</Text>
      <TextInput placeholder='ingrese el nombre'style={styles.inputs}onChangeText={cc=>setcc(cc)}value={cc}></TextInput>
      </View>
      <View style={[{display:"flex",flexDirection:"row",marginBottom:20 ,gap:10}]}><Text style={{fontWeight:'bol'}}>Asignatura</Text>
      <TextInput placeholder='ingrese asignatura'style={styles.inputs}onChangeText={cc=>setcc(cc)}value={cc}></TextInput>
      </View>
      <View style={[{display:"flex",flexDirection:"row",marginBottom:20 ,gap:10}]}><Text style={{fontWeight:'bol'}}>Nota momento1(30%)</Text>
      <TextInput placeholder='ingrese la nota1'style={styles.inputs}onChangeText={cc=>setcc(cc)}value={cc}></TextInput>
      </View>
      <View style={[{display:"flex",flexDirection:"row",marginBottom:20 ,gap:10}]}><Text style={{fontWeight:'bol'}}>Nota momento2(35%)</Text>
      <TextInput placeholder='ingrese la nota2'style={styles.inputs}onChangeText={cc=>setcc(cc)}value={cc}></TextInput>
      </View>
      <View style={[{display:"flex",flexDirection:"row",marginBottom:20 ,gap:10}]}><Text style={{fontWeight:'bol'}}>Nota momento3(35%)</Text>
      <TextInput placeholder='ingrese la nota3'style={styles.inputs}onChangeText={cc=>setcc(cc)}value={cc}></TextInput>
      </View>
      <View style={[{display:"flex",flexDirection:"row",marginBottom:20 ,gap:10}]}><Text style={{fontWeight:'bol'}}>Definitiva</Text>
      <TextInput style={styles.inputs}onChangeText={cc=>setcc(cc)}value={cc}></TextInput>
      </View>
      <View style={[{display:"flex",flexDirection:"row",marginBottom:20 ,gap:10}]}><Text style={{fontWeight:'bol'}}>Observacion</Text>
      <TextInput placeholder='observacion'style={styles.inputs}onChangeText={cc=>setcc(cc)}value={cc}></TextInput>
      </View>
      <View style={[styles.container,{marginTop:20,flexDirection:'row',gap:5}]}>
        <TouchableOpacity  style={[{backgroundColor:"green"},styles.buttons]}onPress={()=>calcular}>
         <Text style={styles.TextButon}>Calcular/Guardar</Text>
        </TouchableOpacity>
     
        <TouchableOpacity  style={[{backgroundColor:"green"},styles.buttons]}onPress={()=>calcular}>
         <Text style={styles.TextButon}>Limpiar</Text>
        </TouchableOpacity>
      
        <TouchableOpacity  style={[{backgroundColor:"green"},styles.buttons]}onPress={()=>calcular}>
         <Text style={styles.TextButon}>Buscar</Text>
        </TouchableOpacity>
      </View>


    </View>
     
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
 
    alignItems: 'center',
    justifyContent: 'center',
    width:"100%"

  },
  inputs:{
    borderWidth:1,
    borderColor:"green",
    textAlign:'center',
   
},
buttons:{
  borderRadius:10,
  padding:10,
  width:120,
  alignItems:'center',
  justifyContent:'center'

},
textButon:{
  color:'black',
  fontWeight:'bold'
}});
