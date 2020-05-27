import React from 'react';
import './App.css';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

function App(props) {
  const key = (e) => {
    props.filterKey(e.target.value)
  }
  return (
    <div className="App">
      <div className='title'><h1>NII CAPITAL 7.625 21</h1> USD</div>
      <span>US76021BAE92</span>
      <span>  NII CAPITAL CORP, TELECOMMUNICATONS, NR, till 01.04.2016</span>
      <hr/>
      <button onClick={() => props.filterWeek(7)}>Week</button>
      <button onClick={() => props.filterWeek(30)}>Month</button>
      <button onClick={() => props.filterWeek(90)}>Quarter</button>
      <button onClick={() => props.filterWeek(365)}>Year</button>
      <button disabled={true} onClick={() => props.filterWeek(0)}>Max</button>
      <LineChart width={600} height={300} data={props.data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
        <Line type="monotone" dataKey={props.keyValue} stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
      </LineChart>
      <select onChange={(e) => key(e)} >
        <option value="price">price</option>
        <option value="yield">yield</option>
        <option value="spread">spread</option>
      </select>
    </div>
  );
}

export default App;
