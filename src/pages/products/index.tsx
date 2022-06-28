import { useQuery } from 'react-query';
import Productitem from '../../components/product/item';
import { GET_PRODUCTS, Products } from '../../graphql/products';
import { graphqlFetcher, QueryKeys } from '../../queryClient';

const ProductList = () => {
  const { data } = useQuery<Products>(QueryKeys.PRODUCTS, () => graphqlFetcher(GET_PRODUCTS));

  return (
    <div>
      <h2>상품 목록</h2>
      <ul className='products'>
        {data?.products?.map((product) => (
          <Productitem {...product} key={product.id} />
        ))}
      </ul>
    </div>
  )
}

export default ProductList;
