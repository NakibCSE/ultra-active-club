import './App.css';
import Activities from './components/Activities/Activities';
import Header from './components/header/Header';
import {ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Blog from './components/Blog/Blog';
function App() {
  return (
    <div>
      <Header></Header>
      <Activities></Activities>
      <Blog></Blog>
      <ToastContainer />
    </div>
  );
}

export default App;
