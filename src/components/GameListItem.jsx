import React from 'react'
import logo from "../assets/cozylogored.png";


const GameListItem = ({name,image,description}) => {
    return (
        <div className='flex flex-1 max-w-full items-center flex-row justify-center sm:pb-3 sm:pt-3 sm:pl-10 sm:pr-10 bg-purple-900'>
            <div className='pe-8'>
                <img className='h-96 w-auto'  src={image} alt='IMAGE' />
            </div>
            <div>
                <h1 key={name} className="text-sm font-medium text-white"> {name}</h1>
                <p className="text-white">{description}</p>

            </div>
        </div>
    )
}
export default GameListItem
