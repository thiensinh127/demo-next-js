import 'antd/dist/antd.css';
import { login, logout } from 'feature/userSlice';
import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import { Provider } from 'react-redux';
import { auth, onAuthStateChanged } from 'services/firebase';
import { useAppDispatch } from '../app/hook';
import { store } from '../app/store';
import '../src/assets/scss/styles.scss';

const App = ({ Component, pageProps }: AppProps) => {

  const dispatch = useAppDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (userAuth: any) => {
      if (userAuth) {
        // user is logged in, send the user's details to redux, store the current user in the state
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoURL: userAuth.photoURL,
          })
        );
      } else {
        dispatch(logout());
        auth.signOut();
      }
    });
  }, []);


  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
};

const AppWrapper = (props: any) => {
  return (
    <Provider store={store}>
      <App {...props} />
    </Provider>
  );
};
export default AppWrapper;