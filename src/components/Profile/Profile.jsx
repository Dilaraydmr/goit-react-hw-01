import ProfileCss from './Profile.module.css';

const Profile = ({ name, tag, location, image, stats: { followers, views, likes } }) => {
    return (
        <div className={ProfileCss.profile}>
            <div className={ProfileCss.description}>
                <img
                    src={image}
                    alt={name}
                    className={ProfileCss.avatar}
                />
                <p className={ProfileCss.Profile__name}>{name}</p>
                <p className={ProfileCss.Profile__tag}>@{tag}</p>
                <p className={ProfileCss.Profile__location}>{location}</p>
            </div>

            <ul className={ProfileCss.Profile__stats}>
                <li className={ProfileCss.Profile__item}>
                    <span>Followers</span>
                    <span className={ProfileCss.Profile__itemli}>{followers}</span>
                </li>
                <li className={ProfileCss.Profile__item}>
                    <span>Views</span>
                    <span className={ProfileCss.Profile__itemli}>{views}</span>
                </li>
                <li className={ProfileCss.Profile__item}>
                    <span>Likes</span>
                    <span className={ProfileCss.Profile__itemli}>{likes}</span>
                </li>
            </ul>
        </div>
    )
}
export default Profile;
