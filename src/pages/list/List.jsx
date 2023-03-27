import React, { useState } from 'react'
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import { useLocation } from 'react-router-dom'
import { format } from 'date-fns'
import { DateRange } from 'react-date-range'

const List = () => {
  const location = useLocation();
  const[destination, setDestination] = useState(location.state.destination);
  const[date, setDate] = useState(location.state.date);
  const[options, setOptions] = useState(location.state.options);

  const[openDate, setOpenDate] = useState(false);

  return (
    <div>
      <Navbar/>
      <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper container">
          <div className="listSearch">
            <h1 className="lsTitle">
              Search
            </h1>
            <div className="lsItem">
              <label>Destination</label>
              <input type="text" placeholder={destination}/>
            </div>
            <div className="lsItem">
              <label>Check-In Date</label>
              <span onClick={()=>setOpenDate(!openDate)}>
              {`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`}
              </span>
              {openDate && (<DateRange 
              onChange={item => setDate([item.selection])}
              minDate={new Date()}
              ranges={date}
              />)}
            </div>
            <div className="lsItem">
              <label htmlFor="Options"></label>
              <div className="lsOptionItem">
                <span className="lsOptionText">Min Price
                <small>Per Night</small>
                </span>
                <input type="text" className="lsOptionInput" />
              </div>
              <div className="lsOptionItem">
                <span className="lsOptionText">Min Price
                <small>Per Night</small>
                </span>
                <input type="text" className="lsOptionInput" />
              </div>
              <div className="lsOptionItem">
                <span className="lsOptionText">Min Price
                <small>Per Night</small>
                </span>
                <input type="text" className="lsOptionInput" />
              </div>
              <div className="lsOptionItem">
                <span className="lsOptionText">Min Price
                <small>Per Night</small>
                </span>
                <input type="text" className="lsOptionInput" />
              </div>
              <div className="lsOptionItem">
                <span className="lsOptionText">Min Price
                <small>Per Night</small>
                </span>
                <input type="text" className="lsOptionInput" />
              </div>
              <div className="lsOptionItem">
                <span className="lsOptionText">Min Price
                <small>Per Night</small>
                </span>
                <input type="text" className="lsOptionInput" />
              </div>
            </div>
          </div>
          <div className="listResult"></div>
        </div>
      </div>
    </div>
  )
}

export default List