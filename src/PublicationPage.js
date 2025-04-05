import React, { useState } from "react";
import "./PublicationPage.css";

const publications = [
    
    { 
        year: "Preprints", 
        title: "Optimized Minimal 3D Gaussian Splatting", 
        journal: "arXiv:2503.16924", 
        authors: "Joo Chan Lee, Jong Hwan Ko, Eunbyung Park" ,
        links: {
            paper: "https://arxiv.org/abs/2503.16924",
            project: "https://maincold2.github.io/omg/",
            code: "https://github.com/maincold2/OMG",
            thumbs: process.env.PUBLIC_URL + '/thumb/OMG.jpg'
        } 
    },
    { 
        year: "Preprints", 
        title: "CompMarkGS: Robust Watermarking for Compression 3D Gaussian Splatting", 
        journal: "arXiv:2503.12836", 
        authors: "Sumin In, Youngdong Jang, Utae Jeong, MinHyuk Jang, Hyeongcheol Park, Eunbyung Park, Sangpil Kim" ,
        links: {
            paper: "https://arxiv.org/abs/2503.12836",
            thumbs: process.env.PUBLIC_URL + '/thumb/CompMarkGS.jpg'
        } 
    },
    { 
        year: "Preprints", 
        title: "Aberration Correcting Vision Transformers for High-Fidelity Metalens Imaging", 
        journal: "arXiv:2412.04591", 
        authors: "Byeonghyeon Lee, Youbin Kim, Yongjae Jo, Hyunsu Kim, Hyemi Park, Yangkyu Kim, Debabrata Mandal, Praneeth Chakravarthula, Inki Kim, Eunbyung Park" ,
        links: {
            paper: "https://arxiv.org/abs/2412.04591",
            project: "https://benhenryl.github.io/Metalens-Transformer",
            code: "https://github.com/benhenryL/Metalens-Transformer",
            thumbs: process.env.PUBLIC_URL + '/thumb/Metalens-Transformer.jpg'
        } 
    },
    { 
        year: "2025", 
        title: "Generative Densification: Learning to Densify Gaussians for High-Fidelity Generalizable 3D Reconstruction", 
        journal: "CVPR 2025 Highlight (acceptance rate = 3.7%)", 
        authors: "Seungtae Nam*, Xiangyu Sun*, Gyeongjin Kang, Younggeun Lee, Seungjun Oh, Eunbyung Park",
        links: {
            paper: "https://arxiv.org/abs/2412.06234",
            project: "https://stnamjef.github.io/GenerativeDensification/",
            code: "https://github.com/stnamjef/GenerativeDensification",
            thumbs: process.env.PUBLIC_URL + '/thumb/GenerativeDensification.jpg'
        }
    },

    { 
        year: "2025", 
        title: "SelfSplat: Pose-Free and 3D Prior-Free Generalizable 3D Gaussian Splatting", 
        journal: "CVPR 2025", 
        authors: "Gyeongjin Kang*, Jisang Yoo*, Jihyeon Park, Seungtae Nam, Hyeonsoo Im, Sangheon Shin, Sangpil Kim, Eunbyung Park",
        links: {
            paper: "https://arxiv.org/abs/2411.17190",
            project: "https://gynjn.github.io/selfsplat/",
            code: "https://github.com/Gynjn/selfsplat",
            thumbs: process.env.PUBLIC_URL + '/thumb/SelfSplat.jpg'
        } 
    },
    { 
        year: "2025", 
        title: "EditSplat: Multi-View Fusion and Attention-Guided Optimization for View-Consistent 3D Scene Editing with 3D Gaussian Splatting", 
        journal: "CVPR 2025", 
        authors: "Dong In Lee, Hyeongcheol Park, Jiyoung Seo, Eunbyung Park, Hyunje Park, Ha Dam Baek, Shin Sangheon, Sangmin kim, Sangpil Kim",
        links: {
            paper: "https://arxiv.org/abs/2412.11520",
            project: "https://kuai-lab.github.io/editsplat2024/",
            code: "Coming soon",
            thumbs: process.env.PUBLIC_URL + '/thumb/EditSplat.jpg'
        }
    },
    { 
        year: 2025, 
        title: "Anti-Exposure Bias in Diffusion Models via Prompt Learning", 
        journal: "ICLR 2025 Spotlight (acceptance rate = 5.1%)", 
        authors: "Junyu Zhang, Daochang Liu, Eunbyung Park, Shichao Zhang, Chang Xu",
        links: {
            paper: "https://openreview.net/pdf?id=MtDd7rWok1",
            code: "https://github.com/BestJunYu/ANTI_EXPOSURE_BIAS",
            thumbs: process.env.PUBLIC_URL + '/thumb/AntiExposure.jpg'
        } 
    },
    { 
        year: 2025, 
        title: "PIG: Physics-Informed Gaussians as Adaptive Parametric Mesh Representations", 
        journal: "ICLR 2025", 
        authors: "Namgyu Kang*, Jaemin Oh*, Youngjoon Hong, Eunbyung Park",
        links: {
            paper: "https://arxiv.org/abs/2412.05994",
            project: "https://namgyukang.github.io/Physics-Informed-Gaussians/",
            code: "https://github.com/NamGyuKang/Physics-Informed-Gaussians",
            thumbs: process.env.PUBLIC_URL + '/thumb/PIG.jpg'
        } 
    },
    { 
        year: 2025, 
        title: "Separable Physics-informed Neural Networks for Solving the BGK Model of the Boltzmann Equation", 
        journal: "SISC 2025", 
        authors: "Jaemin Oh, Seung Yeon Cho, Seok-Bae Yun, Eunbyung Park, Youngjoon Hong",
        links: {
            paper: "https://arxiv.org/abs/2403.06342",
            thumbs: process.env.PUBLIC_URL + '/thumb/SPINN_BGK.jpg'
        }
    },
    { 
        year: 2025, 
        title: "Sequence Matters: Harnessing Video Models in 3D Super-Resolution", 
        journal: "AAAI 2025", 
        authors: "Hyun-kyu Ko*, Dongheok Park*, Youngin Park, Byeonghyeon Lee, Juhee Han, Eunbyung Park",
        links: {
            paper: "https://arxiv.org/abs/2412.11525",
            project: "https://ko-lani.github.io/Sequence-Matters/",
            code: "https://github.com/DHPark98/SequenceMatters",
            thumbs: process.env.PUBLIC_URL + '/thumb/SequenceMatters.jpg'
        } 
    },
    { 
        year: 2025, 
        title: "DiffuseHigh: Training-free Progressive High-Resolution Image Synthesis through Structure Guidance", 
        journal: "AAAI 2025", 
        authors: "Younghyun Kim*, Geunmin Hwang*, Junyu Zhang, Eunbyung Park",
        links: {
            paper: "https://arxiv.org/abs/2406.18459",
            project: "https://yhyun225.github.io/DiffuseHigh/",
            code: "https://github.com/yhyun225/DiffuseHigh",
            thumbs: process.env.PUBLIC_URL + '/thumb/DiffuseHigh.jpg'
        } 
    },
    { 
        year: 2025, 
        title: "CodecNeRF: Toward Fast Encoding and Decoding, Compact, and High-quality Novel-view Synthesis", 
        journal: "AAAI 2025", 
        authors: "Gyeongjin Kang*, Younggeun Lee*, Seungjun Oh, Eunbyung Park",
        links: {
            paper: "https://arxiv.org/abs/2404.04913",
            project: "https://gynjn.github.io/CodecNeRF/",
            code: "https://github.com/Gynjn/CodecNeRF",
            thumbs: process.env.PUBLIC_URL + '/thumb/CodecNeRF.jpg'
        } 
    },
    { 
        year: 2024, 
        title: "Parameter-Efficient Instance-Adaptive Neural Video Compression", 
        journal: "ACCV 2024 Oral (acceptance rate = 5.6%)", 
        authors: "Seungjun Oh*, Hyunmo Yang*, Eunbyung Park",
        links: {
            paper: "https://arxiv.org/abs/2405.08530",
            code: "https://github.com/ohsngjun/PEVC",
            thumbs: process.env.PUBLIC_URL + '/thumb/PEVC.jpg'
        } 
    },
    { 
        year: 2024, 
        title: "F-3DGS: Factorized Coordinates and Representations for 3D Gaussian Splatting", 
        journal: "ACM MM 2024", 
        authors: "Xiangyu Sun, Joo Chan Lee, Daniel Rho, Jong Hwan Ko, Usman Ali, Eunbyung Park",
        links: {
            paper: "https://arxiv.org/abs/2405.17083",
            project: "https://xiangyu1sun.github.io/Factorize-3DGS/",
            code: "https://github.com/Xiangyu1Sun/Factorize-3DGS",
            thumbs: process.env.PUBLIC_URL + '/thumb/F-3DGS.jpg'
        } 
    },
    { 
        year: 2024, 
        title: "Deblurring 3D Gaussian Splatting", 
        journal: "ECCV 2024", 
        authors: "Byeonghyeon Lee*, Howoong Lee*, Xiangyu Sun, Usman Ali, Eunbyung Park",
        links: {
            paper: "https://arxiv.org/abs/2401.00834",
            project: "https://benhenryl.github.io/Deblurring-3D-Gaussian-Splatting/",
            code: "https://github.com/benhenryL/Deblurring-3D-Gaussian-Splatting",
            thumbs: process.env.PUBLIC_URL + '/thumb/Deblurring3DGS.jpg'
        } 
    },
    { 
        year: 2024, 
        title: "Continuous Memory Representation for Anomaly Detection", 
        journal: "ECCV 2024", 
        authors: "Joo Chan Lee*, Taejune Kim*, Eunbyung Park, Simon S. Woo, Jong Hwan Ko",
        links: {
            paper: "https://arxiv.org/abs/2402.18293",
            project: "https://tae-mo.github.io/crad/",
            code: "https://github.com/tae-mo/CRAD",
            thumbs: process.env.PUBLIC_URL + '/thumb/CRAD.jpg'
        } 
    },
    { 
        year: 2024, 
        title: "Freq-Mip-AA : Frequency Mip Representation for Anti-Aliasing Neural Radiance Fields", 
        journal: "ICIP 2024 Best Paper Candidates", 
        authors: "Youngin Park, Seungtae Nam, Cheul-hee Hahm, Eunbyung Park",
        links: {
            paper: "https://arxiv.org/abs/2406.13251",
            code: "https://github.com/yi0109/FreqMipAA",
            thumbs: process.env.PUBLIC_URL + '/thumb/Freq-Mip-AA.jpg'
        } 
    },
    { 
        year: 2024, 
        title: "Compact 3D Gaussian Representation for Radiance Field", 
        journal: "CVPR 2024 Highlight (acceptance rate = 3.6%)", 
        authors: "Joo Chan Lee, Daniel Rho, Xiangyu Sun, Jong Hwan Ko, Eunbyung Park",
        links: {
            paper: "https://arxiv.org/abs/2311.13681",
            project: "https://maincold2.github.io/c3dgs/",
            code: "https://github.com/maincold2/Compact-3DGS",
            talk: "https://www.youtube.com/watch?v=ooPSDSNikz4",
            thumbs: process.env.PUBLIC_URL + '/thumb/Compact3DGS.jpg'
        } 
    },
    { 
        year: 2024, 
        title: "Residual Learning in Diffusion Models", 
        journal: "CVPR 2024 Highlight (acceptance rate = 3.6%)", 
        authors: "Junyu Zhang, Daochang Liu, Eunbyung Park, Shichao Zhang, Chang Xu",
        links: {
            paper: "https://openaccess.thecvf.com/content/CVPR2024/html/Zhang_Residual_Learning_in_Diffusion_Models_CVPR_2024_paper.html",
            code: "Coming soon",
            thumbs: process.env.PUBLIC_URL + '/thumb/ResDiff.jpg'
        }  
    },
    { 
        year: 2024, 
        title: "Coordinate-Aware Modulation for Neural Fields", 
        journal: "ICLR 2024 Spotlight (acceptance rate = 6.2%)", 
        authors: "Joo Chan Lee, Daniel Rho, Seungtae Nam, Jong Hwan Ko, Eunbyung Park",
        links: {
            paper: "https://openreview.net/forum?id=4UiLqimGm5&noteId=4UiLqimGm5",
            project: "https://maincold2.github.io/cam/",
            code: "https://github.com/maincold2/cam",
            thumbs: process.env.PUBLIC_URL + '/thumb/CAM.jpg'
        }   
    },
    { 
        year: 2024, 
        title: "Sharp-NeRF: Grid-based Fast Deblurring Neural Radiance Field using Sharpness Prior", 
        journal: "WACV 2024", authors: "Byeonghyeon Lee*, Howoong Lee*, Usman Ali, Eunbyung Park",
        links: {
            paper: "https://openaccess.thecvf.com/content/WACV2024/html/Lee_Sharp-NeRF_Grid-Based_Fast_Deblurring_Neural_Radiance_Fields_Using_Sharpness_Prior_WACV_2024_paper.html",
            project: "https://benhenryl.github.io/SharpNeRF/",
            code: "https://github.com/benhenryL/SharpNeRF",
            thumbs: process.env.PUBLIC_URL + '/thumb/SharpNeRF.jpg'
        }   
    },
    { 
        year: 2024, 
        title: "Rethinking Convolutional Neural Networks for Trajectory Refinement", 
        journal: "Pattern Recognition, Elsevier, 2024", 
        authors: "Hanbit Yoon, Usman Ali, Joonhee Choi, Eunbyung Park",
        links: {
            paper: "https://www.sciencedirect.com/science/article/abs/pii/S0031320324006344",
            code: "Coming soon",
            thumbs: process.env.PUBLIC_URL + '/thumb/RethinkingCNN.jpg'
        } 
    },
    { 
        year: 2024, 
        title: "Hydra: Multi-head Low-rank Adaptation for Parameter Efficient Fine-tuning", 
        journal: "Neural Networks, Elsevier, 2024", 
        authors: "Sanghyeon Kim*, Hyunmo Yang*, Younghyun Kim*, Youngjoon Hong, Eunbyung Park",
        links: {
            paper: "https://www.sciencedirect.com/science/article/abs/pii/S0893608024003381",
            code: "https://github.com/extremebird/Hydra",
            thumbs: process.env.PUBLIC_URL + '/thumb/Hydra.jpg'
        } 
    },
    { 
        year: 2023, 
        title: "Mip-Grid: Anti-aliased Grid Representations for Neural Radiance Fields", 
        journal: "NeurIPS 2023", 
        authors: "Seungtae Nam, Daniel Rho, Jong Hwan Ko, Eunbyung Park",
        links: {
            paper: "https://proceedings.neurips.cc/paper_files/paper/2023/file/082d3d795520c43214da5123e56a3a34-Paper-Conference.pdf",
            project: "https://stnamjef.github.io/mipgrid.github.io/",
            code: "https://github.com/stnamjef/MipGrid",
            thumbs: process.env.PUBLIC_URL + '/thumb/Mip-Grid.jpg'
        } 
    },
    { 
        year: 2023, 
        title: "Separable Physics-Informed Neural Networks", 
        journal: "NeurIPS 2023 Spotlight (acceptance rate = 3.6%)", 
        authors: "Junwoo Cho*, Seungtae Nam*, Hyunmo Yang, Seok-Bae Yun, Youngjoon Hong, Eunbyung Park",
        links: {
            paper: "https://arxiv.org/abs/2306.15969",
            project: "https://jwcho5576.github.io/spinn.github.io/",
            code: "https://github.com/stnamjef/SPINN",
            talk: "https://www.youtube.com/watch?t=4759&v=S-b26O2OWhI&feature=youtu.be",
            thumbs: process.env.PUBLIC_URL + '/thumb/SPINN.jpg'
        } 
    },
    { 
        year: 2023, 
        title: "FFNeRV: Flow-Guided Frame-Wise Neural Representations for Videos", 
        journal: "ACM MM 2023", 
        authors: "Joo Chan Lee, Daniel Rho, Jong Hwan Ko, Eunbyung Park",
        links: {
            paper: "https://arxiv.org/abs/2212.12294",
            project: "https://maincold2.github.io/ffnerv/",
            code: "https://github.com/maincold2/FFNeRV",
            thumbs: process.env.PUBLIC_URL + '/thumb/FFNeRV.jpg'
        } 
    },
    { 
        year: 2023, 
        title: "Masked Wavelet Representation for Compact Neural Radiance Fields", 
        journal: "CVPR 2023", 
        authors: "Daniel Rho*, Byeonghyeon Lee*, Seungtae Nam, Joo Chan Lee, Jong Hwan Ko, Eunbyung Park",
        links: {
            paper: "https://arxiv.org/abs/2212.09069",
            project: "https://daniel03c1.github.io/masked_wavelet_nerf/",
            code: "https://github.com/daniel03c1/masked_wavelet_nerf",
            thumbs: process.env.PUBLIC_URL + '/thumb/MaskedWavelet.jpg'
        } 
    },
    { 
        year: 2023, 
        title: "SMPConv: Self-Moving Point Representations for Continuous Convolution", 
        journal: "CVPR 2023", 
        authors: "Sanghyeon Kim, Eunbyung Park",
        links: {
            paper: "https://arxiv.org/abs/2304.02330",
            code: "https://github.com/sangnekim/SMPConv",
            thumbs: process.env.PUBLIC_URL + '/thumb/SMPConv.jpg'
        } 
    },
    { 
        year: 2023, 
        title: "PIXEL: Physics-Informed Cell Representations for Fast and Accurate PDE Solvers", 
        journal: "AAAI 2023 / NeurIPS 2022 Workshop Spotlight", 
        authors: "Namgyu Kang, Byeonghyeon Lee, Youngjoon Hong, Seok-Bae Yun, Eunbyung Park",
        links: {
            paper: "https://arxiv.org/abs/2207.12800",
            project: "https://namgyukang.github.io/PIXEL/",
            code: "https://github.com/NamGyuKang/PIXEL",
            thumbs: process.env.PUBLIC_URL + '/thumb/PIXEL.jpg'
        } 
    },
    { 
        year: 2022, 
        title: "Streamable Neural Fields", 
        journal: "ECCV 2022", 
        authors: "Junwoo Cho*, Seungtae Nam*, Daniel Rho, Jong Hwan Ko, Eunbyung Park",
        links: {
            paper: "https://arxiv.org/abs/2207.09663",
            code: "https://github.com/jwcho5576/streamable_nf",
            thumbs: process.env.PUBLIC_URL + '/thumb/SNF.jpg'
        } 
    },
    { 
        year: 2022, 
        title: "Neural Residual Flow Fields for Efficient Video Representations", 
        journal: "ACCV 2022", 
        authors: "Daniel Rho, Junwoo Cho, Jong Hwan Ko, Eunbyung Park",
        links: {
            paper: "https://arxiv.org/abs/2201.04329",
            code: "https://github.com/daniel03c1/eff_video_representation",
            thumbs: process.env.PUBLIC_URL + '/thumb/NRFF.jpg'
        } 
    },
];

const groupedPublications = publications.reduce((acc, pub) => {
    acc[pub.year] = acc[pub.year] || [];
    acc[pub.year].push(pub);
    return acc;
}, {});

const PublicationPage = () => {
    const highlightKeywords = (text) => {
        const keywords = ["Highlight", "Spotlight", "Oral", "Best Paper Candidates"];
        const parts = text.split(new RegExp(`(${keywords.join("|")})`, "g"));
        return parts.map((part, index) => {
            if (keywords.includes(part)) {
                return (
                    <span key={index} style={{ color: "red", fontWeight: "bold" }}>
                        {part}
                    </span>
                );
            }
            return part;
        });
    };
    const [modalOpen, setModalOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState("");

    const openModal = (image) => {
        setCurrentImage(image);
        setModalOpen(true);
        document.body.style.overflow = "hidden";
    };
    
    const closeModal = () => {
        setModalOpen(false);
        setCurrentImage("");
        document.body.style.overflow = "auto";
    };
    
    

    return (
        <div className="publication-page">
            {Object.keys(groupedPublications)
                .sort((a, b) => {
                    if (a === "Preprints") return -1;
                    if (b === "Preprints") return 1;
                    return b - a;
                })
                .map((year) => (
                    <div key={year} className="year-section">
                        <h2>{year}</h2>
                        <div className="publication-cards">
                            {groupedPublications[year].map((pub, index) => (
                                <div key={index} className="publication-card">
                                    <div className="publication-card-content">
                                        {pub.links?.thumbs && (
                                            <img
                                                src={pub.links.thumbs}
                                                alt={`${pub.title} thumbnail`}
                                                className="thumbnail"
                                                onClick={() => openModal(pub.links.thumbs)}
                                            />
                                        )}
                                        <div className="publication-details">
                                            <h3>{pub.title}</h3>
                                            <p>{pub.authors}</p>
                                            <p>
                                                <strong>{highlightKeywords(pub.journal)}</strong>
                                            </p>
                                            <div className="links">
                                                {pub.links?.paper &&
                                                    (pub.links.paper === "Coming soon" ? (
                                                        <span>Paper (Coming soon)</span>
                                                    ) : (
                                                        <a
                                                            href={pub.links.paper}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                        >
                                                            Paper
                                                        </a>
                                                    ))}
                                                {pub.links?.project &&
                                                    (pub.links.project === "Coming soon" ? (
                                                        <span>Project Page (Coming soon)</span>
                                                    ) : (
                                                        <a
                                                            href={pub.links.project}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                        >
                                                            Project Page
                                                        </a>
                                                    ))}
                                                {pub.links?.code &&
                                                    (pub.links.code === "Coming soon" ? (
                                                        <span>
                                                            <strong>Code (Coming soon)</strong>
                                                        </span>
                                                    ) : (
                                                        <a
                                                            href={pub.links.code}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                        >
                                                            Code
                                                        </a>
                                                    ))}
                                                {pub.links?.talk &&
                                                    (pub.links.talk === "Talk (Korean)" ? (
                                                        <span>
                                                            <strong>Talk (Korean)</strong>
                                                        </span>
                                                    ) : (
                                                        <a
                                                            href={pub.links.talk}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                        >
                                                            Talk
                                                        </a>
                                                    ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            {/* 모달 */}
            {modalOpen && (
                <div className="modal" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <span className="close" onClick={closeModal}>
                            &times;
                        </span>
                        <img src={currentImage} alt="Modal Thumbnail" className="modal-image" />
                    </div>
                </div>
            )}
        </div>
    );
};

export default PublicationPage;
