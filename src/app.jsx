import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import { Provider } from 'react-redux';
import store from './redux/store.js'
import Home from './Home.jsx'


const app = () => {
   const root = ReactDOM.createRoot(document.getElementById('root'));
   root.render(
      <Provider store={store}>
         <BrowserRouter>
            <Home />
         </BrowserRouter>
      </Provider>
  );
 }


 export default app