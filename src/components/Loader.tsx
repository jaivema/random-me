import React from 'react'
import { LoaderCircle } from "lucide-react";
import '../styles/Loader.css';

const Loader = () => {
    return (
        <article className="loader">
            <p className='loading-text'>Loading...</p>
            <div className="loader-circle">
            <LoaderCircle size={56} color={"green"} strokeWidth={3} className="animate-spin" />
        </div>
        </article>
    )
}
export default Loader;