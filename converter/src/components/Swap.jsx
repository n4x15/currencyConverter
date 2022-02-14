import React from 'react'


const Swap = (props) => {
  return (
    <button onClick={()=>props.swapCurrency()}>поменять валюты местами</button>
  )
}

export default Swap