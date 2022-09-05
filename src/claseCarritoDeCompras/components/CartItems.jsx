

const CartItems = ({data, clearItem}) => {

  let {id, name, price, quantity} = data;
  return (
    <div  style={{backgroundColor:"forestgreen", height:180, width:180,margin:5, display:"flex", flexDirection:"column", justifyContent:"center",alignItems:"center"}}>
        <h4>{name}</h4>
        <h5>$ {price} x {quantity} = {price * quantity} </h5>
        <button onClick={()=> clearItem(id,true)}>-</button>
        <button onClick={()=> clearItem(id)}>eliminar todos</button>
    </div>
  )
}

export default CartItems