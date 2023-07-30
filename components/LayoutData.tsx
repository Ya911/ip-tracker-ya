import { StyleSheet } from "react-native"
import { View , Text } from "./Themed"
import {  scoundColor } from '../constants/Colors';

export default function LayoutData({data , error}: any){
  
  
    type text = string[]
    let text : text = ["IP ADDRESS","LOCATION", "REGION" , "CURRENCY"  ,"TIMEZONE","ISP"]
    return (data && !error) ? (
  
      <View 
      style={style.continue}>
    {text.map((v,i) : React.ReactNode =>(
        <View key={i} style={style.veiwItem as any}>
            <Text style={style.text}>{v}</Text>
            <Text style={style.scendtext}>
              {
              v.startsWith('IP') && (data?.ip || "") || v.startsWith('LO') && (data?.country + data?.countryFlag.emoji || "" )
              ||  v.startsWith('TI') && (data?.timezone || '') || v.startsWith('ISP') && (data?.org || '')
              ||  v.startsWith('RE') && (data?.region || '') || v.startsWith('CUR') && (data?.countryCurrency?.code || '')
              }
              </Text>
        </View>
    ))}
      </View>
    ) : (error ? <View><Text>{error || "Error in response"}</Text></View> : '')
  }
  


  const style = StyleSheet.create({
    continue:{
      bottom:'-5%',
      width:'85%', 
      borderRadius:10,
      padding:10,
      gap:10,
      alignItems:'center',
      zIndex:1
    },
    veiwItem:{
      alignItems:'center',
      gap:7
    },
    text:{color: scoundColor , fontSize:10 , letterSpacing:3},
    scendtext:{fontSize:14 , letterSpacing:1 , fontFamily:'SpaceMono' , maxWidth:"88%" , textAlign:'center'}
  })
  