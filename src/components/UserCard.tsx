import { User } from "../types/user";

interface UserCardProps {
    user: User
    onClick: () => void
}

const UserCard = ({ user, onClick }: UserCardProps) => {
    return (
        <article className="userCard" onClick={onClick}>
            <h3>{user.name.first} {user.name.last}</h3>
            <img src={user.picture.medium} alt={`${user.name.first} ${user.name.last}`} />
            <p>Country: {user.location.country}</p>
            <p>State: {user.location.state}</p>
            <p>City: {user.location.city}</p>
            <p>Nationality: {user.nat}</p>
        </article>
    )
}
export default UserCard;