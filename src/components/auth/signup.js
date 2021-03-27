import { navigate } from 'gatsby';
import React ,{useEffect, useState} from 'react'
import { useForm } from "react-hook-form";

   
const Signup  = (props) =>{
const [signup, setSignup] = useState([]) 
const [itoken, setToken] = useState([])    
const [mounted, setIsmounted ] = useState(false)   


const Goto_Achat = ()=>{
   navigate('/commerce/masque chat bleu')
}



const onSubmit =  (data) => {
    // const  memoizedValue = React.useMemo(=>)
    // const SignIn = () => {
    //     return new Promise((resolve, reject) => { fetch('http://10.0.0.2/wordpress/wp-json/wp/v2/users/register', {
    //           method: 'POST',
    //           headers: {
    //              'Accept': 'application/json',
    //              'Content-Type': 'application/json'     
    //           },
    //           body: JSON.stringify({ username: data.username, email: data.email, password: data.password})
    //           })
    //     .then(res =>  res.json())
    //     .then( data=>{ setSignup(data)})
    //     })
    // }
    // //SignIn()

   
    // function Tok () {
    //     console.log(data.password)
    //     return new Promise((resolve, reject) => {fetch('http://10.0.0.2/wordpress/wp-json/jwt-auth/v1/token', {

    //         method: 'POST',
    //         headers: {
    //             'Accept': 'application/json',
    //             'Content-Type': 'application/json'     
    //         },
    //         body: JSON.stringify({ username: data.username, password: data.password})
    //         })
    //         .then(rese =>  rese.json())
    //         .then( datai=>{ setToken(datai)})
    //     })
    // }
 
    // Promise.all([SignIn(),Tok()]).then((values) => {
    //     console.log(values);
    // })

    const  tok =process.env.GATSBY_TOKEN
    const bearer = 'Bearer ' + tok;
    const SignIn = () => {
        // const  tok =process.env.GATSBY_TOKEN
        // const bearer = 'Bearer ' + tok;
            return new Promise((resolve, reject) => { fetch('http://10.0.0.2/wordpress/wp-json/wc/v3/customers', {
                  method: 'POST',
                  withCredentials: true,
                  credentials: 'include',  
                  headers: {
                     'Accept': 'application/json',
                     'Content-Type': 'application/json' ,   
                     'Authorization': bearer 
                  },
                  body: JSON.stringify({ username: data.username, email: data.email, password: data.password})
                  })
            .then(res =>  res.json())
            .then( data=>{ setSignup(data)})
            })
        }
    SignIn()
}

// console.log(pass, name)
//     function Tok  () {
//     fetch('http://localhost/wordpress/wp-json/jwt-auth/v1/token', {
//         method: 'POST',
//         headers: {
//            'Accept': 'application/json',
//            'Content-Type': 'application/json'     
//         },
//         body: JSON.stringify({ username: name, password: pass})
//         })
//         .then(rese =>  rese.json())
//         .then( datai=>{ setToken(datai)})
//     }
//  if (signup.code ===200){
//      Tok()
//     signup.code = 0
//  }
   
//    then(Promise.resolve  (  fetch('http://localhost/wordpress/wp-json/jwt-auth/v1/token', {
//           method: 'POST',
//           headers: {
//              'Accept': 'application/json',
//              'Content-Type': 'application/json'     
//           },
//           body: JSON.stringify({ username: data.username, password: data.password})
//           })
//     .then(res =>  res.json())
//     .then( data=>{ setToken(data)})
//     })

  
   
    

// signup !== undefined && Promise.resolve(p2)


// const username = data.username
// const password= data.password
// console.log(username, "poi", password)
// /////// une fois signup on genere le token  automatiquement
// async function fetchData  (data) {
//     const  result = await fetch('http://localhost/wordpress/wp-json/jwt-auth/v1/token', {
//           method: 'POST',
//           headers: {
//              'Accept': 'application/json',
//              'Content-Type': 'application/json'     
//           },
//           body: JSON.stringify({ username: username, password: password})
//           })
//     .then(res =>  res.json())
//     .then( data=>{ setToken(data)})
//     return result    
//  }




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
            {console.log('le token est'+process.env.GATSBY_TOKEN)}  
            {/* (localStorage.setItem('userTokenWordpress', itoken.response )) } */}
            {console.log("itoken"+itoken)}
             {itoken.token !== undefined  && (
               localStorage.setItem('userToken', itoken.token),
               localStorage.setItem('userEmail', itoken.user_email),
               localStorage.setItem('userNicename', itoken.user_nicename),
               setTimeout(Goto_Achat(), 1000)
               )
            } 
            <form onSubmit={handleSubmit(onSubmit)}>
            <input name="username"  placeholder='username' ref={register} />
            <input name="email"  placeholder='email' ref={register} />
            <input name="password" placeholder='password' ref={register({ required: true })} />
            {errors.password && <span>This field is required</span>}
            <input type="submit" />
         </form>
        
      </>
      );
 //  }
}

export default Signup