'use client';

import React from 'react';
import './ContactForm.scss';
import LogoForm from './LogoForm';

export default function ContactForm() {
  return (
    <div className="contact-form">

      <form>
        <LogoForm className={'logo_icon'} />
        <h2>Контактна інформація</h2>

        <input type="text" placeholder="ПІБ" />
        <input type="tel" placeholder="Номер телефону" />

        <label className="checkbox">
          <input type="checkbox" />
          Не телефонуйте мені для підтвердження замовлення
        </label>

        <input type="email" placeholder="E-mail" />
        <textarea placeholder="Коментар до замовлення"></textarea>
      </form>
    </div>
  );
}
