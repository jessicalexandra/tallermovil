import { TextInput } from 'react-native-web';
import { useState } from 'react';
import { StyleSheet, Text,  TouchableOpacity, View } from 'react-native';

export default function App() {

  const [cc,setcc]=useState('');
  const[nombre,setnombre]=useState('');
  const[asigna,setasigna]=useState('');
  const[nota1,setnota1]=useState('');
  const[nota2,setnota2]=useState('');
  const[nota3,setnota3]=useState('');
  const[Definitiva,setDefinitiva]=useState('')
  const[observacion,setObservacion]=useState('')
  const[guardar,setguardar]=useState([])

  // todos los campos son requeridos
  const calcular=()=>{
    if (!cc || !nombre || !asigna || !nota1 ||!nota2 || !nota3 )
    return;
  }

  const Notas=[nota1,nota2,nota3];
  let promedio=0;

  // validacion de nota
  // __________________________________________________________
  Notas.forEach((nota,i)=>{
    if (nota<=0 ||nota >5) {
      return;
    }
    if (i==0) {
      promedio+=nota *0.30;
      return;
    }
    promedio+=nota*0.35
  })
  setDefinitiva(promedio.toFixed(1));

  // agregar la observacion 
  let observa='';
  if (promedio<2) {
    observa='REPRUEBA' 
  }else if(promedio<2.94){
    observa='HABILITA'
  }else{
    observa='APRUEBA'
  }

  setObservacion(observa)
  setguardar([...guardar,{cc,nombre,asigna,nota1,nota2,nota3,promedio,observa}])


  const buscar=(cc)=>{
    const{cc:id,nombre,asigna,nota1,nota2,nota3,promedio:Definitiva,observa:observacion}=guardar.find(inf=>inf.cc==cc)||{};
    if(!id){
      return;
    }
    setcc(id);
    setnombre(nombre);
    setasigna(asigna);
    setnota1(nota1);
    setnota2(nota2);
    setnota3(nota3);
    setDefinitiva(Definitiva);
    setObservacion(observacion);
  
  }
  const limpiar=()=>{
    setcc('');
    setnombre('');
    setasigna('');
    setnota1('');
    setnota2('');
    setnota3('');
    setDefinitiva('');
    setObservacion('');
  }


  return (
    <View style={styles.container}>
      <View style={[styles.container,{flex:1,backgroundColor:"#c6e0b4"}]}>
      <Text style={{fontWeight:'bold'}}>Sistema de Notas</Text>
    </View>
    <View style={[styles.container,{flex:10,backgroundColor:"white"}]}>
      <View style={[{display:"flex",flexDirection:"row",marginBottom:20,gap:10}]}><Text style={{fontWeight:'bol'}}>Identificacion</Text>
      <TextInput placeholder='ingrese numero la cc'style={styles.inputs}onChangeText={cc=>setcc(cc)}value={cc}></TextInput>
      </View>
      <View style={[{display:"flex",flexDirection:"row",marginBottom:20 ,gap:10}]}><Text style={{fontWeight:'bol'}}>Nombres</Text>
      <TextInput placeholder='ingrese el nombre'style={styles.inputs}onChangeText={nombre=>setnombre(nombre)}value={nombre}></TextInput>
      </View>
      <View style={[{display:"flex",flexDirection:"row",marginBottom:20 ,gap:10}]}><Text style={{fontWeight:'bol'}}>Asignatura</Text>
      <TextInput placeholder='ingrese asignatura'style={styles.inputs}onChangeText={asigna=>setasigna(asigna)}value={asigna}></TextInput>
      </View>
      <View style={[{display:"flex",flexDirection:"row",marginBottom:20 ,gap:10}]}><Text style={{fontWeight:'bol'}}>Nota momento1(30%)</Text>
      <TextInput placeholder='ingrese la nota1'style={styles.inputs}onChangeText={nota1=>setnombre(nota1)}value={nota1}></TextInput>
      </View>
      <View style={[{display:"flex",flexDirection:"row",marginBottom:20 ,gap:10}]}><Text style={{fontWeight:'bol'}}>Nota momento2(35%)</Text>
      <TextInput placeholder='ingrese la nota2'style={styles.inputs}onChangeText={nota2=>setnota2(cc)}value={nota2}></TextInput>
      </View>
      <View style={[{display:"flex",flexDirection:"row",marginBottom:20 ,gap:10}]}><Text style={{fontWeight:'bol'}}>Nota momento3(35%)</Text>
      <TextInput placeholder='ingrese la nota3'style={styles.inputs}onChangeText={nota3=>setnota3(nota3)}value={nota3}></TextInput>
      </View>
      <View style={[{display:"flex",flexDirection:"row",marginBottom:20 ,gap:10}]}><Text style={{fontWeight:'bol'}}>Definitiva</Text>
      <TextInput style={styles.inputs}onChangeText={Definitiva=>setDefinitiva(Definitiva)}value={Definitiva}></TextInput>
      </View>
      <View style={[{display:"flex",flexDirection:"row",marginBottom:20 ,gap:10}]}><Text style={{fontWeight:'bol'}}>Observacion</Text>
      <TextInput placeholder='observacion'style={styles.inputs}onChangeText={observacion=>setDefinitiva(observacion)}value={observacion}></TextInput>
      </View>
      <View style={[styles.container,{marginTop:20,flexDirection:'row',gap:5}]}>
        <TouchableOpacity  style={[{backgroundColor:"green"},styles.buttons]}onPress={()=>calcular}>
         <Text style={styles.TextButon}>Calcular/Guardar</Text>
        </TouchableOpacity>
     
        <TouchableOpacity  style={[{backgroundColor:"green"},styles.buttons]}onPress={()=>limpiar}>
         <Text style={styles.TextButon}>Limpiar</Text>
        </TouchableOpacity>
      
        <TouchableOpacity  style={[{backgroundColor:"green"},styles.buttons]}onPress={()=>buscar}>
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
