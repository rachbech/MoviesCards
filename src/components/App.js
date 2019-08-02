import React from 'react';
import { Provider } from 'react-redux';
import store from '../store/configureStore.dev';
import Movies from './pages/Movies';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
      <Movies />
      </Provider>
      
    );
  }
}
