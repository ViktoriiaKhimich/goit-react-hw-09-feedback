import styles from './FeedbackOptions.module.css'
import PropTypes from 'prop-types';

const FeedbackOptions = ({options}) => {
    const buttonElements = options.map(({name, onClick, id})=> {
        return <button key={id} className={styles.btn} onClick={onClick}>{name}</button>
    })
    return ( 
        <>
        {buttonElements}
        </>
        
     );
}

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.shape(
        {
            name: PropTypes.string.isRequired,
            id: PropTypes.string.isRequired,
        }
    ).isRequired)
}

export default FeedbackOptions;