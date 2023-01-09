import React, { useState } from 'react';
import styles from '../styles/chat.module.css';
import GoogleIcon from '@mui/icons-material/Google';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import CircularProgress from '@mui/material/CircularProgress';
import { auth } from '../utils/firebase';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const Login = () => {
  const [loading, setLoading] = useState(false);

  const HandleLogin = () => {
    setLoading(true);
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        console.log(user?.displayName, user?.email);
        setLoading(false);
      })
      .catch((error) => {
        alert(error.message);
        setLoading(false);
      });
  };

  return (
    <div className={styles.login_container}>
      <div className={styles.inner_login_container}>
        <h2>Sign In with Chit-Chat</h2>
        <div className={styles.login_container_main}>
          <div className={styles.input_container_login}>
            <div className={styles.login_mobile_input}>
              <PhoneInput country={'pk'} countryCodeEditable={false} />
            </div>
          </div>
        </div>
        <div className={styles.login_button}>
          <button>Verify</button>
        </div>
        <p className={styles.or_line}>OR</p>
        <button
          className={styles.google_login}
          onClick={HandleLogin}
          disabled={loading}
        >
          {loading ? (
            <CircularProgress />
          ) : (
            <>
              {' '}
              <GoogleIcon /> Continue with Google{' '}
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default Login;
