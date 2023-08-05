import backgroundLG from '../assets/images/IMG_1181_lg.jpg';
import backgroundMD from '../assets/images/IMG_1181_md.jpg';
import backgroundSM from '../assets/images/IMG_1181_sm.jpg';
import { Container } from 'react-bootstrap';
import Article from './Article';
import Biographie from './Biografie';
import Kunst from './Kunst';

function Main(){
    return (
        <main className="main-container">
            <img
                srcSet={`${backgroundLG} 767w, ${backgroundSM} 991w, ${backgroundMD}`}
                sizes="(max-width: 767px) 767px, (max-width: 991px) 991px, 100vw"
                src={`${backgroundLG}`}
                alt="Gemälde, das eine ländliche Landschaft darstellt"
                className="main-image"
            />
            <Container className='p-2 pt-5'>
                <Article
                id={"biografie"}
                title={"Biografie"}
                >
                    <Biographie/>
                </Article>
                <Article
                id={"kunst"}
                title={"Kunst"}
                >
                    <Kunst/>
                </Article>
                <Article
                id={"artikelUndAusstellungen"}
                title={"Artikel und Ausstellungen"}
                />
            </Container>
        </main>
    )
}

export default Main;