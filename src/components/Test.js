/*
import React from 'react';
import moment from 'moment';

const Countdown = () => {



    let states = {
        days: undefined,
        hours: undefined,
        minutes: undefined,
        seconds: undefined
    };

    componentDidMount()
    {
        this.interval = setInterval(() => {
            const {timeTillDate, timeFormat} = this.props;
            const then = moment(timeTillDate, timeFormat);
            const now = moment();
            const countdown = moment(then - now);
            const days = countdown.format('D');
            const hours = countdown.format('HH');
            const minutes = countdown.format('mm');
            const seconds = countdown.format('ss');

            this.setState({days, hours, minutes, seconds});
        }, 1000);
    }

    if (this.interval) {
        clearInterval(this.interval);
    }


    let {
        days
        ,
        hours
        ,
        minutes
        ,
        seconds
    }

        = states;

    return (
        <div>
            <h1>Countdown</h1>
            <div className="countdown-wrapper">
                <div className="countdown-item">
                    {days}
                    <span>days</span>
                </div>
                <div className="countdown-item">
                    {hours}
                    <span>hours</span>
                </div>
                <div className="countdown-item">
                    {minutes}
                    <span>minutes</span>
                </div>
                <div className="countdown-item">
                    {seconds}
                    <span>seconds</span>
                </div>
            </div>
        </div>
    );


};

export default Countdown;*/
