import { X } from "lucide-react";
import type { User } from "../types/user";
import "../styles/UserModalCard.css";

interface UserModalProps {
  user: User;
  onClose: () => void;
}

export default function UserModalCard({ user, onClose }: UserModalProps) {
  return (
    <div id="userCardModal">
      <div>
        <article className="userDetails">
          <div className="userDetailsHeader">
            <h1>{user.name.title} {user.name.first} {user.name.last}</h1>
            <button className="closeButton"
              onClick={onClose}
            >
              <X size={30} />
            </button>
          </div>
          <img src={user.picture.large} alt={`${user.name.first} ${user.name.last}`} width="300" height="300" />
          <span>{user.nat}</span>
          <div className="userDetailsBody">
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
            <p>Date of Birth: {new Date(user.dob.date).toLocaleDateString()}</p>
            <p>Address:</p>
            <p>{user.location.street.number} {user.location.street.name}</p>
            <p>{user.location.city}, {user.location.state}</p>
            <p>{user.location.country}, {user.location.postcode}</p>
          </div>
        </article>
      </div>
    </div>
  )
}