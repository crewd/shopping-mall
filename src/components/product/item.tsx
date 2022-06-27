import { Link } from 'react-router-dom'
import { Product } from "../../type";

const Productitem = ({
  category,
  description,
  id,
  image,
  price,
  rating,
  title
}: Product) => (
  <li className="product-item">
    <Link to={`/products/${id}`}>
      <p className="product-item__category">{category}</p>
      <p className="product-item__title">{title}</p>
      <img className="product-item__image" src={image} />
      <span>${price}</span>
      <span className="product-item__rating">{rating.rate}</span>
    </Link>
  </li>
)

export default Productitem;