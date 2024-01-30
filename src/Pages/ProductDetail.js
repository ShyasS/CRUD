import React, { useDebugValue, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios';
import { fetchProduct, removeSelectedProduct } from '../components/redux/Actions/ProductAction';
import { useParams } from 'react-router-dom';
export const ProductDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product);
  console.log(product)
  const { image, price, title, description } = product;
  useEffect(() => {
    dispatch(fetchProduct(id));
    return () => {
      dispatch(removeSelectedProduct());
    }
  }, [])
  return (
    <>
      {Object.keys(product).length === 0 ? (
        <div>Loading...</div>) : (
        <div class="card" >
          <div class="card-body">
            <img src={image} style={{ marginLeft: '500px' }} alt={title} />
            <h5 class="card-title" style={{ textAlign: 'center' }}>{title}</h5>
            <h3 class="card-subtitle mb-2 text-body-secondary" style={{ textAlign: 'center' }}>${price}</h3>
            <p class="card-text" style={{ textAlign: 'center' }}>{description}</p>
          </div>
        </div>
      )
      }
    </>
  )
}
