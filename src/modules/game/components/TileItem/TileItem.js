import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { clickOnTile, resetErrorState } from '../../../../store/actions/game25Actions';
import './TileItem.css'

function TileItem({tile}) {
    const dispatch = useDispatch ();

    function onTileClick () {
        dispatch(clickOnTile(tile));
    }

    useEffect(() => {
        if (tile.error) {
            setTimeout(()=> dispatch(resetErrorState(tile)), 300);
        }
    }, [dispatch, tile])
    

    function tileClasses (tile) {
        if (tile.hidden) {
            return "tile hidden"
        }
        if (tile.error) {
            return "tile wrong"
        }
        if(tile.done) {
            return "tile done"
        }
        return "tile"
    }

    return (
        <div className={tileClasses(tile)} onClick={onTileClick}>{tile.id}</div>
    )
}

export default TileItem