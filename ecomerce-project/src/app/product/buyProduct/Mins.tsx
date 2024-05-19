import React from 'react';
import { useDispatch } from 'react-redux'; // Import `useDispatch` from `react-redux`
import { minseQuantite } from '../../../Golobal-Redux/buySlice/buy'; // Import your action creator
import { remove } from 'src/Golobal-Redux/buySlice/buy';
export default function Plus({ category }: any) { // Destructure the `category` prop
  const dispatch = useDispatch(); // Use `useDispatch` to get the dispatch function

  const buyProduct = () => {
category.quantite>1 ?  dispatch(minseQuantite(  category.id )):dispatch(remove(category.id.id))
  }
 return (
    <div>
      <p>
        <button onClick={() => buyProduct()} style={{ border: 'none', background: '#000', color: '#fff' }}>
          -
        </button>
      </p>
    </div>
  );
}
