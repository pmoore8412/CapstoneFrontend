import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Layout from './pages/Layout';
import './index.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </div>
  );
}

export default App;
