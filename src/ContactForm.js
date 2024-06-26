// ContactForm.js
import React, { useState, useEffect } from 'react';

function ContactForm({ addContact, editContact, editingContact }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  useEffect(() => {
    if (editingContact) {
      setName(editingContact.name);
      setEmail(editingContact.email);
      setPhone(editingContact.phone);
    }
  }, [editingContact]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingContact) {
      editContact({ ...editingContact, name, email, phone });
    } else {
      addContact({ id: Date.now(), name, email, phone });
    }
    setName('');
    setEmail('');
    setPhone('');
  };

  return (
    <div id='in'>
    <div id='head2'> <h2 id='head2'>{editingContact ? 'Edit Contact' : 'Add Contact'}</h2></div>
      <form onSubmit={handleSubmit} id='form'>
        <input id='box1'
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input id='box2'
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input id='box3'
          type="tel"
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <button id='bt'  type="submit">{editingContact ? 'Save' : 'Add'}</button>
      </form>
    </div>
  );
}

export default ContactForm;
