
import { TYPES } from "./actions";
import { useReducer } from "react";
import {shoppingInitialState, shoppingReducer} from "./shoppingReducer"
import Products from "./components/Products";
import CartItems from "./components/CartItems";

const ShoppingCart = () => {

  const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);

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
        <div>
          {products.map((prod) => <Products key={prod.id} data={prod} addItem={addItem} />)}
        </div>
        <h4>Carrito</h4>
        <div>
          {cart.map((item, index) => <CartItems key={index} data={item} clearItem={clearItem} />)}
        </div>
        <button onClick={clearCart}>Limpiar Carro</button>

    </>
  )
}

export default ShoppingCart