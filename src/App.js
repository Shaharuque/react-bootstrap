import logo from './logo.svg';
import './App.css';
import CARDGROUP from './components/cardGroup/CARDGROUP';
import Layout from './components/layout/Layout';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <div>
    <Navbar></Navbar>
    {/*using bootstrap directly by copy paste bootstrap CSS file
     <CARDGROUP></CARDGROUP>
    */} 

    {/* using react bootstrap*/}
    <Layout></Layout>
    </div>
  );
}

export default App;
