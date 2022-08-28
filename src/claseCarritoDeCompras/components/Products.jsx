

const Products = ({data, addItem}) => {

  const {id, name, price} = data;
  return (
    <div>
        <h4>{name}</h4>
        <h5>{price}</h5>
        <button onClick={()=> addItem(id)}>Agregar producto</button>
    </div>
  )
}

export default Products;