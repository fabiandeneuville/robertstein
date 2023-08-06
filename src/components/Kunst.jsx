import { useState } from "react";
import { pictures } from "../assets/data/pictures";
import { Carousel } from "react-bootstrap";
import CustomModal from "./Modal";

function Kunst(){

    const [isModalOpened, setIsModalOpened] = useState(false);
    const [currentImg, setCurrentImg] = useState({path: null, title: null, description: null});

    const openModal = (picture) => {
        setIsModalOpened(true);
        showPicture(picture);
    };

    const closeModal = () => {
        setIsModalOpened(false);
        hidePicture();
    };

    const showPicture = (picture) => {
        setCurrentImg({
            path: picture.lg,
            title: picture.title,
            description: picture.description
        });
    };

    const hidePicture = () => {
        setCurrentImg({path: null, title: null, description: null})
    }

    return (
        <div>
            <Carousel>
                {pictures.map((picture, index) => {
                    return (
                        <Carousel.Item key={index}>
                            <CustomModal
                            title={currentImg.title ? currentImg.title : null}
                            description={currentImg.description ? currentImg.description : null}
                            image={currentImg.path ? currentImg.path : null}

                            show={isModalOpened}
                            onHide={closeModal}
                            />
                            <img
                            className="carousel-img"
                            srcSet={`${picture.lg} 767w, ${picture.sm} 991w, ${picture.md}`}
                            sizes="(max-width: 767px) 767px, (max-width: 991px) 991px, 100vw"
                            src={`${picture.lg}`}
                            alt={`${picture.title} - ${picture.description}`}
                            onClick={() => openModal(picture)}
                            />
                            <Carousel.Caption className="carousel-caption">
                                <p>{picture.title} - {picture.description}</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    )
                })}
            </Carousel>
        </div>
    )
}

export default Kunst;