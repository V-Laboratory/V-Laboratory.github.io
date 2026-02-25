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
        { content: <>[2026.02] Three papers got accepted to CVPR 2026!</> },
        {
            content: (<>
                [2026.01] Ph.D. Seungtae Nam will join
                {' '}<a href="https://www.microsoft.com/en-us/research/lab/microsoft-research-asia/" target="_blank" rel="noopener noreferrer">Microsoft Research Asia</a>{' '}
                as a research intern this spring!
            </>),
        },

        {
            content: (<>
                [2026.01] UC Irvine and Yonsei AI held an
                {' '}<a href="https://ai-research-exchange-symposium-4ed6d910.base44.app/" target="_blank" rel="noopener noreferrer">AI Research Exchange Symposium</a>!
            </>),
        },

        {
            content: (<>
                [2026.01] Prof. Eunbyung Park gave an invited talk at 
                {' '}<a href="https://research.adobe.com/" target="_blank" rel="noopener noreferrer">Adobe Research</a>,
                {' '}<a href="https://www.nuro.ai/" target="_blank" rel="noopener noreferrer">Nuro</a>, and
                {' '}<a href="https://cse.ucsd.edu/" target="_blank" rel="noopener noreferrer">UCSD</a>
            </>),
        },

        { content: <>[2025.11] Prof. Eunbyung Park will serve as an area chair for ICML 2026</> },
        { content: <>[2025.11] LightMarkGS received the best paper award in KIBME 2025!</> },

        {
            content: (<>
                [2025.11]
                {' '}<a href="https://sngryonglee.github.io/MoireZero/" target="_blank" rel="noopener noreferrer">Moiré Zero</a>{' '}
                got accepted to WACV 2026!
            </>),
        },
        {
            content: (<>
                [2025.09]
                {' '}<a href="https://maincold2.github.io/omg/" target="_blank" rel="noopener noreferrer">OMG</a>{' '}got accepted to NeurIPS 2025!
            </>),
        },

        { content: <>[2025.08] Prof. Eunbyung Park will serve as an area chair for CVPR 2026 and ICLR 2026</> },

        {
            content: (<>
                [2025.06] Prof. Eunbyung Park gave an invited talk at an RSS 2025 Workshop
                {' '}<a href="https://sites.google.com/view/gmm-workshop-rss25/home" target="_blank" rel="noopener noreferrer">Gaussian Representations for Robot Autonomy: Challenges and Opportunities</a>
            </>),
        },

        {
            content: (<>
                [2025.04] Prof. Eunbyung Park gave an invited talk at
                {' '}<a href="https://ai.postech.ac.kr/seminar_info/view/id/678#u" target="_blank" rel="noopener noreferrer">POSTECH CSE/GSAI Seminar</a>
            </>),
        },

        { content: <>[2025.04] Prof. Eunbyung Park will serve as an area chair for NeurIPS 2025</> },

        {
            content: (<>
                [2025.04]
                {' '}<a href="https://stnamjef.github.io/GenerativeDensification/" target="_blank" rel="noopener noreferrer">Generative Densification</a>{' '}
                was selected as a CVPR 2025 highlight!
            </>),
        },

        {
            content: (<>
                [2025.04] Prof. Eunbyung Park gave an invited talk at
                {' '}<a href="https://cs.dongguk.edu/article/noti/detail/1068" target="_blank" rel="noopener noreferrer">AI Seminar Series at Dongguk University, 2025</a>
            </>),
        },

        {
            content: (<>
                [2025.03] Prof. Eunbyung Park gave an invited talk at
                {' '}<a href="https://meta.skku.edu/meta/seminar.do?mode=view&articleNo=189009" target="_blank" rel="noopener noreferrer">Colloquium on Immersive Media Engineering at SKKU, 2025</a>
            </>),
        },

        { content: <>[2025.02] Three papers got accepted to CVPR 2025!</> },

        {
            content: (<>
                [2025.01] Prof. Eunbyung Park gave an invited talk at
                {' '}<a href="https://jpeg.org" target="_blank" rel="noopener noreferrer">Joint JPEG/MPEG Workshop</a>
            </>),
        },

        { content: <>[2024.12] Two papers got accepted to ICLR 2025!</> },
        { content: <>[2024.12] Three papers got accepted to AAAI 2025!</> },

        {
            content: (<>
                [2024.11]
                {' '}<a href="https://arxiv.org/abs/2406.18459" target="_blank" rel="noopener noreferrer">DiffuseHigh</a>{' '}
                received the best paper award at JKAIA 2024!
            </>),
        },

        {
            content: (<>
                [2024.10] Prof. Eunbyung Park gave an invited talk at SKKU AI Colloqium{' '}
                <a href="https://www.youtube.com/watch?v=ooPSDSNikz4" target="_blank" rel="noopener noreferrer"> 2024 Recorded talk (Korean)</a>
            </>),
        },

        {
            content: (<>
                [2024.09]
                {' '}<a href="https://arxiv.org/abs/2405.08530" target="_blank" rel="noopener noreferrer">PEFT Video Compression</a>{' '}
                work was selected as an oral presentation in ACCV 2024!
            </>),
        },

        {
            content: (<>
                [2024.09]
                {' '}<a href="https://arxiv.org/abs/2406.13251" target="_blank" rel="noopener noreferrer">Freq-Mip-AA</a>{' '}
                is considered as a best paper candidate in ICIP 2024!
            </>),
        },

        { content: <>[2024.07] Two papers got accepted to ECCV 2024!</> },
        { content: <>[2024.05] Our lab received the outstanding young scientist grant from National Research Foundation!</> },

        {
            content: (<>
                [2024.05] Our lab (with Prof
                {' '}<a href="https://www.bionanophotonics-skku.com/pi" target="_blank" rel="noopener noreferrer">Inki Kim</a>
                ) won the grant from Samsung Science & Technology Foundation!
            </>),
        },

        { content: <>[2024.04] Two CVPR 2024 papers selected as highlight!</> },
        { content: <>[2024.02] Two papers got accepted to CVPR 2024!</> },

        {
            content: (<>
                [2024.01]
                {' '}<a href="https://maincold2.github.io/cam/" target="_blank" rel="noopener noreferrer">CAM</a>{' '}
                got accepted to ICLR 2024 as a spotlight!
            </>),
        },

        { content: <>[2023.11] Prof. Eunbyung Park gave an invited talk at GIST Colloquium</> },

        {
            content: (<>
                [2023.09]
                {' '}<a href="https://jwcho5576.github.io/spinn.github.io/" target="_blank" rel="noopener noreferrer">SPINN</a>{' '}
                got accepted to NeurIPS 2023 as a spotlight!
            </>),
        },

        { content: <>[2023.09] Two papers got accepted to NeurIPS 2023!</> },
        { content: <>[2023.05] Prof. Eunbyung Park gave an invited talk at UNIST AI graduate seminar</> },
        { content: <>[2023.02] Two papers got accepted to CVPR 2023!</> },

        {
            content: (<>
                [2023.02] Prof. Eunbyung Park gave an invited talk about SPINN at
                {' '}<a href="https://sites.brown.edu/crunch-group/" target="_blank" rel="noopener noreferrer">CRUNCH Seminars at Brown University</a>
            </>),
        },

        {
            content: (<>
                [2022.11] Prof. Eunbyung Park gave an invited talk at
                {' '}<a href="https://ksiam.org/Conference/ConferenceView.asp?AC=0&CODE=CC20220801&B_CATE=BBC1" target="_blank" rel="noopener noreferrer">2022 KSIAM Annual Meeting</a>
            </>),
        },

        {
            content: (<>
                [2022.11]
                {' '}<a href="https://namgyukang.github.io/PIXEL/" target="_blank" rel="noopener noreferrer">PIXEL</a>{' '}
                got accepted to AAAI 2023
            </>),
        },

        { content: <>[2022.09] NRFF was accepted to ACCV 2022</> },

        {
            content: (<>
                [2022.08] PIXEL was selected as a spotlight in
                {' '}<a href="https://dlde-2022.github.io/" target="_blank" rel="noopener noreferrer">DLDE-II (NeurIPS 2022 Workshop)</a>
            </>),
        },

        {
            content: (<>
                [2022.08] SPINN received the best paper award in
                {' '}<a href="http://aiassociation.kr/Conference/ConferenceView.asp?AC=0&CODE=CC20220601&B_CATE=BBC1" target="_blank" rel="noopener noreferrer">CKAIA 2022</a>
            </>),
        },

        { content: <>[2022.07] Streamable Neural Fields got accepted to ECCV 2022</> },

        {
            content: (<>
                [2022.05] Our lab received the
                {' '}<a href="https://www.brlskku.com/" target="_blank" rel="noopener noreferrer">Basic Research Lab (BRL)</a>{' '}
                grant from the NRF
            </>),
        },

        { content: <>[2022.03] Prof. Eunbyung Park gave an invited talk at Samsung Research</> },

        {
            content: (<>
                [2021.09] Honor to be selected as a
                {' '}<a href="https://www.eiric.or.kr/manpower/rising_view.php?Seq=34" target="_blank" rel="noopener noreferrer">EIRIC rising star</a>
            </>),
        },

        { content: <>[2021.06] Lab was founded</> },

        {
            content: (<>
                [2021.05] Prof. Eunbyung Park gave an invited talk at
                {' '}<a href="http://www.aifrontiers.org/" target="_blank" rel="noopener noreferrer">AI Frontiers Summit 2021</a>
            </>),
        },
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
                            <Carousel images={images} />

                            <section className="news">
                            <h2>News</h2>
                            <ul className="news-list">
                                {currentNewsItems.map((item, index) => (
                                <li key={index}>{item.content}</li>
                                ))}
                            </ul>

                            <div className="pagination">
                                {Array.from({ length: totalPages }, (_, index) => (
                                <button
                                    key={index}
                                    className={`pagination-button ${currentPage === index + 1 ? 'active' : ''}`}
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
                    <Route path="*" element={<Navigate to="/" />} />
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