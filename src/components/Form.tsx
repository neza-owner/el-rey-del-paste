import { useRef, useState } from 'react';
import styles from '../styles/form.module.css';

interface FormProps {
  showRFC?: boolean;
}

const Form = ({ showRFC = false }: FormProps) => {
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const formRef = useRef<HTMLFormElement>(null);

  /* const capitalizeInput = (input: HTMLInputElement) => {
    input.value = input.value.replace(/\b\w/g, char => char.toUpperCase());
  }; */

  return (
    <form
      action="https://formsubmit.co/neza505050@gmail.com"
      method="POST"
      className={styles.form}
      ref={formRef}
      onChange={() => setIsButtonDisabled(!formRef.current?.checkValidity())}
    >
      {/* <header> */}
      {/* <h3>Formulario de facturación</h3> */}
      <span className={styles.requiredFields}>Todos los campos son obligatorios *</span>
      {/*  </header> */}
      <fieldset>
        <label htmlFor="fullName">Full Name</label>
        <input
          type="text"
          id='fullName'
          name="fullName"
          placeholder="Ej. Juan Pérez"
          title='Enter your full name'
          onInput={(e) => {
            const input = e.target as HTMLInputElement;
            input.value = input.value.replace(/[^A-Za-zÀ-ÿ\s]/g, '');
            /* capitalizeInput(input); */
          }}
          pattern="^[A-Z][a-z]+(\s[A-Z][a-z]+)?$"
          /* onInvalid={e => (e.target as HTMLInputElement).setCustomValidity('Por favor, ingrese aquí el o los nombres suyos que sean válidos.')} */
          minLength={3}
          maxLength={32}
          autoComplete="name"
          autoCapitalize='words'
          autoFocus
          required
        />
        <span className={styles.inputError}>Solo letras (no números) y estar separados por un espacio en blanco</span>
      </fieldset>

      <fieldset>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id='email'
          name="email"
          placeholder="Ej. youremail@domainexample.com"
          title='Enter your email address'
          pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
          /* onInvalid={e => (e.target as HTMLInputElement).setCustomValidity('Por favor, ingrese aquí un correo electrónico válido.')} */
          autoComplete="email"
          required
        />
        <span className={styles.inputError}>El correo debe contener arroba y terminar en un dominio</span>
      </fieldset>

      <fieldset>
        <label htmlFor="phone">Phone</label>
        <input
          type="tel"
          id='phone'
          name="phone"
          placeholder="Ej. 5555555555"
          title='Enter your phone number'
          pattern="^\+?[0-9]{10,}$"
          /* onInvalid={e => (e.target as HTMLInputElement).setCustomValidity('Por favor, ingrese aquí un número de teléfono válido.')} */
          maxLength={10}
          autoComplete="tel"
          required
        />
        <span className={styles.inputError}>El número debe contener 10 dígitos</span>
      </fieldset>
      {showRFC && (
        <>
          <fieldset>
            <label htmlFor="rfc">RFC</label>
            <input
              type="text"
              id='rfc'
              name="rfc"
              placeholder="Ej. GOPA850912KL3"
              title='Enter your RFC'
              pattern="^[A-Z]{4}[0-9]{6}[A-Z0-9]{3}$"
              /* onInvalid={e => (e.target as HTMLInputElement).setCustomValidity('Por favor, ingrese aquí un RFC válido.')} */
              minLength={13}
              maxLength={13}
              autoCapitalize='characters'
              required
            />
          </fieldset>
        </>
      )}

      <fieldset>
        <label htmlFor="message">Mensaje</label>
        <textarea
          id='message'
          name="message"
          placeholder="Message"
          title='Enter your message'
          defaultValue={'Quiero más información sobre...'}
          contentEditable
          minLength={10}
          maxLength={256}
          required
          autoCapitalize='sentences'
        />
        <span className={styles.inputError}>El mensaje debe contener al menos 10 caracteres</span>
      </fieldset>

      {/* Opcional: evitar el correo de confirmación y redirigir a una página personalizada */}
      <input type="hidden" name="_captcha" value="false" />
      {/* <input type="hidden" name="_next" value="https://tusitio.com/gracias" /> */}

      <button type="submit" disabled={isButtonDisabled}>Submit</button>
    </form>
  );
};

export default Form;
