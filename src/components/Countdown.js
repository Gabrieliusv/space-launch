import React, { Component } from 'react'

class Countdown extends Component {
  constructor(props) {
    super(props)
    this.state = {
      days: 0,
      hours: 0,
      min: 0,
      sec: 0
    }
  }

  componentDidMount() {
    this.timer = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  tick() {
    let time = this.props.time
    let eventTime = time.split(/\s|,\s|:/);

    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'];
    let eYear = eventTime[2];
    let eMonth = months.indexOf(eventTime[0]);
    let eDay = eventTime[1];
    let eHour = eventTime[3];
    let eMin = eventTime[4];

    let currentDate = Date.now();
    let eTime = new Date(Date.UTC(eYear, eMonth, eDay, eHour, eMin));
    let eventDate = eTime.getTime();

    let remTime = eventDate - currentDate;

    let s = Math.floor(remTime / 1000);
    let m = Math.floor(s / 60);
    let h = Math.floor(m / 60);
    let d = Math.floor(h / 24);

    h %= 24;
    m %= 60;
    s %= 60;

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    this.setState({
      days: d,
      hours: h,
      min: m,
      sec: s
    });

  };

  render() {
    const { days, hours, min, sec } = this.state
    return (
      <div>
        {days < 0 ? <h3 className='custom-c'>Launching now</h3> : <h3 className='custom-c'>Launches in {days} days {hours}:{min}:{sec}</h3>}
      </div>
    )
  }
}

export default Countdown;