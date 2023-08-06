import PropTypes from 'prop-types';
import { Modal } from "react-bootstrap";

function CustomModal(props){
    return (

        <Modal show={props.show} onHide={props.onHide} size='lg'>
            <Modal.Header closeButton>
                {props.title ? props.title : null}
            </Modal.Header>
            <Modal.Body>
                <img className="modal-img" src={props.image ? props.image : null} alt={`${props.title ? props.title : null} - ${props.description ? props.description : null}`} />
            </Modal.Body>
            <Modal.Footer>
                <p className='text-center m-0 p-2'>
                    {props.description ? props.description : null}
                </p>
            </Modal.Footer>
        </Modal>
    )
}

CustomModal.propTypes = {
    title: PropTypes.string,
    show: PropTypes.bool,
    description: PropTypes.string,
    image: PropTypes.string,
    onHide: PropTypes.func
}

export default CustomModal;