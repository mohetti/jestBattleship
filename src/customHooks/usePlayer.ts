import React, { useState, useEffect } from 'react';
import Player from '../Gamelogic/PlayerFactory';
import { Fleet } from '../Types/shipTypes';

/*
    *********CUSTOM HOOK************
Basically, this custom hook needs to target Player() much like an API. 
The returns will be translated into a state, that can be used for the visible stuff
I'll implement the state as react state for now and after it works, translate it to redux state

Additionally, need a history object with all coords that were played. Those coords in combination with fleet
are stored as redux state aswell and get a localStorage subscription. Player() can then be invoked with that object
to restore the latest safestate. 

Possible states for custom hook:
    * gameboard [[]]: 0: [0,1,2,3,4,5,6,7,8,9]
        => eg a hit, a miss on 00, 01 would mark 0: [true, false ,2, 3]
        => comes from player.receiveAttack()
        => also can extract if ship was sunk (true)
    * ships left: number, from player.isFleetSunk

    * for history state:
        fleet
        array of hit coords
*/

function usePlayer() {
  const player = Player();

  useEffect(() => {
    console.log(player.getBoard());
  });

  return [player];
}

export default usePlayer;
