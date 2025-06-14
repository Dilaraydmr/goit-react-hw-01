import React from 'react'
import FriendListCss from './FriendList.module.css'
import FriendListItem from '../FriendListItem/FriendListItem'

const FriendList = ({ friends }) => {
    return (
        <ul className={FriendListCss.friendAmigos}>
            {friends.map((friend) => {
                return (
                    <FriendListItem
                        key={friend.id}
                        avatar={friend.avatar}
                        name={friend.name}
                        isOnline={friend.isOnline}
                    />




                )
            }
            )}
        </ul>


    )
}

export default FriendList
