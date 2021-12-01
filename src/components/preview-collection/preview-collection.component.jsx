import React from 'react';
import Collectionitem from '../collection-item/collection-item.component';

import './preview-collection.style.scss';
const CollentionPreview = ({ items, title }) => (
  <div className='collection-preview'>
    <h1 className='title'>{title.toUpperCase()}</h1>
    <div className='preview'>
      {items
        .filter((item, i) => i < 4)
        .map(({ id, ...otherItemProps }) => (
          <Collectionitem key={id} {...otherItemProps} />
        ))}
    </div>
  </div>
);
export default CollentionPreview;
