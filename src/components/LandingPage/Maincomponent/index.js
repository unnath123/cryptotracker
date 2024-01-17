import React from 'react'
import style from './style.css'
import Button from '../../common/Button'
import iphone from '../../../assets/iphone.png'
import gradientbg from '../../../assets/gradientbg.png'
import {motion} from 'framer-motion'


const Maincomponent = () => {
  return (
    <div className='flex-info'>
        <div className='left-component'>
            <h1 className='crypto-tracker-heading'>Track Crypto</h1>
            <h1 className='real-time-heading'>Real Time</h1>
            <p className='text-info'>
                track crypto through api track crypto through api track crypto 
            </p>
            <div className='flex-btns'>
                <Button text="Dashboard"/>
                <Button text="share" outlined={true}/>
            </div>
        </div>
        <div className='phone-container'>
            <motion.img 
            className='iphone'
            src={iphone}
            initial={{y:-20}}
            animate={{y:20}}
            transition={{
                type:"smooth",
                repeatType: "mirror",
                duration: 2,
                repeat: Infinity,
            }} />
            <img className='gradientbg' src={gradientbg}/>
        </div>
    </div>
  )
}

export default Maincomponent