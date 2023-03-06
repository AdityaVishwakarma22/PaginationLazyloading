import { LazyLoadImage } from 'react-lazy-load-image-component';
import React from 'react';

const Item = ({ item }) => (
  <div className="item">
    <h2>{item.name}</h2>
    <LazyLoadImage
      src={item.flags.png}
      effect="blur"
    />
    <p>{item.author}</p>
  </div>
);

export default Item;