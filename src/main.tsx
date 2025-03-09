import i18next from 'i18next';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { I18nextProvider } from 'react-i18next';
import App from './App.tsx';
import global_en from './assets/translations/en/global.json';
import global_es from './assets/translations/es/global.json';
import './index.css';

i18next.init({
  interpolation: { escapeValue: false },
  resources: {
    en: {
      global: global_en,
    },
    es: {
      global: global_es,
    },
  },
  lng: localStorage.getItem('language') || 'es',
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </React.StrictMode>,
);
