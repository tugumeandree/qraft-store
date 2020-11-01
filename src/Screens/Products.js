import React,{useState, useEffect} from 'react'
import {db} from '../store/firebase/'

import '../../src/styles.css'
const Products = () => {

    const [products, setProducts] = useState('')

    useEffect(() => {
             try{
                db.collection('pearl-valley').onSnapshot((snapshot) => {
                snapshot.forEach((doc) => {
                    const data = doc.data();
                    setProducts(data)
                    console.log('Snapshot', doc.data());
                });
            })
             }
             catch(err){
                 console.log(err)
             };
            
        },[])
        console.log('myProducts', products);

    return (
        <div>
        
            {/* <div class="product">
                <img class="product-image" src={products.image} alt="product"/>
              <div class="product-name">
                <a href="product.html">Slim Shirt</a>
              </div>
    <div class="product-brand">{products.title}</div>
    <div class="product-price">Shs{products.price}</div>
              <div class="product-rating">4.5 Stars (10 Reviews)</div>
            </div> */}
            
          
            
        </div>
    )
}

export default Products
