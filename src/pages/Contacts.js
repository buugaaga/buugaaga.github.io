import React from 'react';

// import { DataOfContacts } from '../components/Contacts';

export function Contacts({ ru }) {

  return (
    <div>
      <h1>
        { ru ? 'Контакты' : 'Contacts'}
      </h1>
    </div>
  )
}