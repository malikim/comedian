import React, {Component} from 'react'
import moment from 'moment'

export default class DateRange extends Component {
  render() {
    const date = "12.12.12"
    return (
      <div className='date-range'>
        <p>daterange: {date}</p>
      </div>
    )
  }
}
