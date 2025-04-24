import React from 'react'
import GameListItem from './GameListItem.jsx'
import GameData from '../assets/GameData.json'




const GameList = () => {
    return (
        /*
                <div className="h-96 w-svw min-h-fit absolute z-10  flex flex-row justify-center items-center">
                <a href="#"
                   className=" flex flex-row min-w-full justify-center items-center bg-purple-900 rounded-lg shadow-sm md:flex-row md:max-w-xl hover:bg-purple-600 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <img className=" object-cover w-full rounded-t-lg h-96 md:h-auto md:w-90 md:rounded-none md:rounded-s-lg"
                         src={img1} alt=""/>
                    <div className="flex flex-col justify-between p-4 leading-normal">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">RL Game expected release late 2025</h5>
                        <p className="mb-3 font-normal text-white dark:text-gray-400">game description goes here <br></br>picture will be a video trailer</p>

                    </div>
                </a>
                </div>

         */
        <>
        <ul className="z-10 w-fit text-sm font-medium flex-row
         w-fit h-fit sm:pb-3 sm:pt-3 m-4 mb-3
        text-gray-900 bg-opacity-0  rounded-lg dark:bg-gray-700 dark:text-white">
            {GameData.Games.map(game => (

                <li key={game.Name} className=" w-full h-96 bg-purple-900">
                    <>

                        <GameListItem name={game.Name} image={game.Image} description={game.Description} />
                    </>

                </li>
            ))}


        </ul>
        </>

    )
}

export default GameList