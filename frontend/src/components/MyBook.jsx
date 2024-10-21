import HTMLFlipBook from 'react-pageflip';
import Page from './Page';
import Cover from './pages/Cover/Cover';
import coverImg from '../assets/cover.png';
import EndImg from '../assets/last-page.png';
import FirstPage from './pages/Hero/FirstPage';
import Skills from './pages/Skills/Skills';
import Services from './pages/Services/Services';
import About from './pages/About/About';
import Projects from './pages/Projects/Projects';

import ProjectImg1 from '../assets/projects/datasoft-website.jpg';

const ProjectData=[
    {
    name:"Data Soft Company",
    description:"Complete responsive website using BootStrap js",
    image: ProjectImg1,
    previewLink: " https://lucent-marshmallow-ab1659.netlify.app/"
    }
]

function MyBook(props) {
    return (
        <HTMLFlipBook width={600} height={700} showCover="true">
            <Page number={1}>
                 <Cover coverImg={coverImg} title="My
                 Portfolio" />
            </Page>
            <Page number={2}>
                 <FirstPage />
            </Page>
            <Page number={3}>
                 <Skills />
            </Page>
            <Page number={4}>
                 <Services />
            </Page>
            <Page number={5}>
                 <About />
            </Page>
            <Page number={6}>
                 <Projects ProjectData={ProjectData}/>
            </Page>
            <Page number={7}>
            <Cover coverImg={EndImg} title="Thank You" />
            </Page>
                
        </HTMLFlipBook>
    );
}

export default MyBook;