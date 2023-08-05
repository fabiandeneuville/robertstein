import robert from '../assets/images/robert_stein.jpg';

function Biographie(){
    return (
        <div>
            <div style={{overflow: 'hidden', border: '1px solid #333', maxWidth: '200px', maxHeight: '200px', borderRadius: '50%'}}>
                <img style={{width: '100%', height: '100%', objectFit: 'cover'}} src={robert} alt="Porträt von Robert Stein" />
            </div>
        </div>
    )
}

export default Biographie;