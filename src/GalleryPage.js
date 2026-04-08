import React, { useState, useEffect } from 'react';
import './GalleryPage.css';

const albums = [
    {
        year: 2026,
        title: 'Spring Group Photo',
        description: '2026.04.01.',
        images: [
            { src: process.env.PUBLIC_URL + '/gallery/2026_spring_1.jpg', alt: '2026_spring_1' },
            { src: process.env.PUBLIC_URL + '/gallery/2026_spring_2.jpg', alt: '2026_spring_2' },
        ],
    },
    {
        year: 2026,
        title: '2026 Winter Graduation Ceremony',
        description: '2026.02.21.',
        images: [
            { src: process.env.PUBLIC_URL + '/gallery/2026_winter_ceremony_1.jpg', alt: '2026_winter_ceremony_1' },
            { src: process.env.PUBLIC_URL + '/gallery/2026_winter_ceremony_2.jpg', alt: '2026_winter_ceremony_2' },            
            { src: process.env.PUBLIC_URL + '/gallery/2026_winter_ceremony_3.jpg', alt: '2026_winter_ceremony_3' },
            { src: process.env.PUBLIC_URL + '/gallery/2026_winter_ceremony_4.jpg', alt: '2026_winter_ceremony_4' },            
            { src: process.env.PUBLIC_URL + '/gallery/2026_winter_ceremony_5.jpg', alt: '2026_winter_ceremony_5' },            
            { src: process.env.PUBLIC_URL + '/gallery/2026_winter_ceremony_6.jpg', alt: '2026_winter_ceremony_6' },      
            { src: process.env.PUBLIC_URL + '/gallery/2026_winter_ceremony_7.jpg', alt: '2026_winter_ceremony_7' },     
            { src: process.env.PUBLIC_URL + '/gallery/2026_winter_ceremony_8.jpg', alt: '2026_winter_ceremony_8' },     
            { src: process.env.PUBLIC_URL + '/gallery/2026_winter_ceremony_9.jpg', alt: '2026_winter_ceremony_9' },           
        ],
    },
    {
        year: 2026,
        title: 'IPIU 2026',
        description: '2026.02.05.',
        images: [
            { src: process.env.PUBLIC_URL + '/gallery/2026_ipiu_1.jpeg', alt: '2026_ipiu_1' },
            { src: process.env.PUBLIC_URL + '/gallery/2026_ipiu_2.jpeg', alt: '2026_ipiu_2' },            
            { src: process.env.PUBLIC_URL + '/gallery/2026_ipiu_3.jpeg', alt: '2026_ipiu_3' },            
        ],
    },
    {
        year: 2025,
        title: '2025 Year-end Party',
        description: '2025.12.12.',
        images: [
            { src: process.env.PUBLIC_URL + '/gallery/2025_year_end_1.jpg', alt: '2025_year_end_1' },
            { src: process.env.PUBLIC_URL + '/gallery/2025_year_end_2.jpg', alt: '2025_year_end_2' },            
        ],
    },
    {
        year: 2025,
        title: 'KIBME 2025 Best Paper Award',
        description: '2025.11.13.',
        images: [
            { src: process.env.PUBLIC_URL + '/gallery/2025_kibme_1.jpg', alt: '2025_kibme_1' },
            { src: process.env.PUBLIC_URL + '/gallery/2025_kibme_2.jpg', alt: '2025_kibme_2' },            
        ],
    },
    {
        year: 2025,
        title: '2025 AI Champion',
        description: '2025.10.31.',
        images: [
            { src: process.env.PUBLIC_URL + '/gallery/2025_ai_champion_1.jpeg', alt: '2025_ai_champion_1' },
            { src: process.env.PUBLIC_URL + '/gallery/2025_ai_champion_2.jpeg', alt: '2025_ai_champion_2' },            
            { src: process.env.PUBLIC_URL + '/gallery/2025_ai_champion_3.jpeg', alt: '2025_ai_champion_3' },            
            { src: process.env.PUBLIC_URL + '/gallery/2025_ai_champion_4.jpeg', alt: '2025_ai_champion_4' },            
        ],
    },
    {
        year: 2025,
        title: '2025 Summer Graduation Ceremony',
        description: '2025.08.25.',
        images: [
            { src: process.env.PUBLIC_URL + '/gallery/2025_summer_ceremony_1.jpg', alt: '2025_summer_ceremony_1' },
            { src: process.env.PUBLIC_URL + '/gallery/2025_summer_ceremony_2.jpg', alt: '2025_summer_ceremony_2' },
            { src: process.env.PUBLIC_URL + '/gallery/2025_summer_ceremony_3.jpg', alt: '2025_summer_ceremony_3' },
            { src: process.env.PUBLIC_URL + '/gallery/2025_summer_ceremony_4.jpg', alt: '2025_summer_ceremony_4' },            
            { src: process.env.PUBLIC_URL + '/gallery/2025_summer_ceremony_5.jpg', alt: '2025_summer_ceremony_4' },            
        ],
    },
    {
        year: 2025,
        title: 'Jeju MT',
        description: '2025.07.02. - 07.04.',
        images: [
            { src: process.env.PUBLIC_URL + '/gallery/2025_jeju_2.jpg', alt: '2025_jeju_1' },
            { src: process.env.PUBLIC_URL + '/gallery/2025_jeju_1.jpg', alt: '2025_jeju_2' },
            { src: process.env.PUBLIC_URL + '/gallery/2025_jeju_3.jpg', alt: '2025_jeju_3' },
            { src: process.env.PUBLIC_URL + '/gallery/2025_jeju_4.jpg', alt: '2025_jeju_4' },            
            { src: process.env.PUBLIC_URL + '/gallery/2025_jeju_6.jpg', alt: '2025_jeju_5' },
            { src: process.env.PUBLIC_URL + '/gallery/2025_jeju_5.jpg', alt: '2025_jeju_6' },
        ],
    },
    {
        year: 2025,
        title: 'CVPR 2025',
        description: '2025.06.15.',
        images: [
            { src: process.env.PUBLIC_URL + '/gallery/2025_cvpr_1.jpeg', alt: '2025_cvpr_1' },
            { src: process.env.PUBLIC_URL + '/gallery/2025_cvpr_9.jpeg', alt: '2025_cvpr_9' },
            { src: process.env.PUBLIC_URL + '/gallery/2025_cvpr_2.jpeg', alt: '2025_cvpr_2' },
            { src: process.env.PUBLIC_URL + '/gallery/2025_cvpr_3.jpeg', alt: '2025_cvpr_3' },
            { src: process.env.PUBLIC_URL + '/gallery/2025_cvpr_4.jpeg', alt: '2025_cvpr_4' },
            { src: process.env.PUBLIC_URL + '/gallery/2025_cvpr_5.jpeg', alt: '2025_cvpr_5' },
            { src: process.env.PUBLIC_URL + '/gallery/2025_cvpr_6.jpeg', alt: '2025_cvpr_6' },
            { src: process.env.PUBLIC_URL + '/gallery/2025_cvpr_7.jpeg', alt: '2025_cvpr_7' },
            { src: process.env.PUBLIC_URL + '/gallery/2025_cvpr_8.jpeg', alt: '2025_cvpr_8' },            
        ],
    },
    {
        year: 2025,
        title: 'Lab Dinner',
        description: '2025.05.30.',
        images: [
            { src: process.env.PUBLIC_URL + '/gallery/2025_party_1.jpeg', alt: '2025_party_1' },
            { src: process.env.PUBLIC_URL + '/gallery/2025_party_2.jpeg', alt: '2025_party_2' },
        ],
    },
    {
        year: 2025,
        title: 'ICLR 2025',
        description: '2025.04.27.',
        images: [
            { src: process.env.PUBLIC_URL + '/gallery/2025_iclr_1.jpeg', alt: '2025_iclr_1' },
            { src: process.env.PUBLIC_URL + '/gallery/2025_iclr_2.jpg', alt: '2025_iclr_2' },
        ],
    },
    {
        year: 2025,
        title: 'V-Lab at Yonsei University',
        description: '2025.03.14.',
        images: [
            { src: process.env.PUBLIC_URL + '/gallery/2025_yonsei_3.jpeg', alt: '2025_yonsei_1' },
            { src: process.env.PUBLIC_URL + '/gallery/2025_yonsei_2.jpeg', alt: '2025_yonsei_2' },
            { src: process.env.PUBLIC_URL + '/gallery/2025_yonsei_4.jpeg', alt: '2025_yonsei_3' },
            { src: process.env.PUBLIC_URL + '/gallery/2025_yonsei_1.jpg', alt: '2025_yonsei_4' },
        ],
    },
    {
        year: 2025,
        title: 'AAAI 2025',
        description: '2025.02.26.',
        images: [
            { src: process.env.PUBLIC_URL + '/gallery/2025_aaai_1.jpg', alt: '2025_aaai_1' },
            { src: process.env.PUBLIC_URL + '/gallery/2025_aaai_7.jpeg', alt: '2025_aaai_2' },
            { src: process.env.PUBLIC_URL + '/gallery/2025_aaai_2.jpg', alt: '2025_aaai_3' },
            { src: process.env.PUBLIC_URL + '/gallery/2025_aaai_6.jpg', alt: '2025_aaai_4' },
            { src: process.env.PUBLIC_URL + '/gallery/2025_aaai_3.jpg', alt: '2025_aaai_5' },
            { src: process.env.PUBLIC_URL + '/gallery/2025_aaai_4.jpg', alt: '2025_aaai_6' },
            { src: process.env.PUBLIC_URL + '/gallery/2025_aaai_5.jpg', alt: '2025_aaai_7' },
        ],
    },
    {
        year: 2025,
        title: '2025 Winter Graduation Ceremony',
        description: '2025.02.15.',
        images: [
            { src: process.env.PUBLIC_URL + '/gallery/2025_winter_ceremony_1.jpeg', alt: '2025_winter_ceremony_1' },
            { src: process.env.PUBLIC_URL + '/gallery/2025_winter_ceremony_2.jpeg', alt: '2025_winter_ceremony_2' },
            { src: process.env.PUBLIC_URL + '/gallery/2025_winter_ceremony_3.jpeg', alt: '2025_winter_ceremony_3' },
            { src: process.env.PUBLIC_URL + '/gallery/2025_winter_ceremony_4.jpeg', alt: '2025_winter_ceremony_4' },
            { src: process.env.PUBLIC_URL + '/gallery/2025_winter_ceremony_5.jpeg', alt: '2025_winter_ceremony_5' },
            { src: process.env.PUBLIC_URL + '/gallery/2025_winter_ceremony_6.jpeg', alt: '2025_winter_ceremony_6' },
        ],
    },
    {
        year: 2024,
        title: 'ACCV 2024 Oral Presentation',
        description: '2024.12.10.',
        images: [
            { src: process.env.PUBLIC_URL + '/gallery/2024_accv_1.jpeg', alt: '2024_accv_1' },
            { src: process.env.PUBLIC_URL + '/gallery/2024_accv_2.jpeg', alt: '2024_accv_2' },
            { src: process.env.PUBLIC_URL + '/gallery/2024_accv_3.jpeg', alt: '2024_accv_3' },
            { src: process.env.PUBLIC_URL + '/gallery/2024_accv_4.jpeg', alt: '2024_accv_4' },
        ],
    },    
    {
        year: 2024,
        title: 'JKAIA 2024 Best Paper Award',
        description: '2024.11.22.',
        images: [
            { src: process.env.PUBLIC_URL + '/gallery/2024_jkaia_1.jpeg', alt: '2024_jkaia_1' },
            { src: process.env.PUBLIC_URL + '/gallery/2024_jkaia_2.jpeg', alt: '2024_jkaia_2' },
            { src: process.env.PUBLIC_URL + '/gallery/2024_jkaia_3.jpeg', alt: '2024_jkaia_3' },
        ],
    },
    {
        year: 2024,
        title: 'CVPR 2025 Deadline Celebration',
        description: '4:05pm KST, 2024.11.15.',
        images: [
            { src: process.env.PUBLIC_URL + '/gallery/2024_cvpr_deadline.jpg', alt: '2024_cvpr_deadline' },
        ],
    },
    {
        year: 2024,
        title: '2024 Summer Graduation Ceremony',
        description: '2024.08.23.',
        images: [
            { src: process.env.PUBLIC_URL + '/gallery/2024_summer_ceremony_1.JPG', alt: '2024_summer_ceremony_1' },
            { src: process.env.PUBLIC_URL + '/gallery/2024_summer_ceremony_2.JPG', alt: '2024_summer_ceremony_2' },
            { src: process.env.PUBLIC_URL + '/gallery/2024_summer_ceremony_3.JPG', alt: '2024_summer_ceremony_3' },
            { src: process.env.PUBLIC_URL + '/gallery/2024_summer_ceremony_4.JPG', alt: '2024_summer_ceremony_4' },
            { src: process.env.PUBLIC_URL + '/gallery/2024_summer_ceremony_5.JPG', alt: '2024_summer_ceremony_5' },
        ],
    },
    {
        year: 2024,
        title: 'KCCV 2024',
        description: '2024.08.12.',
        images: [
            { src: process.env.PUBLIC_URL + '/gallery/2024_kccv_1.jpeg', alt: '2024_kccv_1' },
            { src: process.env.PUBLIC_URL + '/gallery/2024_kccv_2.jpeg', alt: '2024_kccv_2' },
            { src: process.env.PUBLIC_URL + '/gallery/2024_kccv_3.jpeg', alt: '2024_kccv_3' },
        ],
    },
    {
        year: 2024,
        title: 'BBQ Party',
        description: '2024.03.15.',
        images: [
            { src: process.env.PUBLIC_URL + '/gallery/2024_bbq_party_1.jpg', alt: '2024_bbq_party_1' },
            { src: process.env.PUBLIC_URL + '/gallery/2024_bbq_party_2.jpeg', alt: '2024_bbq_party_2' },
            { src: process.env.PUBLIC_URL + '/gallery/2024_bbq_party_3.jpeg', alt: '2024_bbq_party_3' },
            { src: process.env.PUBLIC_URL + '/gallery/2024_bbq_party_4.jpeg', alt: '2024_bbq_party_4' },
        ],
    },
    {
        year: 2024,
        title: '2024 Winter Graduation Ceremony',
        description: '2024.02.23.',
        images: [
            { src: process.env.PUBLIC_URL + '/gallery/2024_winter_ceremony.jpg', alt: '2024_winter_ceremony' },
        ],
    },
    {
        year: 2023,
        title: '2023 Year-end Party',
        description: '2023.11.29.',
        images: [
            { src: process.env.PUBLIC_URL + '/gallery/2023_year_end_party_1.jpg', alt: '2023_year_end_party_1' },
            { src: process.env.PUBLIC_URL + '/gallery/2023_year_end_party_2.jpeg', alt: '2023_year_end_party_2' },
        ],
    },
    {
        year: 2023,
        title: '2023 Summer Graduation Ceremony',
        description: '2023.08.25.',
        images: [
            { src: process.env.PUBLIC_URL + '/gallery/2023_summer_ceremony_1.jpg', alt: '2023_summer_ceremony_1' },
            { src: process.env.PUBLIC_URL + '/gallery/2023_summer_ceremony_2.jpeg', alt: '2023_summer_ceremony_2' },
        ],
    },
];

const PAGE_SIZE = 9;

const GalleryPage = () => {
    const distinctYears = [...new Set(albums.map((album) => album.year))].sort((a, b) => b - a);
    const [yearPage, setYearPage] = useState(0);
    const totalYearPages = Math.ceil(distinctYears.length / 5);
    const visibleYears = distinctYears.slice(yearPage * 5, yearPage * 5 + 5);

    const [currentCategory, setCurrentCategory] = useState("ALL");
    const [selectedAlbum, setSelectedAlbum] = useState(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [albumPage, setAlbumPage] = useState(0);

    useEffect(() => {
        setAlbumPage(0);
    }, [currentCategory]);

    const openAlbum = (album) => {
        setSelectedAlbum(album);
        setCurrentImageIndex(0);
    };

    const closeAlbum = () => setSelectedAlbum(null);

    const handleNextImage = () => {
        setCurrentImageIndex((prev) =>
            prev === selectedAlbum.images.length - 1 ? 0 : prev + 1
        );
    };

    const handlePrevImage = () => {
        setCurrentImageIndex((prev) =>
            prev === 0 ? selectedAlbum.images.length - 1 : prev - 1
        );
    };

    const filteredAlbums =
        currentCategory === "ALL"
            ? albums
            : albums.filter((album) => album.year === currentCategory);

    const totalAlbumPages = currentCategory === "ALL"
        ? Math.ceil(filteredAlbums.length / PAGE_SIZE)
        : 1;

    const currentAlbums = currentCategory === "ALL"
        ? filteredAlbums.slice(albumPage * PAGE_SIZE, albumPage * PAGE_SIZE + PAGE_SIZE)
        : filteredAlbums;

    // Build page number list (show max 5 page buttons)
    const getPageNumbers = () => {
        const pages = [];
        const maxVisible = 5;
        let start = Math.max(0, albumPage - Math.floor(maxVisible / 2));
        let end = start + maxVisible;
        if (end > totalAlbumPages) {
            end = totalAlbumPages;
            start = Math.max(0, end - maxVisible);
        }
        for (let i = start; i < end; i++) pages.push(i);
        return pages;
    };

    return (
        <div className="gallery-page">
            {/* Year filter */}
            <div className="year-navigation">
                <button
                    className={`category-button ${currentCategory === "ALL" ? "active" : ""}`}
                    onClick={() => setCurrentCategory("ALL")}
                >
                    ALL
                </button>
                {yearPage > 0 && (
                    <button className="year-pagination-button" onClick={() => setYearPage(yearPage - 1)}>
                        &#8249;
                    </button>
                )}
                {visibleYears.map((year) => (
                    <button
                        key={year}
                        className={`category-button ${currentCategory === year ? "active" : ""}`}
                        onClick={() => setCurrentCategory(year)}
                    >
                        {year}
                    </button>
                ))}
                {yearPage < totalYearPages - 1 && (
                    <button className="year-pagination-button" onClick={() => setYearPage(yearPage + 1)}>
                        &#8250;
                    </button>
                )}
            </div>

            {/* Album grid */}
            <div className="gallery-grid">
                {currentAlbums.map((album, index) => (
                    <div key={index} className="gallery-item" onClick={() => openAlbum(album)}>
                        <div className="album-thumbnail">
                            <img src={album.images[0].src} alt={album.title} />
                        </div>
                        <h3 className="album-title">{album.title}</h3>
                        <h4 className="album-description">{album.description}</h4>
                    </div>
                ))}
            </div>

            {/* Numbered pagination */}
            {currentCategory === "ALL" && totalAlbumPages > 1 && (
                <div className="album-pagination">
                    <button
                        className="page-arrow"
                        onClick={() => setAlbumPage(albumPage - 1)}
                        disabled={albumPage === 0}
                    >
                        &#8249;
                    </button>
                    {getPageNumbers().map((page) => (
                        <button
                            key={page}
                            className={`page-number ${albumPage === page ? "active" : ""}`}
                            onClick={() => setAlbumPage(page)}
                        >
                            {page + 1}
                        </button>
                    ))}
                    <button
                        className="page-arrow"
                        onClick={() => setAlbumPage(albumPage + 1)}
                        disabled={albumPage === totalAlbumPages - 1}
                    >
                        &#8250;
                    </button>
                </div>
            )}

            {/* Modal */}
            {selectedAlbum && (
                <div className="modal" onClick={closeAlbum}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="close-button" onClick={closeAlbum}>&times;</button>
                        <button className="prev-button" onClick={handlePrevImage}>
                            <img
                                src={process.env.PUBLIC_URL + '/icon/left-arrow.png'}
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
                                src={process.env.PUBLIC_URL + '/icon/right-arrow.png'}
                                alt="Next"
                                className="nav-icon"
                            />
                        </button>
                        <div className="image-caption">
                            <p>{currentImageIndex + 1} / {selectedAlbum.images.length}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default GalleryPage;