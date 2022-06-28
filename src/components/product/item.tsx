import { Link } from 'react-router-dom'
import { Product } from '../../graphql/products';

const Productitem = ({
  description,
  id,
  imageUrl,
  price,
  title,
  createdAt
}: Product) => (
  <li className="product-item">
    <Link to={`/products/${id}`}>
      <p className="product-item__title">{title}</p>
      <img className="product-item__image" src={imageUrl} />
      <span>${price}</span>
    </Link>
  </li>
)

export default Productitem;