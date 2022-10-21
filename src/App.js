import React, { useState } from 'react'
import DatePicker from './DatePicker';
import SelectEmployee from './SelectEmployee';
function App() {
  

  return (
    <div style={{display:'flex',justifyContent:'space-around'}}>
     <SelectEmployee/>
     <DatePicker/>
    </div>
  );
}

export default App;
