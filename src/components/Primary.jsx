import React from 'react'
import Background from "./Background.jsx";
import GameList from "./GameList.jsx";
import raw from "../assets/GameData.json"

import fs from "node:fs"



const Primary = () => {

    return (



        <div className=" relative flex flex-col items-center">
            <Background />

            <GameList />

        </div>
    )
}
export default Primary
