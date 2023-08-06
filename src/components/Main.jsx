import { Container } from 'react-bootstrap';
import Article from './Article';
import Biographie from './Biografie';
import Kunst from './Kunst';

function Main(){
    return (
        <main className="main-container">
            <Container className='p-2 pt-5 pb-5'>
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
            </Container>
        </main>
    )
}

export default Main;