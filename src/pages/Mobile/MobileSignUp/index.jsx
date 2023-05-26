import { useState } from "react";
import { Container, Form } from "./styles";
import { FiMail, FiLock, FiUser } from 'react-icons/fi';
import logo from "../../../assets/logoMobile.svg";
import { api } from '../../../services/api';
import { Input } from '../../../components/Input/index';
import { Button } from '../../../components/Button/index';
import { ButtonText } from "../../../components/ButtonText";
import { useNavigate } from "react-router-dom";
import { AlertModal } from "../../../components/AlertModal";


export function MobileSignUp() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showAlert, setShowAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState("");
    const navigate= useNavigate();

  function handleSignIn(){
     navigate("/signin")
  }


    function handleSingUp(){
      if(!name || !email || !password ) {
        return alert("Preencha todos os campos!")
      }
      
      api.post("/users", {name, email, password})
      .then(() => {
        setAlertMessage("Usuário cadastrado com sucesso!");
        setShowAlert(true);
      
      })
      .catch(error => {
        if(error.response){
            alert(error.response.data.message);
        }else{
            alert("Não foi possível cadastrar")
        }
      })
    }


    return (
        <Container>
          
            <main>

            <Form>
            <img className="Budega" src={logo} />
             
               <Input
                    loginMobile
                    placeholder="Nome"
                    type="text"
                    icon={FiUser}
                    onChange = { e => setName(e.target.value)}

                />



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

                <Button title= "Cadastrar" onClick= {handleSingUp}/>
                <div className="backLogin">

                <ButtonText onClick={handleSignIn} title= "Voltar para o login"/>
                </div>
                
                 
            </Form>
                    </main>
                    {showAlert && <AlertModal message={alertMessage} showLoginButton onClose={() => setShowAlert(false)} />}
        </Container>



    );

}