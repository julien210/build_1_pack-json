import React from "react"
import { Link } from "gatsby"
import Login from '../components/auth/login'

import Layout from "../components/layout"
import SEO from "../components/seo"
import Divider from '@material-ui/core/Divider'
import Signup from  '../components/auth/signup'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    Login de Admin
    < Login />
    <Divider />
    Signup si  email  not  known   
    <Signup />
        
  </Layout>   
)

export default IndexPage
