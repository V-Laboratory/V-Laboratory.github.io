import React, { useState, useEffect, useRef } from 'react';
import { HashRouter as Router, Route, Routes, Link, Navigate, useLocation } from 'react-router-dom';
import TeamPage from './TeamPage';
import PublicationPage from './PublicationPage';
import GalleryPage from './GalleryPage';
import ContactPage from './ContactPage';
import Carousel from './Carousel';
import './App.css';


const ScrollToTopOnRouteChange = () => {
  const location = useLocation();
  const prevPathRef = useRef(location.pathname);

  useEffect(() => {
    if (prevPathRef.current !== location.pathname) {
      window.scrollTo({ top: 0, behavior: 'instant' });
      prevPathRef.current = location.pathname;
    }
  }, [location.pathname]);

  return null;
};


const App = () => {
    const [currentIndex, setCurrentIndex] = useState(1); // Start at the first image in the extended array
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);

    const [isSmallScreen, setIsSmallScreen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth <= 768);
        };

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
    };
    const images = [
        { src: process.env.PUBLIC_URL + '/gallery/2025_jeju_2.jpg', alt: 'pair01' },
        { src: process.env.PUBLIC_URL + '/gallery/2025_jeju_1.jpg', alt: 'pair01' },
        { src: process.env.PUBLIC_URL + '/home/main_img_1.jpg', alt: 'pair01' },
        { src: process.env.PUBLIC_URL + '/home/main_img_2.jpg', alt: 'pair02' },
    ];


    const extendedImages = [images[images.length - 1], ...images, images[0]]; // Add last and first image for smooth looping

    const newsItems = [
        { text: "[2025.06] Prof. Eunbyung Park will give an invited talk at an RSS 2025 Workshop ", linkText: "Gaussian Representations for Robot Autonomy: Challenges and Opportunities", url: "https://sites.google.com/view/gmm-workshop-rss25/home" },
        { text: "[2025.04] Prof. Eunbyung Park gave an invited talk at ", linkText: "POSTECH CSE/GSAI Seminar", url: "https://ai.postech.ac.kr/seminar_info/view/id/678#u" },
        { text: "[2025.04] Prof. Eunbyung Park will serve as an area chair for NeurIPS 2025"},
        { text: "[2025.04]", linkText: "Generative Densification", url: "https://stnamjef.github.io/GenerativeDensification/", extraText: " was selected as a CVPR 2025 highlight!"},
        { text: "[2025.04] Prof. Eunbyung Park gave an invited talk at ", linkText: "AI Seminar Series at Dongguk University, 2025", url:"https://cs.dongguk.edu/article/noti/detail/1068"},
        { text: "[2025.03] Prof. Eunbyung Park gave an invited talk at ", linkText: "Colloquium on Immersive Media Engineering at SKKU, 2025", url:"https://meta.skku.edu/meta/seminar.do?mode=view&articleNo=189009"},
        { text: "[2025.02] Three papers accepted to CVPR 2025!"},
        { text: "[2025.01] Prof. Eunbyung Park gave an invited talk at", linkText: "Joint JPEG/MPEG Workshop", url: "https://jpeg.org" },
        { text: "[2024.12] Two papers got accepted to ICLR 2025!" },
        { text: "[2024.12] Three papers got accepted to AAAI 2025!"},
        { text: "[2024.11] ", linkText: "DiffuseHigh", url: "https://arxiv.org/abs/2406.18459", extraText: " received the best paper award at JKAIA 2024!"},
        { text: "[2024.10] Prof. Eunbyung Park gave an invited talk at SKKU AI Colloqium ", linkText: "2024 Recorded talk (Korean)", url: "https://www.youtube.com/watch?v=ooPSDSNikz4" },
        { text: "[2024.09]", linkText: "PEFT Video Compression", url: "https://arxiv.org/abs/2405.08530", extraText: " work was selected as an oral presentation in ACCV 2024!"},
        { text: "[2024.09]", linkText: "Freq-Mip-AA", url: "https://arxiv.org/abs/2406.13251", extraText: " is considered as a best paper candidate in ICIP 2024!"},
        { text: "[2024.07] Two papers accepted to ECCV 2024!"},
        { text: "[2024.05] Our lab received the outstanding young scientist grant from National Research Foundation!"},
        { text: "[2024.05] Our lab (with Prof ", linkText: "Inki Kim", url: "https://www.bionanophotonics-skku.com/pi", extraText: ") won the grant from Samsung Science & Technology Foundation!"},
        { text: "[2024.04] Two CVPR 2024 papers selected as highlight!"},
        { text: "[2024.02] Two papers accepted to CVPR 2024!"},
        { text: "[2024.01]", linkText: "CAM", url: "https://maincold2.github.io/cam/", extraText: " was accepted to ICLR 2024 as a spotlight!"},
        { text: "[2023.11] Prof. Eunbyung Park gave an invited talk at GIST Colloquium"},
        { text: "[2023.09]", linkText: "SPINN", url: "https://jwcho5576.github.io/spinn.github.io/", extraText: " was accepted to NeurIPS 2023 as a spotlight!"},
        { text: "[2023.09] Two papers accepted to NeurIPS 2023!"},
        { text: "[2023.05] Prof. Eunbyung Park gave an invited talk at UNIST AI graduate seminar"},
        { text: "[2023.02] Two papers accepted to CVPR 2023!"},
        { text: "[2023.02] Prof. Eunbyung Park gave an invited talk about SPINN at ", linkText: "CRUNCH Seminars at Brown University", url: "https://sites.brown.edu/crunch-group/"},
        { text: "[2022.11] Prof. Eunbyung Park gave an invited talk at ", linkText: "2022 KSIAM Annual Meeting", url: "https://ksiam.org/Conference/ConferenceView.asp?AC=0&CODE=CC20220801&B_CATE=BBC1"},
        { text: "[2022.11]", linkText: "PIXEL", url: "https://namgyukang.github.io/PIXEL/", extraText: " was accepted to AAAI 2023"},
        { text: "[2022.09] NRFF was accepted to ACCV 2022"},
        { text: "[2022.08] PIXEL was selected as a spotlight in", linkText: "DLDE-II (NeurIPS 2022 Workshop)", url: "https://dlde-2022.github.io/"},
        { text: "[2022.08] SPINN received the best paper award in ", linkText: "CKAIA 2022", url: "http://aiassociation.kr/Conference/ConferenceView.asp?AC=0&CODE=CC20220601&B_CATE=BBC1"},
        { text: "[2022.07] Streamable Neural Fields was accepted to ECCV 2022"},
        { text: "[2022.05] Our lab received the ", linkText: "Basic Research Lab (BRL)", url: "https://www.brlskku.com/", extraText: " grant from the NRF"},
        { text: "[2022.03] Prof. Eunbyung Park gave an invited talk at Samsung Research"},
        { text: "[2021.09] Honor to be selected as a ", linkText: "EIRIC rising star", url: "https://www.eiric.or.kr/manpower/rising_view.php?Seq=34"},
        { text: "[2021.06] Lab was founded"},
        { text: "[2021.05] Prof. Eunbyung Park gave an invited talk at ", linkText: "AI Frontiers Summit 2021", url: "http://www.aifrontiers.org/"},
    ];

    const itemsPerPage = 10;
    const totalPages = Math.ceil(newsItems.length / itemsPerPage);

    const handleNext = () => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setCurrentIndex((prevIndex) => prevIndex + 1);
    };

    const handlePrev = () => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setCurrentIndex((prevIndex) => prevIndex - 1);
    };

    useEffect(() => {
        let timeout;
        if (currentIndex === 0) {
            timeout = setTimeout(() => {
                setIsTransitioning(false);
                setCurrentIndex(images.length); // Jump to the last image without animation
            }, 500);
        } else if (currentIndex === images.length + 1) {
            timeout = setTimeout(() => {
                setIsTransitioning(false);
                setCurrentIndex(1); // Jump to the first image without animation
            }, 500);
        } else {
            timeout = setTimeout(() => setIsTransitioning(false), 500);
        }
        return () => clearTimeout(timeout);
    }, [currentIndex]);

    useEffect(() => {
        const interval = setInterval(handleNext, 4000);
        return () => clearInterval(interval);
    }, []);

    const currentNewsItems = newsItems.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    return (
        <Router basename="/">
            <ScrollToTopOnRouteChange />
            <div className="App">
                <nav className="navbar">
                    <div className="title">
                        <img src={process.env.PUBLIC_URL + '/logo.png'} alt="Logo" className="logo" />
                        <Link to="/" className="title-link">
                            {isSmallScreen ? "V-Lab" : "V-Lab @Yonsei University"}
                        </Link>
                    </div>
                    <div className={`menu ${isSmallScreen ? "mobile-menu" : ""}`}>
                        {isSmallScreen ? (
                            <button className="hamburger-icon" onClick={toggleMenu}>
                                <div className={`line ${isMenuOpen ? "open" : ""}`}></div>
                                <div className={`line ${isMenuOpen ? "open" : ""}`}></div>
                                <div className={`line ${isMenuOpen ? "open" : ""}`}></div>
                            </button>
                        ) : null}
                        <div className={`menu-items ${isMenuOpen ? "open" : ""}`}>
                            <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
                            <Link to="/team" onClick={() => setIsMenuOpen(false)}>Team</Link>
                            <Link to="/publication" onClick={() => setIsMenuOpen(false)}>Publication</Link>
                            <Link to="/gallery" onClick={() => setIsMenuOpen(false)}>Gallery</Link>
                            <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>
                        </div>
                    </div>
                </nav>

                <Routes>
                    <Route
                        path="/"
                        element={
                            <>
                                {/* <main className="main">
                                    <div className="carousel">
                                        <div className="carousel-images">
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
                                                        width: '100%',
                                                        height: '100%',
                                                    }}
                                                />
                                            ))}
                                        </div>
                                        <div className="carousel-indicators">
                                            {images.map((_, index) => (
                                                <span
                                                    key={index}
                                                    className={`indicator ${index === currentIndex ? 'active' : ''}`}
                                                    onClick={() => {
                                                        setIsTransitioning(true);
                                                        setTimeout(() => {
                                                            setCurrentIndex(index);
                                                            setIsTransitioning(false);
                                                        }, 500);
                                                    }}
                                                ></span>
                                            ))}
                                        </div>
                                    </div>
                                </main> */}
                                <Carousel images={images} />


                                <section className="news">
                                    <h2>News</h2>
                                    <ul className="news-list">
                                        {currentNewsItems.map((item, index) => (
                                            <li key={index}>
                                                {item.text} <a href={item.url} target="_blank" rel="noopener noreferrer">{item.linkText}</a>
                                                {item.extraText}
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="pagination">
                                        {Array.from({ length: totalPages }, (_, index) => (
                                            <button
                                                key={index}
                                                className={`pagination-button ${
                                                    currentPage === index + 1 ? 'active' : ''
                                                }`}
                                                onClick={() => setCurrentPage(index + 1)}
                                            >
                                                {index + 1}
                                            </button>
                                        ))}
                                    </div>
                                </section>
                            </>
                        }
                    />
                    <Route path="/team" element={<TeamPage />} />
                    <Route path="/publication" element={<PublicationPage />} />
                    <Route path="/gallery" element={<GalleryPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="*" element={<Navigate to="/" />} /> {}
                </Routes>

                <footer className="footer">
                    <p>Yonsei University</p>
                    <p>50 Yonsei-ro Seodaemun-gu, Seoul, 03722, Republic of Korea</p>
                </footer>
            </div>
        </Router>
    );
};

export default App;