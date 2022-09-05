

const Products = ({data, addItem}) => {

  const {id, name, price} = data;
  return (
    <div style={{backgroundColor:"chocolate", height:150, width:150, display:"flex", flexDirection:"column", justifyContent:"center",alignItems:"center"}}>
        <h4>{name}</h4>
        <h5>{price}</h5>
        <button onClick={()=> addItem(id)}>Agregar producto</button>
    </div>
  )
}

export default Products;