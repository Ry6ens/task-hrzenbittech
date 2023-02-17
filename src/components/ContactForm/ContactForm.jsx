import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { sendForm } from 'redux/contactForm/form-operations';

import { Form, InputName, InputEmail, InputMessage, Button } from './ContactForm.styled';

export default function ContactForm() {
  const dispatch = useDispatch();

  const formData = { name: '', email: '', comment: '' };
  const [responseBody, setResponseBody] = useState(formData);

  const inputChangeHandler = event => {
    const { name, value } = event.target;
    setResponseBody({ ...responseBody, [name]: value });
  };

  const handleSubmit = event => {
    event.preventDefault();

    dispatch(sendForm(responseBody));

    event.target.reset();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <InputName
        placeholder="Your name*"
        type="text"
        name="name"
        onChange={e => inputChangeHandler(e)}
        required
      />
      <InputEmail
        placeholder="Your e-mail*"
        type="email"
        name="email"
        pattern="([A-Za-z0-9][._]?)+[A-Za-z0-9]@[A-Za-z0-9]+(\.?[A-Za-z0-9]){2}\.(com?|net|org)+(\.[A-Za-z0-9]{2,4})?"
        onChange={e => inputChangeHandler(e)}
        required
      />
      <InputMessage
        placeholder="Your message*"
        type="text"
        name="comment"
        onChange={e => inputChangeHandler(e)}
        required
      />
      <Button type="submit">Send message</Button>
    </Form>
  );
}
