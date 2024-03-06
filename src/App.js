
import './App.css';
import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Navigation from './Navigation'
function App() {

  const [isauthenticated, setisauthenticated] = useState(false);

  return (
    <div>
      <Header></Header>
      <Navigation></Navigation>
      <Footer></Footer>
    </div>
  )
}

export default App;
