import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'

export const Home = () => {

    let history = useHistory();
    useEffect(() => {
      if(localStorage.getItem('token')){
          console.log("you got this buddy")
      }
      else{
          history.push("/login")
      }
      
    }, [])
    

  return (
    <div>home this side</div>
  )
}
