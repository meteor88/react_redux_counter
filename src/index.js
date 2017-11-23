import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';

// store 생성 
const store = createStore(reducers);

// Provider 는 store 를 연결시켜주는 역할 수행, 아래와 같이 <App/> 를 감싸주면 연결이 됨 
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
