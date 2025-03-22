import styles from '../styles/form.module.css';

interface FormProps {
  showRFC?: boolean;
}

const Form = ({ showRFC = true }: FormProps) => {
  return (
    <form
      action="https://formsubmit.co/neza505050@gmail.com"
      method="POST"
      className={styles.form}
    >
      <input
        type="text"
        name="name"
        placeholder="Full Name"
        required
        maxLength={32}
        autoComplete="name"
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        required
        autoComplete="email"
        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
      />
      <input
        type="tel"
        name="phone"
        placeholder="Phone"
        required
        autoComplete="tel"
      />
      {showRFC && (
        <input
          type="text"
          name="rfc"
          placeholder="RFC"
        />
      )}
      <textarea
        name="message"
        placeholder="Message"
      />
      
      {/* Opcional: evitar el correo de confirmación y redirigir a una página personalizada */}
      <input type="hidden" name="_captcha" value="false" />
      {/* <input type="hidden" name="_next" value="https://tusitio.com/gracias" /> */}

      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
