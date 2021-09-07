import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import ProductComponent from './ProductComponent';
import { setProducts } from '../store/actions/productActions';

const ProductListing = () => {
  const products = useSelector(state => state);
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    try {
      const response = await axios.get('https://fakestoreapi.com/products');
      console.log(response.data);
      dispatch(setProducts(response.data));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
    return () => {};
  }, []);

  return (
    <div className='ui grid container'>
      <ProductComponent />
    </div>
  );
};

export default ProductListing;
