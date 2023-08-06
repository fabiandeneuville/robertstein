import backgroundLG from '../assets/images/IMG_1181_lg.jpg';
import backgroundMD from '../assets/images/IMG_1181_md.jpg';
import backgroundSM from '../assets/images/IMG_1181_sm.jpg';

function Background(){
    return (
        <img
            srcSet={`${backgroundLG} 767w, ${backgroundSM} 991w, ${backgroundMD}`}
            sizes="(max-width: 767px) 767px, (max-width: 991px) 991px, 100vw"
            src={`${backgroundLG}`}
            alt="Gemälde, das eine ländliche Landschaft darstellt"
            className="main-image"
        />
    )
}

export default Background;