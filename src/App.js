import './App.css';
import Activities from './Components/Activities/Activities';
import Header from './Components/Header/Header';
import {ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Blog from './Components/Blog/Blog';
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
