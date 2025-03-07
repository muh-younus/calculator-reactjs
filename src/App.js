import logo from './logo.svg';
import './component/App.css';
import { useState } from "react";

function App() {

  const [value, setvalue] =useState('');
  return(

    <>

    <div className="container">

      <div className="calculator">

        <div className="display">
          <input type="text" value={value} />
        </div>

        <div className="line">
          <input type="button" value="AC" onClick={e => setvalue("") }/>
          <input type="button" value="DE" onClick={e => setvalue(value.slice(0,-1)) }/>
          <input type="button" value="." onClick={e => setvalue(e.target.value + value ) }/>
          <input type="button" value="/" onClick={e => setvalue(e.target.value + value) }/>
        </div>
        <div className="line">
          <input type="button" value="7" onClick={e => setvalue(e.target.value + value) }/>
          <input type="button" value="8" onClick={e => setvalue(e.target.value + value) }/>
          <input type="button" value="9" onClick={e => setvalue(e.target.value + value) }/>
          <input type="button" value="+" onClick={e => setvalue(e.target.value +value ) }/>
        </div>
        <div className="line">
          <input type="button" value="4" onClick={e => setvalue(e.target.value + value) }/>
          <input type="button" value="5" onClick={e => setvalue(e.target.value + value) }/>
          <input type="button" value="6" onClick={e => setvalue(e.target.value + value) }/>
          <input type="button" value="*" onClick={e => setvalue(e.target.value ) }/>
        </div>
        <div className="line">
          <input type="button" value="1" onClick={e => setvalue(e.target.value + value) }/>
          <input type="button" value="2" onClick={e => setvalue(e.target.value + value) }/>
          <input type="button" value="3" onClick={e => setvalue(e.target.value + value) }/>
          <input type="button" value="-" onClick={e => setvalue(e.target.value ) }/>
        </div>
        <div className="line">
          <input type="button" value="00" onClick={e => setvalue(e.target.value + value) }/>
          <input type="button" value="0" onClick={e => setvalue(e.target.value ) }/>
          <input type="button" value="=" className="equal"/>
          
        </div>


      </div>

    </div>
    
    </>


  );
}

export default App;
