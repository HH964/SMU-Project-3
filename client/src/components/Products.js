import React from 'react';
import 'materialize-css'; // It installs the JS asset only
import 'materialize-css/dist/css/materialize.min.css';

const ProductCard = props => {
  return (
    <span className="col s4">
      <div className="card medium blue-grey darken-1">
        <div className="card-content white-text">
          <span className="card-title" style={{border:"4px"}}>{props.data.name}</span>
          <span>{props.data.brand}</span>
        </div>
        <div>

          <img className="" style={{height:"200px", display: "block", marginLeft: "auto", marginRight: "auto"}} src={props.data.img} alt="test" />
        </div>
        <div class="card-action">
          <a >{props.data.price}</a>
          <button>Add to Cart <i className="fas fa-shopping-cart"></i></button>
         
        </div>
      </div>
    </span>
  );
};

export default ProductCard;
