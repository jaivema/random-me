import { Building2, Flag } from "lucide-react";
import { User } from "../types/user";
import "./styles/UserCard.css"

interface UserCardProps {
    user: User
    onClick: () => void
}

const UserCard = ({ user, onClick }: UserCardProps) => {
    return (
        <article className="user-card" onClick={onClick}>
            <div>
                <h3>{user.name.title} {user.name.first} {user.name.last}</h3>
                <img src={user.picture.medium} alt={`${user.name.first} ${user.name.last}`} />
            </div>
            <div className="user-card-body">
                <ul className="user-card-list">
                    <li className="user-card-item">
                        <dl>
                            <dt><Flag size={18} strokeWidth={1} /></dt>
                            <dd>{user.location.country} ({user.nat})</dd>
                        </dl>
                    </li>
                    <li className="user-card-item">
                        <dl>
                            <dt><Building2 size={18} strokeWidth={1} /></dt>
                            <dd>{user.location.city} - {user.location.state}</dd>
                        </dl>
                    </li>
                </ul>
            </div>

        </article>
    )
}
export default UserCard;