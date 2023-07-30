import { StyleSheet , ImageBackground , TouchableWithoutFeedback , Keyboard , View} from 'react-native';
import { MonoText } from '@/components/StyledText';
import { SafeAreaView } from 'react-native-safe-area-context';
import SearchLabel from '@/components/SearchLabel';
import LayoutData from '@/components/LayoutData';
import MyMap from '@/components/MyMap';
import { useState , useCallback } from 'react';
export default function Index() {


  type INFO = {
    city: string 
    country : string 
    region: string
    timezone : string
    ip: string 
    org: string
    countryCurrency: (string)
    loc:string
  }
  type MyData =  {
    info : INFO 
  }

  let [data , setdData] = useState<MyData | null>(null)
  let [error , setError] = useState<string | null>(null)
  let onDataCehncg = useCallback(()=>setdData,[data])
  let onErrorCehncg = useCallback(()=>setError,[error])



  return (
    <SafeAreaView style={{flex:1}}>
      {/* <GestureHandlerRootView > */}
    <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>
    <View style={{height:"30%"}}>
    <ImageBackground 
     resizeMode={'cover'} 
     style={{height:"100%" , alignItems:'center' , gap:20 , position:'relative' }}
     imageStyle={{ width:'100%' , height:"100%"}}
      source={require('../../assets/images/pattern-bg-mobile.png')}>
    <MonoText style={styles.title} >IP Address</MonoText>
    <SearchLabel onErrorCehncg={onErrorCehncg()} onDataCehncg={onDataCehncg()}/>
    <LayoutData data={data?.info || null} error={error || null}/>
    </ImageBackground>
    </View>
    </TouchableWithoutFeedback>

    <MyMap/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
   flex:1,
   flexDirection:'column'
  },

  title: {
    fontSize: 25,
    textAlign:'center',
    marginTop:40
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
