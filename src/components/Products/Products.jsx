import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useGetProductsQuery } from 'redux/products/productsAPI';
import { selectProducts, sortedProducts } from 'redux/products/selector';
import { getProductsThunk } from 'redux/products/thunk';

export const Products = () => {
  // const products = useSelector(sortedProducts);
  // const { isLoading, error } = useSelector(selectProducts);

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getProductsThunk());
  // }, [dispatch]);

  const { data: products, isLoading, isError } = useGetProductsQuery();

    return (
      <div>
        <h1>Products</h1>
        {isLoading && <p>loading....</p>}
        {isError && <p>error</p>}

        {products && (
          <ul style={{ display: 'flex', flexWrap: 'wrap', gap: '30px' }}>
            {products.map(({ images, price, title, id }) => {
              return (
                <li key={id}>
                  <p>{title}</p>
                  <p>{price} $</p>
                  <img src={images[1]} alt={title} width={300} />
                </li>
              );
            })}
          </ul>
        )}
      </div>
    );
};
