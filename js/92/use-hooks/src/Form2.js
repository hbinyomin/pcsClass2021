import React from 'react'
import useForm from './useForm';

export default function Form2() {
  const [{ age, grade }, setFormData] = useForm({age: 0, grade: 2});

  return (
    <div>
      age: <input type="number" name="age" value={age} onChange={setFormData}/>
      grade: <input type="number" name="grade" value={grade} onChange={setFormData}/>
    </div>
  )
}
