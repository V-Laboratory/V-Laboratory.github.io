import React, { useState, useEffect } from 'react';

const Carousel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setIsTransitioning(true);
            setTimeout(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
                setIsTransitioning(false);
            }, 500);
        }, 4000);

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <main className="main" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100vw', minHeight: '70vh', justifyContent: 'flex-start', paddingTop: '4vh' }}>
            <div className="carousel" style={{ width: '100%', maxWidth: '1200px', height: '87vh', maxHeight: '900px', overflow: 'hidden', position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div className="carousel-images" style={{ width: '100%', height: '100%', position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    {images.map((image, index) => (
                        <img
                            key={index}
                            src={image.src}
                            alt={image.alt}
                            className="carousel-image"
                            style={{
                                opacity: index === currentIndex ? 1 : 0,
                                transition: 'opacity 0.5s ease-in-out',
                                position: 'absolute',
                                maxWidth: '100%',
                                maxHeight: '100%',
                                width: 'auto',
                                height: 'auto',
                                objectFit: 'contain',
                            }}
                        />
                    ))}
                </div>
            </div>
            <div className="carousel-indicator-container" style={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: '0px' }}>
                <div className="carousel-indicators" style={{ display: 'flex', gap: '8px', padding: '20px' }}>
                    {images.map((_, index) => (
                        <span
                            key={index}
                            className={`indicator ${index === currentIndex ? 'active' : ''}`}
                            onClick={() => {
                                if (index !== currentIndex) {
                                    setIsTransitioning(true);
                                    setTimeout(() => {
                                        setCurrentIndex(index);
                                        setIsTransitioning(false);
                                    }, 500);
                                }
                            }}
                            style={{
                                width: '12px',
                                height: '12px',
                                borderRadius: '50%',
                                backgroundColor: index === currentIndex ? 'black' : 'lightgray',
                                cursor: 'pointer',
                                transition: 'background-color 0.3s ease-in-out'
                            }}
                        ></span>
                    ))}
                </div>
            </div>
            <style>
                {`
                @media (max-width: 768px) {
                    .carousel {
                        height: 30vh !important;
                    }
                    .carousel-images img {
                        max-width: 100% !important;
                        height: auto !important;
                    }
                    .carousel-indicator-container {
                        margin-top: 5px !important;
                    }
                    .carousel-indicators span {
                        width: 10px !important;
                        height: 10px !important;
                    }
                    .main {
                        padding-top: 8vh !important;
                        min-height: 10vh !important;
                    }
                }
                `}
            </style>
        </main>
    );
};

export default Carousel;
