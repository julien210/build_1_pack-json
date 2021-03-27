import { navigate } from 'gatsby';
import React ,{useEffect, useState} from 'react'
import { useForm } from "react-hook-form";

   
const Login = (props) =>{
const [itoken, setToken] = useState([])    
const [loggedIn , setLoggedIn ] = useState(false)   


const Goto_Posts = ()=>{
   navigate('/posts')
}

const onSubmit =  (data) => {

   async  function fetchData  () {
      const  result = await fetch('http://10.0.0.2/wordpress/wp-json/jwt-auth/v1/token', {
                            
            method: 'POST',
            headers: {
               'Accept': 'application/json',
               'Content-Type': 'application/json'     
            },
            body: JSON.stringify({ username: data.username, password: data.password})
            })
      .then(res =>  res.json())
      .then( data=>{ setToken(data)})
      return result       
   }
   fetchData()
}

//const onSubmit =  (data) => {

//    function fetchData  () {
      
//       let donnees = new FormData();
//          donnees.append('username' , `${data.username}`)
//          donnees.append('password',  `${data.password}`)
//          const cli =  new XMLHttpRequest()
//          cli.open('POST', 'https://portaildemo69.000webhostapp.com/wp-json/jwt-auth/v1/token', true)
//          cli.onload = function () {
//             setToken(cli) 
//             }
//          cli.send(donnees)
//          return cli
//    }
// fetchData()
//}


const { register, handleSubmit, watch, errors } = useForm();
//    console.log(watch("password"))

 
     return (
         <>
            {/* {itoken.status === 200  && (localStorage.setItem('userTokenWordpress', itoken.response )) } */}
      
            { itoken.statusCode  === 200  && (
               localStorage.setItem('userToken', itoken.data.token),
               localStorage.setItem('userEmail', itoken.data.email),
               localStorage.setItem('userNicename', itoken.data.nicename),
               Goto_Posts()
            )
            }
            {console.log(itoken)}
            <form onSubmit={handleSubmit(onSubmit)}>
            <input name="username" defaultValue="admin" ref={register} />
            <input name="password" ref={register({ required: true })} />
            {errors.password && <span>This field is required</span>}
            <input type="submit" />
         </form>
        
      </>
      );
 //  }
}

export default Login