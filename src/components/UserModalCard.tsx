import { CalendarCheck2Icon, MailOpenIcon, MapPinHouseIcon, PhoneIcon, X } from "lucide-react";
import type { User } from "../types/user";
import "../styles/UserModalCard.css";

interface UserModalProps {
  user: User;
  onClose: () => void;
}

export default function UserModalCard({ user, onClose }: UserModalProps) {
  return (
    <div id="userCardModal">
      <article className="userDetails">
        <div className="userDetailsHeader">
          <h1>{user.name.title} {user.name.first} {user.name.last}</h1>
          <button className="closeButton"
            onClick={onClose}
          >
            <X size={30} />
          </button>
        </div>
        <div className="userDetailsBody">
          <p>
            <img src={user.picture.large} alt={`${user.name.first} ${user.name.last}`} width="200" height="200" />
          </p>
          <dt className="user-info">
            <div className="info-item">
              <dd><MailOpenIcon size={24} strokeWidth={1} className="modal-icon" /></dd>
              <dl>{user.email}</dl>
            </div>
            <div className="info-item">
              <dd><PhoneIcon size={24} strokeWidth={1} className="modal-icon" /></dd>
              <dl>{user.phone}</dl>
            </div>
            <div className="info-item">
              <dd><CalendarCheck2Icon size={24} strokeWidth={1} className="modal-icon" /></dd>
              <dl>{new Date(user.dob.date).toLocaleDateString()}</dl>
            </div>
            <div className="info-item">
              <dd><MapPinHouseIcon size={24} strokeWidth={1} className="modal-icon" /></dd>
              <dl>
                <ul className="address">
                  <li>{user.location.street.number}, {user.location.street.name}, {user.location.postcode}</li>
                  <li>{user.location.city} ({user.location.state}, {user.location.country})</li>
                </ul>
              </dl>
            </div>
          </dt>
        </div>
      </article>
    </div>
  )
}