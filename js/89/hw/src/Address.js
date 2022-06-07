import React from 'react'

export default function Address(props) {
  return (
    <>
      <div>{props.address.street}</div>
      <div>{props.address.city}</div>
      <div>{props.address.state}</div>
      <div>{props.address.zip}</div>
    </>
  )
}
