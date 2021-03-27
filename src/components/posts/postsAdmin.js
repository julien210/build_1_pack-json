import React from 'react'
import { useForm } from "react-hook-form";
import axios from 'axios'
import { RepeatOneSharp } from '@material-ui/icons';

//  const userTokenWordpress = localStorage.getItem('userTokenWordpress' )
//  const obj = JSON.parse( userTokenWordpress)
//  //console.log(obj.token)

//  let  token =obj.token
//let  token
function Post   () {
    let  token
    if (typeof window !== 'undefined'){
        token = localStorage.getItem('userToken')
     }

    const { register, handleSubmit, watch, errors } = useForm();     
    const onSubmit = data => {
        let formData= {
            title   :   'data.title',
            content :   'data.content'
        }   

//ca  marche  aussi   avec  xhr
        // const cli = new XMLHttpRequest();
        //     cli.open('POST', 'https://fredpack.gq/wp-json/wp/v2/posts/')
        //    // cli.setRequestHeader('Cross-OriginResource-Policy', 'cross-origin')
        //     cli.setRequestHeader("Content-Type", 'Authorization', 'Bearer ' + token);
        //     cli.send(JSON.stringify({
        //                             title:data.title,
        //                             content : data.content,
        //                             publish : 'publish'
        //                             })
        //             )
        //     return cli
        //     console.log(cli);
        //}
        const fetchData = async () => {   
            console.log(token)
            const result = await fetch('http://localhost/wordpress/wp-json/wp/v2/posts/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify( formData)
                })
            .then(res => res.json())
            console.log(result)
            return result
        }

       fetchData();


    }
    return (
        <>
        <h1>New Post Admin</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
        {/* <input name="title"  ref={register} /> */}
        <textarea name="content" ref={register({ required: true })} />
        {errors.content && <span>This field is required</span>}
        <input type="submit" />
        </form>

        </>
    )
}

export default Post