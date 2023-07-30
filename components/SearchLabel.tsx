import { useEffect, useRef, useState } from "react";
import { Button, TextInput, StyleSheet ,  Keyboard } from "react-native";
import { View } from "./Themed";
import { scoundColor } from "@/constants/Colors";



const info = {
  "info": 
  { "city": "Buraydah", 
  "continent": { "code": "AS", "name": "Asia" }, 
  "country": "Saudi Arabia", "countryCode": "SA", 
  "countryCurrency": { "code": "SAR", "symbol": "﷼" }, 
  "countryFlag": { "emoji": "🇸🇦", "unicode": "U+1F1F8 U+1F1E6" }, 
  "ip": "94.98.185.122", "isEU": false, "loc": "26.3260,43.9750", 
  "org": "AS25019 Saudi Telecom Company JSC", 
  "region": "Al-Qassim Region", "timezone": "Asia/Riyadh" }
}



export default function SearchLabel({ onErrorCehncg, onDataCehncg }: any) {
  let [ip, setIp] = useState<string>("")
  let textInput = useRef<any>(null)


  const op = {
    method: "post",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      "Cache-Control":'public, max-age=3600',
    },

    //make sure to serialize your JSON body
    body: JSON.stringify({
      ip: ip.trim(),
    })
  }
  function getip(value: string): void {
 

   
    return setIp(value)

  }

  async function supmut(): Promise<void> {
    textInput.current.clear()
    Keyboard.dismiss()
    try {
      let patreen = /^(?:(?:^|\.)(?:2(?:5[0-5]|[0-4]\d)|1?\d?\d)){4}$/; 
      if(patreen.test(ip.trim())){
      let res = await fetch('https://api.nextyi.com/v1/getip', op)
      if(!res.ok)throw new Error("IP NOT VILED")
      let re1 = await res.json()
      console.log(re1);
     
      setIp('')
      onErrorCehncg(null)
      return onDataCehncg(re1)
      }

      throw new Error("IP NOT VILED")
    } catch ({ message }: any) {
      setIp('')
      onDataCehncg(null)
      return onErrorCehncg(message || "Error in requst")
    }

  }


  return (
    <View style={style.continue}>
      <TextInput
        style={style.textinput}
        placeholder='Search for any IP address or domain'
        value={ip}
        onChangeText={getip}
        textAlign="left"
        placeholderTextColor={scoundColor}
        maxLength={28}
        numberOfLines={1}
        ref={textInput}
        keyboardType="numeric" 
      
      />
      <View style={style.button}>
        <Button
          color='white'
          title=">"
          onPress={supmut}
        />
      </View>
    </View>

  )
}

const style = StyleSheet.create({
  continue: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 10,
    overflow: 'hidden',
    height: 50, 
    width:"80%"
  },
  textinput: {
    flex:5,
    backgroundColor: 'white',
    paddingHorizontal: 8,
    fontSize: 15,
    fontFamily:'SpaceMono',
    

  },
  button: {
    backgroundColor: 'black',
    justifyContent: 'center',
    flex:1
  }
})