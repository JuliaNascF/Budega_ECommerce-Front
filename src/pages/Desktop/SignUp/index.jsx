import { useState } from "react";
import { Container, Form } from "./styles";
import { FiMail, FiLock, FiUser } from 'react-icons/fi'
import logo from "../../../assets/logo.svg"
import { api } from '../../../services/api';
import { Input } from '../../../components/Input/index'
import { Button } from '../../../components/Button/index'
import { ButtonText } from "../../../components/ButtonText";
import { useNavigate } from "react-router-dom";
import { AlertModal } from "../../../components/AlertModal";


export function SignUp() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showAlert, setShowAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState("");

    const navigate= useNavigate();

  function handleSignIn(){
     navigate("/signin")
  }



  function handleSignUp() {
    if (!name || !email || !password) {
      return alert("Preencha todos os campos!");
    }

    api.post("/users", { name, email, password })
      .then(() => {
        setAlertMessage("Usuário cadastrado com sucesso!");
        setShowAlert(true);
      })
      .catch(error => {
        if (error.response && error.response.data && error.response.data.error) {
          alert("Erro: " + error.response.data.error);
        } else {
          alert("Não foi possível cadastrar");
        }
      });
  }

    return (
        <Container>
            
            <h1>Mais que venda <span>conceito</span></h1>


            <main>

            <Form>
            <img className="Budega" src={logo} alt="" />
             
               <Input
                    login
                    placeholder="Nome"
                    type="text"
                    icon={FiUser}
                    onChange = { e => setName(e.target.value)}

                />



                <Input
                    login
                    placeholder="E-mail"
                    type="text"
                    icon={FiMail}
                    onChange = { e => setEmail(e.target.value)}

                />

                <Input
                    login
                    placeholder="Senha"
                    type="password"
                    icon={FiLock}
                    onChange = { e => setPassword(e.target.value)}
                    />

                <Button title= "Cadastrar" onClick= {handleSignUp}/>
                <div className="backLogin">

                <ButtonText onClick={handleSignIn} title= "Voltar para o login"/>
                </div>
                
                 
            </Form>
                    </main>
                    {showAlert && <AlertModal message={alertMessage} showLoginButton onClose={() => setShowAlert(false)} />}
        </Container>



    );

}