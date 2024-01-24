import React from 'react'
import { useState } from 'react'
import './style.css'

const CoinInfo = ({heading, description}) => {
    const Shortdesc = description.slice(0,300) + "<span style='color:var(--grey)'> Read more...</span>"
    const longdesc = description+"<span style='color:var(--grey)'> Read less...</span>";
    const [flag, setFlag] = useState(true)
  return (
    <div className='grey-wrapper-one'>
        <h2 className='coin-heading'>{heading}</h2>
        {
            description.length > 300 ?        
            <p onClick={()=>setFlag(!flag)} className='coin-description' dangerouslySetInnerHTML={{ __html: flag? Shortdesc : longdesc }} ></p>  
            : <p className='coin-description' dangerouslySetInnerHTML={{ __html: description}} ></p>  
        }
    </div>
  )
}

export default CoinInfo