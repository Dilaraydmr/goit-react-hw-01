import FriendListItemCss from './FriendListItem.module.css';
const FriendListItem = ({ avatar, name, isOnline }) => {
    console.log([
        FriendListItemCss.isOnline,
        isOnline ? FriendListItemCss.online : FriendListItemCss.offline,
    ]);
    return (
        <div className={FriendListItemCss.friendList}>
            <img className={FriendListItemCss.friendList__img} src={avatar} alt={name} width="48" />
            <p className={FriendListItemCss.friendList__name}>{name}</p>
            <p className={`${FriendListItemCss.isOnline} ${isOnline ? FriendListItemCss.online : FriendListItemCss.offline}`}>
                {isOnline ? "Online" : "Offline"}
            </p>
        </div>
    );
}
export default FriendListItem;  

















