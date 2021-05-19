import PropTypes from 'prop-types';
import { memo } from 'react'

import styles from './Statistics.module.css'

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    return (
        <div className={styles.statistics}>
            <p className={styles.statisticsItem}>Good: {good}</p>
            <p className={styles.statisticsItem}>Neutral: {neutral}</p>
            <p className={styles.statisticsItem}>Bad: {bad}</p>
            <p className={styles.statisticsItem}>Total: {total}</p>
            <p className={styles.statisticsItem}>Positive Feedback: {positivePercentage} %</p>
        </div>
    )
}

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
}


export default memo(Statistics);