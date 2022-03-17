import React from 'react';
import { useEffect, useState} from 'react';
import socketIOClient from 'socket.io-client'

const CryptoCoin = () =>{
   
    const[a,setA] = useState()
    const URL = 'https://stg.clubdefy.io/'
    const message = {

        "action": "subscribe",
    
        "value": {
    
            "order": "gainers"
    
        }
    
    }
    useEffect(() => {
        const socket = socketIOClient(URL,{ path: '/skt', version: 'v2'});
        socket.emit("top_gainers_and_losers", message)
        
        socket.on("top_gainers_and_losers", data => {
          console.log(data);
        });
      });
    

    return(
        <div>
            <h1>Hi</h1>
          
        </div>
    )
}

export default CryptoCoin;