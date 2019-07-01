import React, { Component,Suspense } from 'react';
import store from './component/store/store'
import {Provider} from 'react-redux'
let Home=React.lazy(()=>import('./component/Home.js'))
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Suspense fallback={<div>Loading...</div>}>
          <Home/>
        </Suspense>
      </Provider>
    );
  }
}



export default App;
