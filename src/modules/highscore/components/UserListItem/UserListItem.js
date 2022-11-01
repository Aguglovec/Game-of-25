import './UserListItem.css';

import React, { Component } from 'react';
import { timeMsToMin } from '../../../utils/utils';



export default class UserListItem extends Component {
    render() {
        return (

            <tr className='list-item '>
                <td className="position">{this.props.item.position}</td>
                <td className="userName">{this.props.item.userName}</td>
                <td className="time">{timeMsToMin(this.props.item.time)}</td>
            </tr>

        );
    }

}
