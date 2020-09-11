import React, {useState} from 'react';
import {Link, Redirect} from 'react-router-dom'
import { Form, Input } from '@rocketseat/unform'

import api from '../../services/api'

import './styles.css'

function SignIn() {
  const [redirect, setRedirect] = useState(false)
  const [message, setMessage] = useState('')

  async function handleSubmit(data) {
    await api.post('/sessions', data).then(({data})=>{
      localStorage.setItem('token', data.token.token)
      localStorage.setItem('user', data.user.name)
      setRedirect(true)
    }).catch(()=>{
      setMessage('Usuario ou senha invalidos')
      return
    })
   
  }

    if (redirect) {
      return <Redirect to="/" />
    }

  return (
    <>
      <Form onSubmit={handleSubmit} >
        <Input required name="email" type="text" placeholder="digite seu email"/>
        <Input  required name="password" type="password" placeholder="digite sua senha"/>
        <p>{message}</p>
        <button type="submit">Entrar</button>
      </Form>
    <p>Não tem uma conta ? <Link to="/signup" >Cadastre-se</Link></p>
    </>
  );
}

export default SignIn;