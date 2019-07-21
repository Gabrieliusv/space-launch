import React, { Component } from 'react'
import HistorySearch from '../HistorySearch';
import Maps from '../Maps'

class History extends Component {
  constructor(props) {
    super(props);
    this.state = {
      year: ['1961'],
      fromMonth: ['01'],
      toMonth: ['01'],
      fromDay: ['01'],
      toDay: ['01'],
      allYears: [],
      allDays: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'],
      hasInfo: false,
      searchInfo: [""]
    }
  }

  onAllChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  };

  componentDidMount() {
    let date = new Date();
    let thisYear = date.getFullYear();
    let year = 1961
    let years = []
    while (year <= thisYear) {
      years.push(year);
      year++;
    }
    this.setState({ allYears: years });

  };

  submit = () =>
    fetch(`https://launchlibrary.net/1.4/launch/${this.state.year}-${this.state.fromMonth}-${this.state.fromDay}/${this.state.year}-${this.state.toMonth}-${this.state.toDay}?limit=200`)
      .then(responce => responce.json())
      .then(searchInfo => this.setState({
        searchInfo,
        hasInfo: true
      }))
      .catch(error => console.log('parsing error', error))


  render() {
  
    return (
      <div>
          <form className='mt-3 p-3 d-flex justify-content-center'>
            <div className='col-md-2 pt-5'>
              <select className="form-control" name="year" onChange={this.onAllChange}>
                <option value="1961">Year</option>
                {this.state.allYears.map(year => <option key={year}>{year}</option>)}
              </select>
            </div>

            <div className='col-md-2'>
            <h4>From:</h4>
              <select className="form-control mb-2" name="fromMonth" onChange={this.onAllChange}>
                <option value="01">Months</option>
                <option value="01">January</option>
                <option value="02">February</option>
                <option value="03">March</option>
                <option value="04">April</option>
                <option value="05">May</option>
                <option value="06">June</option>
                <option value="07">July</option>
                <option value="08">August</option>
                <option value="09">September</option>
                <option value="10">October</option>
                <option value="11">November</option>
                <option value="12">December</option>
              </select>
              <select className='form-control' name='fromDay' onChange={this.onAllChange}>
                <option value="01">Day</option>
                {this.state.allDays.map(day => <option key={day}>{day}</option>)}
              </select>
            </div>

            <div className='col-md-2'>
            <h4>To:</h4>
              <select className="form-control mb-2" name="toMonth" onChange={this.onAllChange}>
                <option value="01">Months</option>
                <option value="01">January</option>
                <option value="02">February</option>
                <option value="03">March</option>
                <option value="04">April</option>
                <option value="05">May</option>
                <option value="06">June</option>
                <option value="07">July</option>
                <option value="08">August</option>
                <option value="09">September</option>
                <option value="10">October</option>
                <option value="11">November</option>
                <option value="12">December</option>
              </select>
              <select className='form-control' name='toDay' onChange={this.onAllChange}>
                <option value="01">Day</option>
                {this.state.allDays.map(day => <option key={day}>{day}</option>)}
              </select>
            </div>
            <button type="button" className="btn bg-custom mt-5 mb-4" onClick={this.submit}>Search</button>
          </form>
        
        <div className='pb-3'>
          <HistorySearch launches={this.state} />


        </div>
        <Maps launches={this.state}/>
      </div>
    )
  };
}
export default History