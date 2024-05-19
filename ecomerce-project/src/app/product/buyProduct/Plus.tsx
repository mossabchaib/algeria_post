import React from 'react';
import { useDispatch } from 'react-redux'; // Import `useDispatch` from `react-redux`
import { plusQuantite } from '../../../Golobal-Redux/buySlice/buy'; // Import your action creator

export default function Plus({ category }: any) { // Destructure the `category` prop
  const dispatch = useDispatch(); // Use `useDispatch` to get the dispatch function

  const buyProduct = () => {
console.log('a:',category.id)
    // You need to pass the `product` to the action creator, assuming that's what you intended
    dispatch(plusQuantite(  category.id )); // Dispatch the action
  }

  return (
    <div>
      <p>
        <button onClick={() => buyProduct()} style={{ border: 'none', background: '#000', color: '#fff' }}>
          +
        </button>
      </p>
    </div>
  );
}
