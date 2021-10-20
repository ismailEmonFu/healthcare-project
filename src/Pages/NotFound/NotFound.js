import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <img className="w-100 h-100" src="https://c4.wallpaperflare.com/wallpaper/225/137/236/desktop-error-error-404-error-404-wallpaper-preview.jpg" alt="..."></img>
            <Link to="/">
                <button className="btn btn-info">Return to home</button>
            </Link>
        </div>
    );
};

export default NotFound;