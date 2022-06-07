import React, {useState} from 'react';
import useLocalStorage from './useLocalStorage';

export default function Form3() {
  //const [state, setState] = useState({ vaccines: 4, iq: 0 });
  const [state, setState] = useLocalStorage('form3State', { vaccines: 4, iq: 0 });
  const { vaccines, iq } = state;

  return (
    <div>
      vaccines: <input type="number" value={vaccines} onChange={e => setState({ ...state, vaccines: e.target.value})} />
      IQ: <input type="number" value={iq} onChange={e => setState({ ...state, iq: e.target.value })} />
    </div>
  )
}
