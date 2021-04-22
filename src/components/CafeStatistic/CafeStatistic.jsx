import {Component} from 'react';

import styles from './CafeStatistic.module.css';

import Section from "../Section";
import FeedbackOptions from '../FeedbackOptions'
import Statistics from "../Statistics"
import Notification from '../Notification'

class CafeStatistic extends Component {

    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    }

    increase = (statName) => {
        this.setState((state)=>{
            const oldValue = state[statName];
            return {
                [statName]: oldValue + 1
            }
        });
    }

    countTotalFeedback = () => {
        const stateValues = Object.values(this.state);
        const totalFeedback = stateValues.reduce((acc, value) => acc + value);
        return totalFeedback;
    }

    countPositiveFeedbackPercentage = () => {
        const total = this.countTotalFeedback()
        const positiveFeedbackPercentage = Math.round(this.state.good * 100 / total); 
        return positiveFeedbackPercentage;
    }
    
    createFeedbackOptions = ()=> {
        const feedbackOptions = [
            {
                id: "01",
                name: "Good",
                onClick: ()=> this.increase("good")
            },
            {
                id: "02",
                name: "Neutral",
                onClick: ()=> this.increase("neutral")
            },
            {
                id: "03",
                name: "Bad",
                onClick: ()=> this.increase("bad")
            },
        ];
        return feedbackOptions;
    }

    render(){
        
        const options = this.createFeedbackOptions();
        const total = this.countTotalFeedback();

        const statisticSection = total ?
        <Statistics {...this.state} total={total} positivePercentage={this.countPositiveFeedbackPercentage()}/> 
        : <Notification message="No feedback given"/>;
        
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
}
 
export default CafeStatistic;