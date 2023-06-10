import './Banner.css';
import React from 'react';

interface BannerProps {
    sourceImage: string
    altImage?: string
}

const Banner = ({sourceImage, altImage}:BannerProps) => {
    // JSX
    return (
        <header className="banner">
            {/* <img src="/imagens/banner.png" alt="O banner principal da página do Organo"/> */}
            <img src={sourceImage} alt={altImage}/>
        </header>
    )
}

export default Banner;