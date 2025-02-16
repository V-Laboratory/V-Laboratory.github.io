import React, { useState } from 'react';
import './GalleryPage.css';

const albums = [
    {
        year: 2024,
        title: 'ACCV 2024 Oral Presentation',
        description: '2024.12.10.',
        images: [
            { src: process.env.PUBLIC_URL + '/gallery/2024_accv_1.jpeg', alt: 'Album 1 - Image 1' },
            { src: process.env.PUBLIC_URL + '/gallery/2024_accv_2.jpeg', alt: 'Album 1 - Image 1' },
            { src: process.env.PUBLIC_URL + '/gallery/2024_accv_3.jpeg', alt: 'Album 1 - Image 1' },
            { src: process.env.PUBLIC_URL + '/gallery/2024_accv_4.jpeg', alt: 'Album 1 - Image 1' },
        ],
    },    
    {
        year: 2024,
        title: 'JKAIA 2024',
        description: '2024.11.22.',
        images: [
            { src: process.env.PUBLIC_URL + '/gallery/2024_jkaia_1.jpeg', alt: 'Album 1 - Image 1' },
            { src: process.env.PUBLIC_URL + '/gallery/2024_jkaia_2.jpeg', alt: 'Album 1 - Image 1' },
            { src: process.env.PUBLIC_URL + '/gallery/2024_jkaia_3.jpeg', alt: 'Album 1 - Image 1' },
        ],
    },
    {
        year: 2024,
        title: 'CVPR 2025 Deadline Celebration',
        description: '4:05pm KST, 2024.11.15.',
        images: [
            { src: process.env.PUBLIC_URL + '/gallery/2024_cvpr_deadline.jpg', alt: 'Album 1 - Image 1' },
        ],
    },
    {
        year: 2024,
        title: '2024 Summer Graduation Ceremony',
        description: '2024.08.23.',
        images: [
            { src: process.env.PUBLIC_URL + '/gallery/2024_summer_ceremony_1.JPG', alt: 'Album 2 - Image 1' },
            { src: process.env.PUBLIC_URL + '/gallery/2024_summer_ceremony_2.JPG', alt: 'Album 2 - Image 2' },
            { src: process.env.PUBLIC_URL + '/gallery/2024_summer_ceremony_3.JPG', alt: 'Album 2 - Image 3' },
            { src: process.env.PUBLIC_URL + '/gallery/2024_summer_ceremony_4.JPG', alt: 'Album 2 - Image 4' },
            { src: process.env.PUBLIC_URL + '/gallery/2024_summer_ceremony_5.JPG', alt: 'Album 2 - Image 5' },
        ],
    },
    {
        year: 2024,
        title: 'KCCV 2024',
        description: '2024.08.12.',
        images: [
            { src: process.env.PUBLIC_URL + '/gallery/2024_kccv_1.jpeg', alt: 'Album 2 - Image 1' },
            { src: process.env.PUBLIC_URL + '/gallery/2024_kccv_2.jpeg', alt: 'Album 2 - Image 2' },
            { src: process.env.PUBLIC_URL + '/gallery/2024_kccv_3.jpeg', alt: 'Album 2 - Image 3' },
        ],
    },
    {
        year: 2024,
        title: 'BBQ Party',
        description: '2024.03.15.',
        images: [
            { src: process.env.PUBLIC_URL + '/gallery/2024_bbq_party_1.jpg', alt: 'Album 3 - Image 1' },
            { src: process.env.PUBLIC_URL + '/gallery/2024_bbq_party_2.jpeg', alt: 'Album 3 - Image 2' },
            { src: process.env.PUBLIC_URL + '/gallery/2024_bbq_party_3.jpeg', alt: 'Album 3 - Image 3' },
            { src: process.env.PUBLIC_URL + '/gallery/2024_bbq_party_4.jpeg', alt: 'Album 3 - Image 4' },
        ],
    },
    {
        year: 2024,
        title: '2024 Winter Graduation Ceremony',
        description: '2024.02.23.',
        images: [
            { src: process.env.PUBLIC_URL + '/gallery/2024_winter_ceremony.jpg', alt: 'Album 4 - Image 1' },
        ],
    },
    {
        year: 2023,
        title: '2023 Year-end Party',
        description: '2023.11.29.',
        images: [
            { src: process.env.PUBLIC_URL + '/gallery/2023_year_end_party_1.jpg', alt: 'Album 1 - Image 1' },
            { src: process.env.PUBLIC_URL + '/gallery/2023_year_end_party_2.jpeg', alt: 'Album 1 - Image 1' },
        ],
    },
    {
        year: 2023,
        title: '2023 Summer Graduation Ceremony',
        description: '2023.08.25.',
        images: [
            { src: process.env.PUBLIC_URL + '/gallery/2023_summer_ceremony_1.jpg', alt: 'Album 1 - Image 1' },
            { src: process.env.PUBLIC_URL + '/gallery/2023_summer_ceremony_2.jpeg', alt: 'Album 1 - Image 1' },
        ],
    },
];

const GalleryPage = () => {
    const years = [...new Set(albums.map((album) => album.year))].sort((a, b) => b - a);
    const [currentYear, setCurrentYear] = useState(years[0]);
    const [selectedAlbum, setSelectedAlbum] = useState(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const openAlbum = (album) => {
        setSelectedAlbum(album);
        setCurrentImageIndex(0);
    };

    const closeAlbum = () => {
        setSelectedAlbum(null);
    };

    const handleNextImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === selectedAlbum.images.length - 1 ? 0 : prevIndex + 1
        );
    };

    const handlePrevImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? selectedAlbum.images.length - 1 : prevIndex - 1
        );
    };

    const handlePrevYear = () => {
        const currentIndex = years.indexOf(currentYear);
        if (currentIndex < years.length - 1) {
            setCurrentYear(years[currentIndex + 1]);
        }
    };

    const handleNextYear = () => {
        const currentIndex = years.indexOf(currentYear);
        if (currentIndex > 0) {
            setCurrentYear(years[currentIndex - 1]);
        }
    };

    return (
        <div className="gallery-page">
            <div className="year-navigation">
                <img
                    src={process.env.PUBLIC_URL + '/icon/left-arrow.png'}
                    alt="Previous Year"
                    className={`year-nav-icon ${years.indexOf(currentYear) === 0 ? 'disabled' : ''}`}
                    onClick={handlePrevYear}
                />
                <h2>{currentYear}</h2>
                <img
                    src={process.env.PUBLIC_URL + '/icon/right-arrow.png'}
                    alt="Next Year"
                    className={`year-nav-icon ${
                        years.indexOf(currentYear) === years.length - 1 ? 'disabled' : ''
                    }`}
                    onClick={handleNextYear}
                />
            </div>
            <div className="gallery-grid">
                {albums
                    .filter((album) => album.year === currentYear)
                    .map((album, index) => (
                        <div key={index} className="gallery-item" onClick={() => openAlbum(album)}>
                            <div className="album-thumbnail">
                                <img src={album.images[0].src} alt={album.title} />
                            </div>
                            <h3 className="album-title">{album.title}</h3>
                            <h4 className="album-description">{album.description}</h4>
                        </div>
                    ))}
            </div>

            {selectedAlbum && (
                <div className="modal">
                    <div className="modal-content">
                        <button className="close-button" onClick={closeAlbum}>
                            &times;
                        </button>
                        <button className="prev-button" onClick={handlePrevImage}>
                            <img
                                src={process.env.PUBLIC_URL + '/left_button.png'}
                                alt="Previous"
                                className="nav-icon"
                            />
                        </button>
                        <div className="image-container">
                            <img
                                src={selectedAlbum.images[currentImageIndex].src}
                                alt={selectedAlbum.images[currentImageIndex].alt}
                                className="modal-image"
                            />
                        </div>
                        <button className="next-button" onClick={handleNextImage}>
                            <img
                                src={process.env.PUBLIC_URL + '/right_button.png'}
                                alt="Next"
                                className="nav-icon"
                            />
                        </button>
                        <div className="image-caption">
                            <p>
                                {currentImageIndex + 1} / {selectedAlbum.images.length}
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default GalleryPage;
