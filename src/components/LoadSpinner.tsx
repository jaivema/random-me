import { LoaderCircle } from "lucide-react";
import "./styles/Loader.css";

interface LoadSpinnerProps {
    size?: number;
    color?: string;
}

const LoadSpinner = ({ size=40, color="green" }: LoadSpinnerProps) => {
    return (
        <div className="loader-circle">
            <LoaderCircle size={size} color={color} strokeWidth={3} className="animate-spin" />
        </div>
    );
};
export default LoadSpinner