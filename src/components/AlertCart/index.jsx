import { Container } from "./styles"
import { useNavigate } from "react-router-dom";

 export function AlertCart({ message, onClose }) {
  const navigate = useNavigate();
  function handleSignIn(){
    navigate("/cart")
  }
  return (
    <Container>
    <div className="modal-overlay">
      <div className="alert-modal">
        <p>{message}</p>
        <button onClick={handleSignIn}>Ir ao carrinho</button>
        <button  onClick={onClose}>Fechar</button>
      </div>
    </div>
    </Container>
  );
};

