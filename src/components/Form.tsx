import { useState } from 'react';
import styles from '../styles/form.module.css';

interface FormProps {
  /* legend: string; */
  showRFC?: boolean;
}

const Form = ({ showRFC = false/* , legend */ }: FormProps) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [rfc, setRFC] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Name: ${name}, Email: ${email}`)
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      {/* <legend className={styles.legend}>{legend}</legend> */}
      <input
        type="text"
        placeholder="Full Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        autoComplete="name"
        required
        maxLength="32"
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        autoComplete="email"
        required
        pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'
      />
      <input
        type="tel"
        placeholder="Phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        autoComplete="tel"
        required
      />
      {
        showRFC && (
          <input
            type="text"
            placeholder="RFC"
            value={rfc}
            onChange={(e) => setRFC(e.target.value)}
          />
        )
      }
      <textarea
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      {/* <label>
        <input type="checkbox" />
        I agree to the terms and conditions
      </label> */}
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
