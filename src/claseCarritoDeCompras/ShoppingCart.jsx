
import { TYPES } from "./actions";
import { useReducer, useEffect } from "react";
import {shoppingInitialState, shoppingReducer} from "./shoppingReducer"
import Products from "./components/Products";
import CartItems from "./components/CartItems";
import axios from "axios";

const ShoppingCart = () => {

  const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);
  
  const updateState = async ()=> {

    //PASO 1 -> definir los endpoints
    const productsURL = "http://localhost:5000/products";
    const cartURL = "http://localhost:5000/cart";

    //PASO 2 -> hacer la peticion GET
    const resProducts = await axios.get(productsURL),
        resCart = await axios.get(cartURL)

    //PASO 3 -> consumimos la información traída a través del dispatch como nuevo caso en el switch case
    //PASO 4 -> extraer la propiedad data del objeto
    dispatch({type: TYPES.READ_STATE, payload: [resProducts.data, resCart.data]})
  }

  useEffect(() => {
    updateState()
  }, [])
  

  const {products, cart} = state;

  const addItem = (id)=> dispatch({type: TYPES.ADD_TO_CART, payload: id}); //type y payload son propiedades del objeto action
  const clearItem = (id, all=false) =>{
    if (all) {
      dispatch({type: TYPES.REMOVE_ONE_PRODUCTS, payload: id})
    } else {
      dispatch({type: TYPES.REMOVE_ALL_PRODUCTS, payload: id})
    }
  };
  const clearCart = ()=> dispatch({type: TYPES.CLEAR_CART});

  return (
    <>
        <h2>Carro de compras</h2>
        <h3>Productos</h3>
        <div style={{backgroundColor:"cadetblue", display:"flex", justifyContent:"space-evenly",alignItems:"center", height:200,margin:10}}>
          {products.map((prod) => <Products key={prod.id} data={prod} addItem={addItem} />)}
        </div>
        <h4>Carrito</h4>
        <div style={{backgroundColor:"lightcoral", display:"flex",alignItems:"center", height:200,margin:10}}>
          {cart.map((item, index) => <CartItems key={index} data={item} clearItem={clearItem} />)}
        </div>
        <button onClick={clearCart}>Limpiar Carro</button>

    </>
  )
}

export default ShoppingCart