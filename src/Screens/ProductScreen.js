import React from 'react';
import data from '../data';
import {Link} from 'react-router-dom';

export default function ProductScreen(props) {
    
const product = data.products.find(x => x._id === props.match.params.id);
console.log(product);
   return (
    <React.Fragment>
   <div className="back-to-result">
       <Link to="/">Back</Link>
   </div>
    <div className="details">
        <div className="details-image" >
      <img src={product.image} alt="product"/>
      </div>
      <div className="details-info">
          <ul>
              <li><h4>{product.name}</h4></li>
              <li>
        {product.rating} Stars ({product.numReviews} Reviews)          
              </li>
              <li>
  Price: <b>UGX{product.price}</b>
              </li>
              <li>
                  <div> {product.description}</div>
              </li>
          </ul>
      </div>
      <div className="details-action">
<ul>
   <li>Price:{product.price}</li>
   <li>Status:{product.status}</li>
   <li>Qty:<selectt>
       <option>1</option>
       <option>2</option>
       <option>3</option>
       <option>4</option>
       </selectt></li>
       <li><button className="button primary">Add To Cart</button></li>
</ul>
      </div>
     </div>
     </React.Fragment>
   )
  
}
