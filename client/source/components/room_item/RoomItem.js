import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './RoomItem.scss';

const RoomItem = ({active, name, onRoomJoin}) => {
    if (active) {
        console.log("Room item = ", name);
    }
    return (
        <div onClick={e => onRoomJoin(name)} className={classNames("room-item", {"active": active})}>
            <div className="room-item__name">{name}</div>
        </div>
    )
}

RoomItem.propType = {
    active: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    onRoomJoin: PropTypes.func.isRequired
}

export default RoomItem;