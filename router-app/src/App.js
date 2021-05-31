import React, { useState } from 'react';
import { useLocalStorage} from './useLocalStorage'


export default function App() {
  const [name, setName] = useLocalStorage();

  return (
    <div>
      <form>
        <label>Enter the value:😃</label>
        <input type="text" value={name} onChange={ (event)=>setName(event.target.value)}/>
      </form>
    </div>
  )

}

