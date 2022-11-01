import React from 'react'
import { useSelector } from 'react-redux';
import {listSelector} from '../../../../store/selectors/selectors';
import TileItem from '../TileItem/TileItem'
import "./Board.css"

function Board() {
    const list = useSelector(listSelector);

    return (
        <div className="board" >
            {(list.map((item) => <TileItem key={item.id} tile={item} />))}
        </div>
        )
}

export default Board