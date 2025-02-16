import React from 'react';
import './TeamPage.css';

const TeamPage = () => {
    const phDStudents = [
        { 
            name: 'Joo Chan Lee', 
            img: process.env.PUBLIC_URL + '/team/JCL.png',
            desc: '2020.03 - Present',
            email: 'maincold2@skku.edu', 
            homepage: 'https://maincold2.github.io/',
            scholar: 'https://scholar.google.com/citations?user=WKCHKk8AAAAJ&hl=en',
            github: 'https://github.com/maincold2' 
        },
        { 
            name: 'Younggeun Lee', 
            img: process.env.PUBLIC_URL + '/team/YGL.jpeg',
            desc: '2021.09 - Present',
            email: 'dudrms514@skku.edu', 
            scholar: 'https://scholar.google.com/citations?hl=en&user=E4iEBFsAAAAJ',
            github: 'https://github.com/Younggeun-L' 
        },
        { 
            name: 'Seungtae Nam', 
            img: process.env.PUBLIC_URL + '/team/STN.png',
            desc: '2022.03 - Present',
            email: 'stnamjef@skku.edu', 
            scholar: 'https://scholar.google.com/citations?user=8NKPmmwCmrAC&hl=en',
            github: 'https://github.com/stnamjef'
        },
        { 
            name: 'Xiangyu Sun', 
            img: process.env.PUBLIC_URL + '/team/XYS.jpg',
            desc: '2022.09 - Present',
            email: 'xiangyusun@skku.edu', 
            scholar: 'https://scholar.google.com/citations?user=VLzxTrAAAAAJ&hl=en',
            github: 'https://github.com/Xiangyu1Sun'  
        },
        { 
            name: 'Namgyu Kang', 
            img: process.env.PUBLIC_URL + '/team/NGK.jpg', 
            desc: '2022.03 - Present',
            email: 'kangnamgyu27@skku.edu', 
            scholar: 'https://scholar.google.com/citations?hl=en&user=yb9y9k8AAAAJ',
            github: 'https://github.com/NamGyuKang' 
        },
        { 
            name: 'Byeonghyeon Lee', 
            img: process.env.PUBLIC_URL + '/team/temp.jpg', 
            desc: '2022.09 - Present',
            email: 'leebh0102@skku.edu', 
            scholar: 'https://scholar.google.com/citations?user=_PhPccYAAAAJ&hl=en',
            github: 'https://github.com/benhenryL' 
        },        
        { 
            name: 'Junyu Zhang', 
            img: process.env.PUBLIC_URL + '/team/JYJ.JPG',
            desc: '2023.09 - Present',
            email: 'zhangjunyu@skku.edu', 
            scholar: 'https://scholar.google.com/citations?hl=en&user=3jrCsVoAAAAJ',
            github: 'https://github.com/BestJunYu'  
        },
        { 
            name: 'Younghyun Kim', 
            img: process.env.PUBLIC_URL + '/team/YHL.jpg',
            desc: '2023.03 - Present',
            email: 'yhyun225@skku.edu', 
            scholar: 'https://scholar.google.com/citations?hl=en&user=4M-6X7MAAAAJ',
            github: 'https://github.com/yhyun225'  
        },
    ];

    const masterStudents = [
        { 
            name: 'Seungjun Oh', 
            img: process.env.PUBLIC_URL + '/team/SJO.jpeg',
            desc: '2023.09 - Present',
            email: 'asxc1324@skku.edu', 
            scholar: 'https://scholar.google.com/citations?hl=en&user=HMnjBk0AAAAJ',
            github: 'https://github.com/ohsngjun'  
        },
        { 
            name: 'Gyeongjin Kang', 
            img: process.env.PUBLIC_URL + '/team/GJK.jpg',
            desc: '2024.03 - Present', 
            email: 'ggggjin99@skku.edu',
            homepage: 'https://gynjn.github.io/info/', 
            scholar: 'https://scholar.google.com/citations?user=iyQ16vIAAAAJ&hl=en',
            github: 'https://github.com/Gynjn' 
        },
        { 
            name: 'Dongheok Park', 
            img: process.env.PUBLIC_URL + '/team/DHP.jpg',
            desc: '2024.03 - Present',
            email: 'leao8869@skku.edu', 
            scholar: 'https://scholar.google.com/citations?user=UUtpFKgAAAAJ&hl=ko&oi=ao',
            github: 'https://github.com/DHPark98'  
        },
        { 
            name: 'Hyun-kyu Ko', 
            img: process.env.PUBLIC_URL + '/team/HKK.jpeg',
            desc: '2024.03 - Present',
            email: 'laniko@skku.edu', 
            scholar: 'https://scholar.google.com/citations?hl=ko&user=lsi-8-QAAAAJ',
            github: 'https://github.com/Ko-Lani'  
        },
        { 
            name: 'Jisang Yoo', 
            img: process.env.PUBLIC_URL + '/team/JSY.jpg',
            desc: '2024.03 - Present',
            email: 'jisang1528@skku.edu', 
            scholar: '',
            github: 'https://github.com/Yoo-jisang'  
        },
        { 
            name: 'Hye Jin Jeon', 
            img: process.env.PUBLIC_URL + '/team/HJJ.jpeg',
            desc: '2024.03 - Present',
            email: 'hyejin9877@skku.edu', 
            scholar: '',
            github: 'https://github.com/jeonhhyejin'  
        },
        { 
            name: 'Youbin Kim', 
            img: process.env.PUBLIC_URL + '/team/YBK.jpg',
            desc: '2024.09 - Present',
            email: 'ybin108@skku.edu', 
            scholar: 'https://scholar.google.com/citations?hl=en&user=RUiA8-wAAAAJ',
            github: 'https://github.com/Ubin108'  
        },
        { 
            name: 'Ji Hyeon Park', 
            img: process.env.PUBLIC_URL + '/team/JHP.jpg',
            desc: '2024.09 - Present',
            email: 'fairytale@skku.edu', 
            scholar: '',
            github: 'https://github.com/Kanadae'  
        },
        { 
            name: 'Seungryong Lee', 
            img: process.env.PUBLIC_URL + '/team/SRL.jpg',
            desc: '2024.09 - Present',
            email: 'leejicb@skku.edu', 
            scholar: '',
            github: 'https://github.com/lms20031'  
        },
        { 
            name: 'Eunsoo Lee', 
            img: process.env.PUBLIC_URL + '/team/ESL.jpeg',
            desc: '2024.09 - Present',
            email: 'osoo0628@skku.edu', 
            scholar: '',
            github: 'https://github.com/esleeo'  
        },
        { 
            name: 'Jinho Park', 
            img: process.env.PUBLIC_URL + '/team/JHP.jpeg',
            desc: '2025.03 - Present',
            email: 'jinho99@.skku.edu', 
            scholar: '',
            github: 'https://github.com/zinosii'
        },
        { 
            name: 'Seungkwon Yang', 
            img: process.env.PUBLIC_URL + '/team/SKY.jpg',
            desc: '2025.03 - Present',
            email: 'hkjo0908@skku.edu', 
            scholar: '',
            github: 'https://github.com/yang-gwon2'
        },
        { 
            name: 'Woojeong Baek', 
            img: process.env.PUBLIC_URL + '/team/WJB.jpeg',
            email: 'bwj2800@skku.edu',
            desc: '2025.03 - Present', 
            scholar: '',
            github: 'https://github.com/bwj2800'   
        },
    ];

    const undergraduateStudents = [
        { 
            name: 'Minseo Lee', 
            img: process.env.PUBLIC_URL + '/team/MSL.jpg',
            email: 'lms20031@skku.edu', 
            scholar: '',
            github: 'https://github.com/lms20031'   
        },
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
            current: ''
        },
        { 
            name: 'Namgyu Kang', 
            desc: 'MS, 2022.03 - 2024.08',
            current: 'PhD student at V-Lab, Yonsei'
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
            current: ''
        }
    ];

    return (
        <div className="team-page">
            <section>
                <h2>Principal Investigator</h2>
                <div className="profile">
                    <div className="member">
                        <img
                            src={process.env.PUBLIC_URL + '/team/epark.jpg'}
                            alt="Prof. Eunbyung Park"
                            className="profile-img"
                        />
                        
                        <p>Eunbyung Park</p>
                        <div className='bio'>
                            <a href="mailto:epark@skku.edu">
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
                    <div className="details">
                        <p className="prof-intro">
                            <strong>Education</strong>
                            <ul>
                                <li>Ph.D., Computer Science at University of North Carolina at Chapel Hill, 2014.09 - 2019.12</li>
                                <li>M.S., Computer Science at Seoul National University, 2009.03 - 2011.02</li>
                                <li>B.S., Computer Science at Kyung Hee University, 2002.03 - 2009.02</li>
                            </ul>
                            <strong>Work Experience</strong>
                            <ul>
                                <li>Associate Professor, <a href="https://ice.skku.edu/eng_ice/programs/departments/elec_intro.do" target="_blank">SKKU</a>, 2021.02 - Present</li>
                                <li>Applied Scientist, <a href="https://msturing.org" target="_blank">Microsoft Project Turing</a>, 2020.09 - 2021.02</li>
                                <li>Research Scientist, <a href="http://nuro.ai/" target="_blank">Nuro</a>, 2019.06 - 2020.08</li>
                                <li>Research Intern, <a href="https://deepmind.com/" target="_blank">Google DeepMind</a>, 2018.06 - 2018.10 </li>
                                <li>Research Intern, <a href="https://www.microsoft.com/en-us/research/" target="_blank">Microsoft Research</a>, 2017.06 - 2017.08</li>
                                <li>Research Intern, <a href="http://www.adobe.com/technology.html" target="_blank">Adobe Research</a>, 2016.06 - 2016.08</li>
                                <li>Research Intern, <a href="https://www.hp.com/us-en/hp-labs.html"  target="_blank">HP Labs</a>, 2015.06 - 2015.08</li>
                            </ul>
                        </p>
                        
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
                            <p id='desc'>{student.desc}</p>
                            <div className="student-links">
                                {student.email && <a href={`mailto:${student.email}`}><i className="fa fa-envelope-o" style={{ fontSize: '24px', color: 'black' }}></i></a>}
                                {student.homepage && <a href={student.homepage}><i className="fa fa-home" style={{ fontSize: '24px', color: 'black' }}></i></a>}
                                {student.scholar && <a href={student.scholar}><i className="ai ai-google-scholar" style={{ fontSize: '24px', color: 'black' }}></i></a>}
                                {student.github && <a href={student.github}><i className="fa fa-github" style={{ fontSize: '24px', color: 'black' }}></i></a>}
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
                            <p id='desc'>{student.desc}</p>
                            <div className="student-links">
                                {student.email && <a href={`mailto:${student.email}`}><i className="fa fa-envelope-o" style={{ fontSize: '24px', color: 'black' }}></i></a>}
                                {student.homepage && <a href={student.homepage}><i className="fa fa-home" style={{ fontSize: '24px', color: 'black' }}></i></a>}
                                {student.scholar && <a href={student.scholar}><i className="ai ai-google-scholar" style={{ fontSize: '24px', color: 'black' }}></i></a>}
                                {student.github && <a href={student.github}><i className="fa fa-github" style={{ fontSize: '24px', color: 'black' }}></i></a>}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section>
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
            </section>


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
