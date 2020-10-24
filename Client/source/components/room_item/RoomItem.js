import React, { useEffect, useReducer, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as FontAwesomeIcons from '@fortawesome/free-solid-svg-icons';

import { Button, IconButton, InputPassword } from 'components';
import { Socket } from 'logic';

import './RoomItem.scss';

const RoomItemForm = ({roomName, onCancel, onJoin}) => {
    const [password, setPassword] = useState('');
    const [err, setErr] = useState('');

    const socketJoinroom = (data) => {
        if (data.successful) {
            onJoin();
        } else {
            //Here might be other types of errors
            setErr('Invalid password!');
        }
    }

    const onJoinBtn = () => {
        Socket.emit('joinroom', {
            name: roomName,
            password: password
        });
    }

    useEffect(() => {
        Socket.on('joinroom', socketJoinroom);
        return () => Socket.removeEventListener('joinroom', socketJoinroom);
    }, []);

    return (
        <div className="ri-form">
            <InputPassword 
                className="ri-form__password"
                placeholder="Password"
                onChange={e => setPassword(e.target.value)} 
                onKeyDown={e => {
                    if (e.key === 'Enter') onJoinBtn();
                }}
                autoFocus
            />
            <p className="ri-form__error">{err}</p>
            <div 
                className="ri-form__buttons">
                <Button onClick={onCancel}>Cancel</Button>
                <Button disabled={password === ''} onClick={onJoinBtn}>Join</Button>
            </div>
        </div>
    )
}

const RoomItem = ({active, roomData, onRoomJoin, onRoomLeave}) => {
    const { name, haspass } = roomData;
    const [ stage, setStage ] = useState('');

    const onClickHandler = (e) => {
        if (!active) {
            if (haspass) {
                if (stage !== 'joining') {
                    setStage('joining');
                }
            } else {
                onRoomJoin(name, null);
            }
        }
    }

    const onJoin = () => {
        setStage('');
    }

    let form = null;
    if (stage === 'joining') {
        form = (
            <RoomItemForm
                roomName={name}
                onCancel={() => {setStage('')}}
                onJoin={onJoin}
            />
        );
    }

    const roomLeaveButton = active && (
        <IconButton 
            className="room-item__leave-btn"
            color="dark"
            onClick={onRoomLeave}
            title="Leave room"
        >
            <FontAwesomeIcon
                className="room-item__lock-icon" 
                icon={FontAwesomeIcons.faTimesCircle}
            />
        </IconButton>
    )
        
    return (
        <div onClick={onClickHandler} className={classNames("room-item", {"active": active})}>
            <div className="room-item__content">
                {haspass && <FontAwesomeIcon className="room-item__lock-icon" icon={FontAwesomeIcons.faLock}></FontAwesomeIcon>}
                <p className="room-item__name" title={name}>{name}</p>
                {roomLeaveButton}
            </div>
            {form}
        </div>
    )
}

RoomItem.propType = {
    roomData: PropTypes.object.isRequired,
    active: PropTypes.bool.isRequired,
    onRoomJoin: PropTypes.func.isRequired,
    onRoomLeave: PropTypes.func.isRequired,
}

export default RoomItem;
