
import { Container, Content } from "./styles";
import { ButtonText } from "../../../components/ButtonText";
import { FiArrowLeft } from 'react-icons/fi';
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { api } from "../../../services/api";

export function MobileOrder() {

  const navigate = useNavigate();

  function handleBack() {
    navigate("/home");
  }
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    async function fetchOrders() {
      try {
        const response = await api.get("/orders/pedidos");
        const data = await response.data;
        setOrders(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchOrders();
  }, []);

  return (
    <Container>
      <main>
        <div className="back">
          <ButtonText onClick={handleBack} icon={FiArrowLeft} />
          <h2>Histórico de Compras </h2>
        </div>
        <Content>
       
          {orders.map((order) => (
            <div className="order" key={order._id}>
              <h3>Pedido: {order._id}</h3>
              <p>Método de entrega: {order.deliveryMethod}</p>
              <p>Método de pagamento: {order.paymentMethod}</p>
              <p>
                {order.cartItems.map((item) => (
                  <li key={item.productId}>
                    {item.product.title} - Quantidade: {item.quantity}
                  </li>
                ))}
              </p>
                <p className="price ">Preço total: {order.totalPrice}</p>
            </div>
          ))}





        </Content>


      </main>
    </Container>
  );
}