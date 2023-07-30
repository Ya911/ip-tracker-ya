
export async function getip () : Promise<string>{
    try {
      let getIp4 = await (await fetch("https://api.ipify.org")).text() || await (await fetch("https://api6.ipify.org")).text()     
      return getIp4 
    } catch ({message} : any) {
      throw message
     
    }
  }


  export async function getloction (ip : string) : Promise<string>{
    
    try {

      return ''

    } catch ({message} : any) {
      throw message
     
    }
  }