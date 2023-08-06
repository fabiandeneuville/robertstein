import Header from "../components/Header";
import Main from "../components/Main";
import Background from "../components/Background";

function Home(){
    return (
        <div className="home">
            <Background/>
            <Header/>
            <Main/>
        </div>
    )
}

export default Home;