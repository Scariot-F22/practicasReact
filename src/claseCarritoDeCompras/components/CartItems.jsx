

const CartItems = ({data, clearItem, clearCart}) => {

  let {id, name, price, quantity} = data;
  return (
    <div>
        <h4>{name}</h4>
        <h5>$ {price} x {quantity} = {price * quantity} </h5>
        <button onClick={()=> clearItem(id,true)}>-</button>
        <button onClick={()=> clearItem(id)}>eliminar todos</button>
    </div>
  )
}

export default CartItems