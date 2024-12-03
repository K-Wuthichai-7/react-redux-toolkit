import Navbars from './components/Navbar'
import Container from 'react-bootstrap/Container';
import Modal from './components/Modal';
import { CartContainer } from './components/CartContainer';

import { useSelector, useDispatch } from 'react-redux';
import { calculateTotals } from './features/cart/cartSlice';

import './App.css'
import { useEffect } from 'react';

function App() {
const { cartItems } = useSelector((store) => store.cart);
const { isOpen } = useSelector((store) => store.modal);
const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(calculateTotals())
  },[cartItems])

  return (
    <Container>
     {isOpen && <Modal/>}
     <Navbars/>
    <CartContainer/>
    </Container>
  )
}

export default App
