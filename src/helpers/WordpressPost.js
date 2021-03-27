import React from "react"
import Box from '@material-ui/core/Box'
import Img from 'gatsby-image'
import { useForm } from "react-hook-form";


// const email = localStorage.getItem('userEmail');
// // const authorId =localStorage.getItem('userId');    
// const userNiceName = localStorage.getItem('userNiceName')
// const token = localStorage.getItem('userToken')

let email, userNiceName, token

const WpPost = (k) => {


const { register, handleSubmit, watch, errors } = useForm();  

// console.log(k.pageContext);
// console.log(k.pageContext.k.databaseId);
//console.log(k)


const onSubmit = data => {
  if (typeof window !== 'undefined'){
    email = localStorage.getItem('userEmail');  
    userNiceName = localStorage.getItem('userNiceName')
    token = localStorage.getItem('userToken')
  }

  let formData= {
      post:  k.pageContext.k.databaseId,
      // author: authorId,  
      author_email: email,
      author_name: userNiceName,
      date : new Date(),
      content : data.content,
  }
  console.log(formData)
  const fetchData = async () => {
      const result = await fetch(`https://portaildemo69.000webhostapp.com/wp-json/wp/v2/comments/`, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`
          },
          body: JSON.stringify( formData)
          })
      .then(res => res.json())
      return result
  }
   fetchData();
}


  return (
    <div>
      <Box m ={20}>

        {/* <img src={k.pageContext.k.featuredImage.srcSet} alt=''/> */}
      
        
  {/* ..........FORM.................        */}
        <h1>Laisser un commentaire sur un post  tel  hello world  ou  post  correspondant </h1>
        <h2>Votre adresse e-mail ne sera pas publiée. Les champs obligatoires sont indiqués avec *</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
        <input name="nickName"  ref={register} />
        <textarea name="content" ref={register({ required: true })} />
        {errors.content && <span>This field is required</span>}
        {/* {(token && username) !== null &&(<input type="submit" />)} */}
        <input type="submit" />   
        </form>  
      </Box>
    </div>  

  )
}

export default WpPost