import { useState } from 'react';
import './hello.css';

function Hello() {
  const [message, setMessage] = useState('Hello'); 

  return (
    <>
      <h1>{message}</h1>
      <h2>Hello World</h2>
      <button onClick={() => setMessage('Hi there!')}>Change Message</button>
    </>
  );
}

export default Hello;
