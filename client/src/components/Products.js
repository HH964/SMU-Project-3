import React from 'react';
import 'materialize-css'; // It installs the JS asset only
import 'materialize-css/dist/css/materialize.min.css';

const ProductCard = props => {
  return (
    <div className="col s12 m4">
      <div className="card blue-grey darken-1">
        <div className="card-content white-text">
          <span className="card-title">{props.data.name}</span>
          <span>{props.data.brand}</span>
        </div>
        <div>

          <img className="" src={props.data.img} alt="test" />
        </div>
        <div class="card-action">
          <a >{props.data.price}</a>
        </div>
      </div>
    </div>
  );
};





export default ProductCard;
