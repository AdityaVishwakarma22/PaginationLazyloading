import React, { useState, useEffect } from 'react';
import { LazyLoadComponent } from 'react-lazy-load-image-component';
import Item from './Item';

const ITEMS_PER_PAGE = 10;

const ItemList = ({ items }) => {
  const [page, setPage] = useState(1);
  const [visibleItems, setVisibleItems] = useState([]);

  useEffect(() => {
    setVisibleItems(items.slice(0, ITEMS_PER_PAGE));
  }, [items]);

  const loadMore = () => {
    const nextPage = page + 1;
    const startIndex = nextPage * ITEMS_PER_PAGE - ITEMS_PER_PAGE;
    const endIndex = nextPage * ITEMS_PER_PAGE;

    setVisibleItems([...visibleItems, ...items.slice(startIndex, endIndex)]);
    setPage(nextPage);
  };

  const hasMore = items.length > visibleItems.length;

  return (
    <div>
      {visibleItems.map(item => (
        <LazyLoadComponent key={item.id}>
          <Item item={item} />
        </LazyLoadComponent>
      ))}
      {hasMore && (
        <button onClick={loadMore}>Load more</button>
      )}
    </div>
  );
};

export default ItemList;