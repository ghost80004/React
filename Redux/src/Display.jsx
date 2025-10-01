import React from 'react'
import { useSelector  } from "react-redux";



const Display = () => {
    let output = useSelector(mystore => mystore)
  return (
    <div>
        {output}
    </div>
  )
}

export default Display
