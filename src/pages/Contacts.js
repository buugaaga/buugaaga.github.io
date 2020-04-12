import React from 'react';
import MainContacts from '../components/Contacts';

export function Contacts({ text}) {

  return (
    <div>
      <h1>
        <MainContacts text={text} />
      </h1>
    </div>
  )
}