import React from 'react'


const GameListItem = ({name,image,description}) => {
    return (
        <div className='flex w-full max-w-full  sm:pb-3 sm:pt-3 sm:pl-10 mb-10 mt-10 '>
            <div className='pe-8 left-0 w-3/4'>
                <img className='left-0 h-80 w-auto sm:pt-12'  src={image} alt='IMAGE' />
            </div>
            <div className=' h-96 w-80 right-0 '>
                <div className="flex flex-row items-center justify-center h-12 relative sm:pb-4 font-bold text-2xl">
                    <h1 key={name} className=" text-white "> {name}</h1>
                </div >
                <div className=" flex flex-row items-center justify-center h-12 relative ">
                    <p className="  text-white">{description}</p>
                </div>
            </div>
        </div>
    )
}
export default GameListItem
