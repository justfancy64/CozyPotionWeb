import React from 'react'
import BGPotions from '../assets/PotionBG.png'
import GameList from '../components/GameList'

const Background = () => {
    return (
        <div className=' absolute bg-purple-700 min-w-full'>
            <img className=" top-0 left-0 w-full max-w-full min-h-full bg-repeat" src={BGPotions} alt="" />
        </div>
    )
}
export default Background
