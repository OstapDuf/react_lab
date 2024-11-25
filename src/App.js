
import { Provider } from 'react-redux';
import './App.css';
import { Routers } from './router.js';
import { store } from './redux/store.js';





function App() {
  return (
      <>
      <Provider store={store}>
      <Routers></Routers>
      </Provider>
      </>
    );
}

export default App;
