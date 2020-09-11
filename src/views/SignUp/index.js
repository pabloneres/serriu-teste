import React, { useState } from 'react';
import { Redirect } from 'react-router-dom'
import { Form, Input } from '@rocketseat/unform'

import api from '../../services/api'

import './styles.css'

function SignUp() {
  const [redirect, setRedirect] = useState(false)

  async function handleSubmit(data) {
    await api.post('/users', data)
    setRedirect(true)
  }

  if (redirect) {
    return <Redirect to="/signin" />
  }

  return (
    <>
      <Form onSubmit={handleSubmit} >
        <Input required type="text" name="name" placeholder="Digite seu nome..."/>
        <Input required type="text" name="email" placeholder="Digite seu email..."/>
        <Input required type="password" name="password" placeholder="Digite sua senha..."/>
        <button type="submit" >Cadastar</button>
      </Form>
    </>
  );
}

export default SignUp;