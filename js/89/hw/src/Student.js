import React from 'react'
import Address from './Address';

export default function Student(props) {
  return (
    <>
      <h3>{props.student.name}</h3>
      <Address address={props.student.address} />
    </>
  );
}
