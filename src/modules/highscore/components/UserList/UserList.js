import React, { Component } from 'react';

import UserListItem from '../UserListItem/UserListItem';

export default class UserList extends Component {
    render() {
        return (
        <> 
            <table>
            <thead>
                <tr>
                <th>#</th>
                <th>Name</th>
                <th>Time</th>
                </tr>
            </thead>
            <tbody>
            {this.props.list.map((item) => (
                    <UserListItem
                        key={item.id}
                        item={item}
                    />
                ))}
            </tbody>
            </table>
        </>

        );
    }
}
