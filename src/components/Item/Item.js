import { Link } from 'react-router-dom'
import './Item.css'

const Item = ({ id, name, img,  }) => {
    return (
        <div className="CardItemContainer">
            <img className='imgItem' src={img} alt="img" />
            <h1>{name}</h1>
            <Link to={`/detail/${id}`} className='Option'>Ver detalle</Link>
        </div>
    )
}

export default Item