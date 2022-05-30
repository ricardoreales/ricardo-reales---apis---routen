import './ItemDetail.css'

const ItemDetail = ({ name, price, stock, img }) => {
    return (


        <div className="CardItemContainer">
            <h1>ItemDetail</h1>
            <img className='imgItem' src={img} alt="img" />
            <h1>precio: {price}</h1>
            <h1>stock: {stock}</h1>
            <h1>color: {name}</h1>
        </div>

    )
}

export default ItemDetail