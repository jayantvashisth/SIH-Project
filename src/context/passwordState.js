import PasswordContext from "./passwordContext";
import pic1 from "./uploads/1647891952665.png"
import pic2 from "./uploads/1647892577731.png"
import pic3 from "./uploads/1647892577732.png"


import { useState } from "react";


const PasswordState = (props) => {

    
    var x = 5;

    const [first, setfirst] = useState([pic1, pic2, pic3]);
    
    if(x>5){
        setfirst(['1647891952665.png', '1647892577731.png', '1647892577732.png']);

        x=1;
    }

    /* const getPhotos = async function postData(url = 'http://localhost:5000/upload/getimages') {
         const response = await fetch(url, {
             method: 'PUT', 
             mode: 'cors', 
             cache: 'no-cache', 
             credentials: 'same-origin', 
             headers: {
                 'Content-Type': 'application/json',
 
                 
             },
             body: JSON.stringify({ username: "jake" }) 
         });
         const photu = await response.json(); 
         console.log(photu);
         const array = photu.split(",");
         console.log(array);
         let temp2 = Math.floor(Math.random() * 6);
         setfirst(array);
         console.log(first);
         // let temp = "http:\\localhost:5000\\"
         console.log("http:\\\\localhost:5000\\" + first);
 
     }
 
     */
    return (
        <PasswordContext.Provider value={ {first , setfirst ,pic1,pic2,pic3} }>
            {props.children}
        </PasswordContext.Provider>
    )
}



export default PasswordState;