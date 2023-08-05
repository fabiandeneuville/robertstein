import PropTypes from 'prop-types';

function Article(props){
    return (
        <article id={props.id} className="p-2 mb-3 ms-auto me-auto w-100 w-md-70 w-lg-50" style={{background: "white", opacity: '0.8', boxShadow: '3px 4px 7px 2px gray'}}>
            <h2 className="border-bottom border-2 h4">{props.title}</h2>
            {props.children}
        </article>
    )
}

Article.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
}

export default Article;