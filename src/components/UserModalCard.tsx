import { X } from "lucide-react";
import type { User } from "../types/user";

interface UserModalProps {
    user: User;
    onClose: () => void;
}

export default function UserModalCard({ user, onClose }: UserModalProps) {
    return(
        <>
        
        <div>
        <button
          onClick={onClose}
        >
          <X className="w-6 h-6" />
        </button>
        <div>

            <h1>{user.name.first} {user.name.last}</h1>
            <img src={user.picture.large} alt={`${user.name.first} ${user.name.last}`} width="100" height="100" />
        </div>
        </div>
        </>
    )
}