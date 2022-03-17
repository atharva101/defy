import logo from './logo.svg';
import './App.css';

import CryptoCoin from './Components/CryptoCoin.component';
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div class="container">
        <div class="item" id="item-1">
          <div className='item-item1'>
            <h2>Hi John,</h2>
            <br></br>
            <h3>Complete your KYC</h3>
            <p>and experience the world class <br></br> bitcoin app defi</p>
            <br></br>
            <p> START KYC</p>
              <CryptoCoin/>
            </div>
        </div>
        <div className="item" id="item-2">
            <h2>Ideal for new Investors</h2>
            <CryptoCoin/>
        </div>
        <div className="item" id=" item-3">item 3</div>
        <div className="item" id=" item-3">item 4</div>
      </div>
      </header>
    </div>
  );
}

export default App;
