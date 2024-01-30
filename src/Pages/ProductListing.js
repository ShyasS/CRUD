import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
export const ProductListing = () => {
    const products = useSelector((state) => state.allProducts.products);
    console.log(products)
    const Detail = products.map((prod) => {
        const { id, image, price, title } = prod;
        return (
            <>
                <div class="card" style={{ width: '320px', display: 'inline-block', margin: '20px', marginLeft: '30px' }} >
                    <Link to={`/product/${id}`} style={{ textDecoration: 'none', color: 'black' }}>
                        <img src={image} style={{ height: '290px', width: '270px', marginLeft: '20px' }} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">{title}</h5>
                            <p class="card-text" style={{ textAlign: 'center' }}>${price}</p>
                            <a href="#" class="btn btn-primary">Buy Now</a>
                        </div>
                    </Link>
                </div>
            </>
        )
    })
    return (
        <div>
            {Detail}
        </div>
    )
}

