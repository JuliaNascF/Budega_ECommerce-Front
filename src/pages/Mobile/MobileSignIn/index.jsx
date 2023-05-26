import { useState } from "react";
import { Container, Form } from "./styles";
import { FiMail, FiLock } from 'react-icons/fi'
import logo from "../../../assets/logoMobile.svg"
import { useAuth } from '../../../hooks/auth'
import { useNavigate } from "react-router-dom";
import { Input } from '../../../components/Input/index'
import { Button } from '../../../components/Button/index'


export function MobileSignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
     
    const navigate= useNavigate()

    const { signIn } = useAuth();
    
    function handleSignIn() {
      signIn({ email, password })
        .then(() => {
          const isAuthenticated = localStorage.getItem('@budega:token') !== null;
          if (isAuthenticated) {
            navigate('/home')
          }
        })
        .catch((error) => {
          console.log(error)
        });
    }
    
    function handleSignUp(){
      navigate("/register");
    }
 


    return (
        <Container>
         

            <main>
            <Form>

            <img className="Budega" src={logo} />
             

                <Input
                    loginMobile
                    placeholder="E-mail"
                    type="text"
                    icon={FiMail}
                    onChange = { e => setEmail(e.target.value)}

                />

                <Input
                    loginMobile
                    placeholder="Senha"
                    type="password"
                    icon={FiLock}
                    onChange = { e => setPassword(e.target.value)}
                    />

                <Button title= "Entrar" onClick= {handleSignIn}/>

                  <p> Não tem conta?  <span onClick={handleSignUp}>Criar conta</span>  </p> 
                 
            </Form>
                    </main>

        </Container>



    );

}