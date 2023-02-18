import PropTypes from 'prop-types';

const Button = ({ color, text, onClick }) => {
    return <button style={{ backgroundColor: color }} onClick={onClick} className='btn' >{text}</button>
}


Button.defaultProps = {
    color: 'steelblue',
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,
}

export default Button
