import ReactMarkdown from "react-markdown";
import remarkBreaks from "remark-breaks";
import './TeamPage.css';

const TeamPage = () => {
    const phDStudents = [
        { 
            name: 'Joo Chan Lee', 
            img: process.env.PUBLIC_URL + '/team/JCL.png',
            desc: "MS-PhD Integrated Student\nCo-supervised by [Jong-Hwan Ko](https://iris.skku.edu/professor/)",
            email: 'maincold2@skku.edu', 
            homepage: 'https://maincold2.github.io/',
            scholar: 'https://scholar.google.com/citations?user=WKCHKk8AAAAJ&hl=en',
            github: 'https://github.com/maincold2' 
        },
        { 
            name: 'Younggeun Lee', 
            img: process.env.PUBLIC_URL + '/team/YGL.jpeg',
            desc: 'MS-PhD Integrated Student',
            email: 'dudrms514@skku.edu', 
            scholar: 'https://scholar.google.com/citations?hl=en&user=E4iEBFsAAAAJ',
            github: 'https://github.com/Younggeun-L' 
        },
        { 
            name: 'Seungtae Nam', 
            img: process.env.PUBLIC_URL + '/team/STN.png',
            desc: 'PhD Student',
            email: 'stnamjef@yonsei.ac.kr', 
            scholar: 'https://scholar.google.com/citations?user=8NKPmmwCmrAC&hl=en',
            github: 'https://github.com/stnamjef'
        },
        { 
            name: 'Xiangyu Sun', 
            img: process.env.PUBLIC_URL + '/team/XYS.jpg',
            desc: `PhD Student\nDoing internship at [Horizon Robotics](https://en.horizon.auto/)`,
            email: 'xiangyusun@skku.edu', 
            scholar: 'https://scholar.google.com/citations?user=VLzxTrAAAAAJ&hl=en',
            github: 'https://github.com/Xiangyu1Sun'  
        },
        { 
            name: 'Byeonghyeon Lee', 
            img: process.env.PUBLIC_URL + '/team/BHL.jpg', 
            desc: 'PhD Student',
            email: 'bhl@yonsei.ac.kr', 
            scholar: 'https://scholar.google.com/citations?user=_PhPccYAAAAJ&hl=en',
            github: 'https://github.com/benhenryL' 
        },        
        { 
            name: 'Junyu Zhang', 
            img: process.env.PUBLIC_URL + '/team/JYJ.JPG',
            desc: 'PhD Student',
            email: 'zhangjunyu@skku.edu', 
            scholar: 'https://scholar.google.com/citations?hl=en&user=3jrCsVoAAAAJ',
            github: 'https://github.com/BestJunYu'  
        },
        { 
            name: 'Younghyun Kim', 
            img: process.env.PUBLIC_URL + '/team/YHL.jpg',
            desc: 'PhD Student',
            email: 'yhyun225@yonsei.ac.kr', 
            scholar: 'https://scholar.google.com/citations?hl=en&user=4M-6X7MAAAAJ',
            github: 'https://github.com/yhyun225'  
        },
        { 
            name: 'Seungkwon Yang', 
            img: process.env.PUBLIC_URL + '/team/SKY.jpg',
            desc: 'MS-PhD Integrated Student',
            email: 'skyang@yonsei.ac.kr', 
            scholar: '',
            github: 'https://github.com/yang-gwon2'
        },
                { 
            name: 'Minseo Lee', 
            img: process.env.PUBLIC_URL + '/team/MSL.jpg',
            desc: 'MS-PhD Integrated Student',
            email: 'lms@yonsei.ac.kr', 
            scholar: '',
            github: 'https://github.com/lms20031'   
        },
        { 
            name: 'Jungwoo Kim', 
            img: process.env.PUBLIC_URL + '/team/JWK.jpeg',
            desc: 'MS-PhD Integrated Student',
            email: 'jungwkim@yonsei.ac.kr',
            scholar: '',
            github: 'https://github.com/jungcow'   
        },
    ];

    const masterStudents = [
        { 
            name: 'Gyeongjin Kang', 
            img: process.env.PUBLIC_URL + '/team/GJK.jpg',
            desc: 'MS Student', 
            email: 'ggggjin99@skku.edu',
            homepage: 'https://gynjn.github.io/info/', 
            scholar: 'https://scholar.google.com/citations?user=iyQ16vIAAAAJ&hl=en',
            github: 'https://github.com/Gynjn' 
        },
        { 
            name: 'Dongheok Park', 
            img: process.env.PUBLIC_URL + '/team/DHP.jpg',
            desc: 'MS Student',
            email: 'leao8869@skku.edu', 
            scholar: 'https://scholar.google.com/citations?user=UUtpFKgAAAAJ&hl=ko&oi=ao',
            github: 'https://github.com/DHPark98'  
        },
        { 
            name: 'Hyun-kyu Ko', 
            img: process.env.PUBLIC_URL + '/team/HKK.jpg',
            desc: 'MS Student',
            email: 'laniko@skku.edu', 
            scholar: 'https://scholar.google.com/citations?hl=ko&user=lsi-8-QAAAAJ',
            github: 'https://github.com/Ko-Lani'  
        },
        { 
            name: 'Jisang Yoo', 
            img: process.env.PUBLIC_URL + '/team/JSY.jpg',
            desc: 'MS Student',
            email: 'jisang1528@skku.edu', 
            scholar: 'https://scholar.google.com/citations?user=0mCLz_sAAAAJ&hl=ko&oi=sra',
            github: 'https://github.com/Yoo-jisang'  
        },
        { 
            name: 'Hye Jin Jeon', 
            img: process.env.PUBLIC_URL + '/team/HJJ.jpeg',
            desc: 'MS Student',
            email: 'hyejin9877@skku.edu', 
            scholar: '',
            github: 'https://github.com/jeonhhyejin'  
        },
        { 
            name: 'Youbin Kim', 
            img: process.env.PUBLIC_URL + '/team/YBK.jpg',
            desc: 'MS Student',
            email: 'ybin108@skku.edu', 
            scholar: 'https://scholar.google.com/citations?hl=en&user=RUiA8-wAAAAJ',
            github: 'https://github.com/Ubin108'  
        },
        { 
            name: 'Ji Hyeon Park', 
            img: process.env.PUBLIC_URL + '/team/JHP.jpg',
            desc: 'MS Student',
            email: 'fairytale@skku.edu', 
            scholar: '',
            github: 'https://github.com/Kanadae'  
        },
        { 
            name: 'Seungryong Lee', 
            img: process.env.PUBLIC_URL + '/team/SRL.jpg',
            desc: 'MS Student',
            email: 'leejicb@skku.edu', 
            scholar: '',
            github: 'https://github.com/twowindragon'  
        },
        { 
            name: 'Eunsoo Lee', 
            img: process.env.PUBLIC_URL + '/team/ESL.jpeg',
            desc: 'MS Student',
            email: 'osoo0628@skku.edu', 
            scholar: '',
            github: 'https://github.com/esleeo'  
        },
        { 
            name: 'Jinho Park', 
            img: process.env.PUBLIC_URL + '/team/JHP.jpeg',
            desc: 'MS Student',
            email: 'jinho99@.skku.edu', 
            scholar: '',
            github: 'https://github.com/zinosii'
        },
        { 
            name: 'Woojeong Baek', 
            img: process.env.PUBLIC_URL + '/team/WJB.jpeg',
            desc: 'MS Student', 
            email: 'bwj2800@yonsei.ac.kr',
            scholar: '',
            github: 'https://github.com/bwj2800'   
        },
        { 
            name: 'Joonhyuk Park', 
            img: process.env.PUBLIC_URL + '/team/JoonhyukPark.jpg',
            desc: 'MS Student',
            email: 'rchkl2380@yonsei.ac.kr', 
            scholar: '',
            github: 'https://github.com/onyuc'   
        },
        { 
            name: 'Hwasik Jeong', 
            img: process.env.PUBLIC_URL + '/team/HSJ.jpg',
            desc: 'MS Student',
            email: '99hwasikk@yonsei.ac.kr ', 
            scholar: '',
            github: 'https://github.com/JeongHwaSik'   
        },
    ];

    const undergraduateStudents = [
        
    ];

    const alumni = [
        { 
            name: 'Daniel Rho', 
            desc: 'MS, 2020.09 - 2022.08 (co-advised by Jong Hwan Ko)',
            current: 'PhD student at UNC Chapel Hill',
        },
        { 
            name: 'Hanbit Yoon',
            desc: 'MS, 2021.09 - 2023.08 (co-advised by Joon Hee Choi)',
            current: 'Samsung Electronics'
        },
        { 
            name: 'Sanghyeon Kim', 
            desc: 'MS, 2021.09 - 2023.08',
            current: 'LG CNS'
        },
        { 
            name: 'Junwoo Cho',
            desc: 'MS, 2021.09 - 2023.08', 
            current: 'Lunit'
        },
        { 
            name: 'Usman Ali', 
            desc: 'Research Professor, 2022.09 - 2024.02', 
            current: 'Assistant Professor at Sejong University'
        },
        { 
            name: 'Seungtae Nam',
            desc: 'MS, 2022.03 - 2024.02', 
            current: 'PhD student at V-Lab, Yonsei'
        },
        { 
            name: 'Hyunmo Yang', 
            desc: 'MS, 2022.03 - 2024.02',
            current: 'Inbody'
        },
        { 
            name: 'Namgyu Kang', 
            desc: 'MS, 2022.03 - 2024.08 / PhD, 2024.09 - 2025.08, leaving for a new adventure. We wish you all the best!',
            current: ''
        },
        { 
            name: 'Byeonghyeon Lee', 
            desc: 'MS, 2022.09 - 2024.08', 
            current: 'PhD student at V-Lab, Yonsei'
        },
        { 
            name: 'Howoong Lee', 
            desc: 'MS, 2022.09 - 2024.08 (Industrial Scholars Program)', 
            current: 'Hanwha Vision'
        },
        { 
            name: 'Youngin Park', 
            desc: 'MS, 2023.03 - 2024.08 (Part-time Industrial Scholars Program)',
            current: 'Samsung Electronics'
        },
        { 
            name: 'Younghyun Kim', 
            desc: 'MS, 2023.03 - 2025.02',
            current: 'PhD student at V-Lab, Yonsei'
        },
        { 
            name: 'Dohyun Kim', 
            desc: 'MS, 2023.03 - 2025.02',
            current: 'Samsung Electronics'
        },
        { 
            name: 'Geunmin Hwang', 
            desc: 'MS, 2023.03 - 2025.02',
            current: 'ReconLabs'
        },
        { 
            name: 'Seungjun Oh', 
            desc: 'MS, 2023.09 - 2025.08',
            current: 'Hanwha Vision'
        },
    ];

    return (
        <div className="team-page">
            <section>
                <h2>Principal Investigator</h2>
                <div className="profile">
                    <div className="member">
                        <img
                            src={process.env.PUBLIC_URL + '/team/epark3.jpg'}
                            alt="Prof. Eunbyung Park"
                            className="profile-img"
                        />
                        <a className='prof-name' href='https://silverbottlep.github.io/' style={{ fontSize: '1em' }}>Eunbyung Park</a>
                        <div className='bio'>
                                <a href="epark@yonsei.ac.kr">
                                    <i className="fa fa-envelope-o" style={{ fontSize: '24px', color: 'black' }}></i>
                                </a>
                                <a href="https://silverbottlep.github.io/index.html">
                                    <i className="fa fa-home" style={{ fontSize: '24px', color: 'black' }}></i>
                                </a>
                                <a href="https://scholar.google.com/citations?user=iPyuJmQAAAAJ&hl=en">
                                    <i className="ai ai-google-scholar" style={{ fontSize: '24px', color: 'black' }}></i>
                                </a>
                                <a href="https://www.linkedin.com/in/eunbyung-park-286384b4/">
                                    <i className="fa fa-linkedin" style={{ fontSize: '24px', color: 'black' }}></i>
                                </a>
                                <a href="https://twitter.com/silverbottlep">
                                    <i className="fa fa-twitter" style={{ fontSize: '24px', color: 'black' }}></i>
                                </a>
                            </div>
                    </div>
                </div>
            </section>


            <section>
                <h2>Ph.D. Students</h2>
                <div className="students">
                    {phDStudents.map((student, index) => (
                        <div key={index} className="member">
                            <img src={student.img} alt={student.name} className="profile-img" />
                            <p>{student.name}</p>
                            <div className="student-links">
                                {student.email && <a href={`mailto:${student.email}`}><i className="fa fa-envelope-o" style={{ fontSize: '24px', color: 'black' }}></i></a>}
                                {student.homepage && <a href={student.homepage}><i className="fa fa-home" style={{ fontSize: '24px', color: 'black' }}></i></a>}
                                {student.scholar && <a href={student.scholar}><i className="ai ai-google-scholar" style={{ fontSize: '24px', color: 'black' }}></i></a>}
                                {student.github && <a href={student.github}><i className="fa fa-github" style={{ fontSize: '24px', color: 'black' }}></i></a>}
                            </div>
                            <div id="desc">
                                <ReactMarkdown remarkPlugins={[remarkBreaks]}>
                                    {
                                    student.desc.replace(/\r\n/g, "\n").replace(/\\n/g, "\n")
                                    }
                                </ReactMarkdown>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section>
                <h2>Master Students</h2>
                <div className="students">
                    {masterStudents.map((student, index) => (
                        <div key={index} className="member">
                            <img src={student.img} alt={student.name} className="profile-img" />
                            <p>{student.name}</p>
                            <div className="student-links">
                                {student.email && <a href={`mailto:${student.email}`}><i className="fa fa-envelope-o" style={{ fontSize: '24px', color: 'black' }}></i></a>}
                                {student.homepage && <a href={student.homepage}><i className="fa fa-home" style={{ fontSize: '24px', color: 'black' }}></i></a>}
                                {student.scholar && <a href={student.scholar}><i className="ai ai-google-scholar" style={{ fontSize: '24px', color: 'black' }}></i></a>}
                                {student.github && <a href={student.github}><i className="fa fa-github" style={{ fontSize: '24px', color: 'black' }}></i></a>}
                            </div>
                            <div id="desc">
                                <ReactMarkdown remarkPlugins={[remarkBreaks]}>
                                    {
                                    student.desc.replace(/\r\n/g, "\n").replace(/\\n/g, "\n")
                                    }
                                </ReactMarkdown>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* <section>
                <h2>Undergraduate Students</h2>
                <div className="students">
                    {undergraduateStudents.map((student, index) => (
                        <div key={index} className="member">
                            <img src={student.img} alt={student.name} className="profile-img" />
                            <p>{student.name}</p>
                            <div className="student-links">
                                {student.email && <a href={`mailto:${student.email}`}><i className="fa fa-envelope-o" style={{ fontSize: '24px', color: 'black' }}></i></a>}
                                {student.scholar && <a href={student.scholar}><i className="ai ai-google-scholar" style={{ fontSize: '24px', color: 'black' }}></i></a>}
                                {student.github && <a href={student.github}><i className="fa fa-github" style={{ fontSize: '24px', color: 'black' }}></i></a>}
                            </div>
                        </div>
                    ))}
                </div>
            </section> */}


            <section>
                <h2>Alumni</h2>
                <div className="alumni">
                    {alumni.map((alumnus, index) => (
                        <div key={index} className="alumnus">
                            <p className="alumnus-info">
                                <span className="name">{alumnus.name}</span>
                                <span className="desc">{alumnus.desc}</span>
                                <span className="current">{alumnus.current}</span>
                            </p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default TeamPage;
