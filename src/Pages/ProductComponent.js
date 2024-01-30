import React,{useEffect}from 'react';
import {useSelector,useDispatch} from 'react-redux';
import { ProductListing } from './ProductListing';
import {fetchProducts} from '../components/redux/Actions/ProductAction';
import axios from 'axios'; 

 export const ProductComponent =()=> {
    const products = useSelector((state)=>state);
    console.log(products)
    const dispatch = useDispatch();
    useEffect(()=>{
      dispatch(fetchProducts());
    },[])
    return (
        <>
           <h1><ProductListing/></h1> 
        </>
    )
}

