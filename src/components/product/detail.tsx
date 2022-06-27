
import { Product } from '../../type';

const ProductDetail = ({
  item: {
    category,
    title,
    description,
    image,
    price,
    rating: {
      rate
    },
  } }: {
    item: Product;
  }) => (
  <div className="product-detail">
    <p className="product-detail__category">{category}</p>
    <p className="product-detail__title">{title}</p>
    <img className="product-detail__image" src={image} />
    <p className='product-detail__description'>{description}</p>
    <span>${price}</span>
    <span className="product-detail__rating">{rate}</span>
  </div>
)

export default ProductDetail;