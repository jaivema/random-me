import React from 'react'
import LoadSpinner from './LoadSpinner';
import './styles/Loader.css';

interface LoaderProps {
    isLoading: boolean
}
const Loader = ({ isLoading }: LoaderProps) => {
    return (
        isLoading &&
        <div className="loader">
            <p className='loading-text'>Loading...</p>
            <LoadSpinner size={56} />
        </div>
    )
}
export default Loader;