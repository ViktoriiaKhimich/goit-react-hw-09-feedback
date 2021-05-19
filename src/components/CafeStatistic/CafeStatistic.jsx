import { useState } from 'react';

import styles from './CafeStatistic.module.css';

import Section from "../Section";
import FeedbackOptions from '../FeedbackOptions'
import Statistics from "../Statistics"
import Notification from '../Notification'
import { initialState } from './initialState'

const CafeStatistic = () => {
    const [statistics, setStatistics] = useState(initialState);

    const increase = (statName) => {
        const prevNumber = statistics[statName]
        setStatistics({ ...statistics, [statName]: prevNumber + 1 });
    };

    const countTotalFeedback = () => {
        const stateValues = Object.values(statistics);
        const totalFeedback = stateValues.reduce((acc, value) => acc + value);
        return totalFeedback;
    }

    const countPositiveFeedbackPercentage = () => {
        const total = countTotalFeedback()
        const positiveFeedbackPercentage = Math.round(statistics.good * 100 / total);
        return positiveFeedbackPercentage;
    }

    const createFeedbackOptions = () => {
        const feedbackOptions = [
            {
                id: "01",
                name: "Good",
                onClick: () => increase('good')
            },
            {
                id: "02",
                name: "Neutral",
                onClick: () => increase('neutral')
            },
            {
                id: "03",
                name: "Bad",
                onClick: () => increase('bad')
            },
        ];
        return feedbackOptions;
    }


    const options = createFeedbackOptions();
    const total = countTotalFeedback();

    const statisticSection = total ?
        <Statistics {...statistics} total={total} positivePercentage={countPositiveFeedbackPercentage()} />
        : <Notification message="No feedback given" />;

    return (
        <div className={styles.container}>
            <Section title="Please leave feedback">
                <FeedbackOptions options={options} />
            </Section>
            <Section title="Statistics">
                {statisticSection}
            </Section>
        </div>
    )
}


export default CafeStatistic;