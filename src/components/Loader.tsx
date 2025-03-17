import React from 'react'
import { LoaderCircle } from "lucide-react";
import '../styles/Loader.css';

const Loader = () => {
    return (
        <div className="loader">
            <p className='loading-text'>Loading...</p>
            <div className="loader-circle">
                <LoaderCircle size={56} color={"green"} strokeWidth={3} className="animate-spin" />
            </div>
        </div>
    )
}
export default Loader;