import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { AuthProvider } from './context/AuthContext.jsx';

// const clientId = '865238676852-365j0q8ulotvme3plp30eljonif84kru.apps.googleusercontent.com';
const clientId =
  '1011929321998-efbs5ftd11kjufu4e6l4pere45i3ce1c.apps.googleusercontent.com';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <GoogleOAuthProvider clientId='1011929321998-efbs5ftd11kjufu4e6l4pere45i3ce1c.apps.googleusercontent.com'> */}
    <GoogleOAuthProvider clientId={clientId}>
      <AuthProvider>
        <App />
      </AuthProvider>
    </GoogleOAuthProvider>
  </React.StrictMode>
);
