import { useQuery } from 'react-query';
import Productitem from '../../components/product/item';
import { fetcher, QueryKeys } from '../../queryClient';
import { Product } from '../../type';

const ProductList = () => {
  const { data } = useQuery<Product[]>(QueryKeys.PRODUCTS, () => fetcher({
    method: 'GET',
    path: 'products'
  }));

  return (
    <div>
      <h2>상품 목록</h2>
      <ul className='products'>
        {data?.map((product) => (
          <Productitem {...product} key={product.id} />
        ))}
      </ul>
    </div>
  )
}

export default ProductList;
