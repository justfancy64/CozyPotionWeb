import React from 'react'
import BGPotions from '../assets/PotionBG.png'

const SideBar = () => {
    return (
        <div className='fixed top-0 left-0 w-1/4 h-full bg-purple-900 bg-repeat-y'>
            <img className=" top-0 left-0 w-full max-w-full min-h-full bg-repeat" src={BGPotions} alt="" />
        </div>
    )
}
export default SideBar
