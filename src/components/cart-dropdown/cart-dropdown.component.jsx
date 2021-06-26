import React from 'react';


import CustomButton from '../custom-button/custom-button.component';



import './cart-dropdown.styles.scss';

const CartDropdown = ({ cartItems, history, dispatch }) => (
  <div className='cart-dropdown'>
    <div className='cart-items'>
      
    </div>
    <CustomButton
    >
      GO TO CHECKOUT
    </CustomButton>
  </div>
);

export default CartDropdown;