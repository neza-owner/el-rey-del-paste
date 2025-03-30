import { useRef, useState } from 'react';
import styles from '../styles/form.module.css';

interface FormProps {
  showRFC?: boolean;
  message?: string;
}

const Form = ({ showRFC = false, message }: FormProps) => {
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const formRef = useRef<HTMLFormElement>(null);

  /* allow only letters (with accents) and whitespaces */
  const allowOnlyLetters = (input: HTMLInputElement) => {
    input.value = input.value.replace(/[^A-Za-zÁÉÍÓÚáéíóúÑñ\s]/g, '');
  };

  const allowOnlyNumbers = (input: HTMLInputElement) => {
    input.value = input.value.replace(/[^0-9]/g, '');
  };

  /* auto capitalize first letter of each word */
  const autoCapitalizeWord = (input: HTMLInputElement) => {
    input.value = input.value.replace(/\b\w/g, char => char.toUpperCase());
  };

  /* auto capitalize all letters (uppercase) */
  const autoCapitalizeCharacters = (input: HTMLInputElement) => {
    input.value = input.value.toUpperCase();
  };

  /* auto lowercase all letters (lowercase) */
  const autoLowercaseCharacters = (input: HTMLInputElement) => {
    input.value = input.value.toLowerCase();
  };

  /* auto capitalize first letter of each sentence */
  const autoCapitalizeSentences = (input: HTMLInputElement) => {
    input.value = input.value.replace(/(^\s*\w|[.!?]\s*\w)/g, char => char.toUpperCase());
  };

  const removeWhitespaces = (input: HTMLInputElement) => {
    input.value = input.value.replace(/\s/g, '');
  };

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
            allowOnlyLetters(input);
            autoCapitalizeWord(input);
          }}
          pattern="^[A-Za-zÁÉÍÓÚáéíóúÑñ]+(?: [A-Za-zÁÉÍÓÚáéíóúÑñ]+)*$"
          /* onInvalid={e => (e.target as HTMLInputElement).setCustomValidity('Por favor, ingrese aquí el o los nombres suyos que sean válidos.')} */
          minLength={3}
          maxLength={32}
          autoComplete="name"
          autoCapitalize='words'
          autoFocus
          required
        />
        <span className={styles.inputError}>Solo letras (con acentos) separados por un espacio están permitidos</span>
      </fieldset>

      <fieldset>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id='email'
          name="email"
          placeholder="Ej. youremail@domainexample.com"
          title='Enter your email address'
          onInput={(e) => {
            autoLowercaseCharacters(e.target as HTMLInputElement);
          }}
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
          placeholder="Ej. 8128678562"
          title='Enter your phone number'
          onInput={(e) => {
            allowOnlyNumbers(e.target as HTMLInputElement);
          }}
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
            <label htmlFor="order">No. Orden</label>
            <input
              type="text"
              id='order'
              name="order"
              placeholder="Ej. ABCD123456A1B"
              title='Enter your order number'
              onInput={(e) => {
                const input = e.target as HTMLInputElement;
                autoCapitalizeCharacters(input);
                removeWhitespaces(input);
              }}
              pattern="^[A-Z]{4}[0-9]{6}[A-Z0-9]{3}$"
              minLength={13}
              maxLength={13}
              autoCapitalize='characters'
              required
            />
          </fieldset>
          <fieldset>
            <label htmlFor="rfc">RFC</label>
            <input
              type="text"
              id='rfc'
              name="rfc"
              placeholder="Ej. GOPA850912KL3"
              title='Enter your RFC'
              onInput={(e) => {
                const input = e.target as HTMLInputElement;
                autoCapitalizeCharacters(e.target as HTMLInputElement);
                removeWhitespaces(input);
              }}
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
          onInput={(e) => {
            autoCapitalizeSentences(e.target as HTMLInputElement);
          }}
          defaultValue={message}
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
