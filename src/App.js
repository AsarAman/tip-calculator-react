import React from "react";
import { useGlobalContext } from "./context";

function App() {
  const {setBillAmount,setTipPercent,setpeople,handleSubmit,
    numBill,numPeople,numTip,totalBill,tipAmount,alert,reset} = useGlobalContext();
    
  

  return (
    <main>
      <h1>Bill Splitter</h1>
      
      <form className="form" onSubmit={handleSubmit}>
        {alert.show && <p>{alert.msg}</p>}
        <label htmlFor="Enter Bill Amount">Enter No of People :</label>
        <input type='number' value={numBill} onChange={(e)=> setBillAmount(e.target.value)} placeholder="enter bill amount">
        </input>
        <label>Enter Tip Percentage:</label>
        <input type='number' value={numTip} onChange={(e)=> setTipPercent(e.target.value)} placeholder="enter tip %">
        </input>
        <label>Enter No of People:</label>
        <input type='number' value={numPeople} onChange={(e)=> setpeople(e.target.value)} placeholder="enter no of people">
        </input>
        <button type="submit"> Submit</button>
          <button type="button" className="reset" onClick={reset}>Reset</button>
      </form>
     
      <p>Total Bill / Person: {totalBill}</p>
      <p>Tip Amount / Person: {tipAmount}</p>
     
    </main>

    
    
  )
}

export default App;
