import { StyleSheet } from 'react-native';
import { Text, View } from '@/components/Themed';
import {MonoText} from '@/components/StyledText'
import { ReactNode, useEffect, useState } from 'react';
import { getip } from '@/hooks/GetIp';

export default function TabTwoScreen() {

  let [ip , setIP] = useState<any>("")

  useEffect(()=>{
    let res = async ()=> setIP((await getip()).trim())
    res() 
  })

  return (
    <View style={styles.container}>
      <MonoText style={styles.title}>Your IP Address </MonoText>
      <MonoText selectable={true}  style={styles.title}>{ip} </MonoText>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  
  },
});
