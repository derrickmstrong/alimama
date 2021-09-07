import { ActionTypes } from '../constants/actionTypes';
import alimamaApi from '../../apis/alimamaApi';

export const fetchProducts = () => {
  // Async action creator via redux thunk
  return async (dispatch, getState) => {
    const response = await alimamaApi.get('/products');
    dispatch({ type: ActionTypes.FETCH_PRODUCTS, payload: response.data });
  };
};

export const selectedProduct = id => {
  // Async action creator via redux thunk
  return async (dispatch, getState) => {
    const response = await alimamaApi.get(`/products/${id}`);
    dispatch({ type: ActionTypes.SELECTED_PRODUCT, payload: response.data });
  };
};

export const removeSelectedProduct = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCT,
  };
};
