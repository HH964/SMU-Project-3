import React from 'react';

const ProductCard = props => {
  return (
    <div class="col s12 m4">
      <div class="card blue-grey darken-1">
        <div class="card-content white-text">
          <span class="card-title">{props.data.title}</span>
        </div>
        <div>

          <img className="" src={props.data.img} alt="test" />
        </div>
        <div class="card-action">
          <a href="#">Buy Product</a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
