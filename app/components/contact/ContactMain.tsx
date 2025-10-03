'use client';

import React from 'react';
import OrderSummary from './OrderSummary';
import flowerData from '../../_data/flowerData';
import CartCard from '../cart/CartCard';
import './ContactMain.scss';
import ContactForm from './ContactForm';


function ContactMain() {
  return (
    <div className="column-card-container">
      <ContactForm />
      {flowerData.map((flower) => (
        <CartCard flower={flower} trash={false} key={flower.id} />
      ))}
      <OrderSummary />
    </div>
  );
}

export default ContactMain;
