import {useState} from 'react'
// fontawesome 
import { faCalendarDays } from '@fortawesome/free-regular-svg-icons'
import { faBed, faCake, faCar, faPerson, faPlane, faTaxi } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// Date range
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css'; 
import { format } from 'date-fns';

const Header = () => {
    // Date Range
    const [openDate, setOpenDate] = useState(false);
    const [date, setDate] = useState([
        {
          startDate: new Date(),
          endDate: new Date(),
          key: 'selection'
        }
      ]);

      // Open Options
    const [openOptions, setOpenOptions] = useState(false);
    const [options, setOptions] = useState({
        adult: 1,
        children: 0,
        room: 1,
    });

  return (
    <div className="header">
        <div className="container headerContainer">
            <div className="headerList">
                <div className="headerListItem active">
                    <FontAwesomeIcon icon={faBed} />
                    <span>Stays</span>
                </div>
                <div className="headerListItem">
                    <FontAwesomeIcon icon={faPlane} />
                    <span>Flights</span>
                </div>
                <div className="headerListItem">
                    <FontAwesomeIcon icon={faCar} />
                    <span>Car Rentals</span>
                </div>
                <div className="headerListItem">
                    <FontAwesomeIcon icon={faCake} />
                    <span>Attractions</span>
                </div>
                <div className="headerListItem">
                    <FontAwesomeIcon icon={faTaxi} />
                    <span>Airport Taxis</span>
                </div>
            </div>
            <h1 className="headerTitle">
                Find your next stay
            </h1>
            <p className="headerDesc">
                Search deals on hotels, homes, and much more...
            </p>
            <div className="headerSearch">
                <div className="headerSearchItem">
                    <FontAwesomeIcon icon={faBed} className="headerIcon" />
                    <input type="text" placeholder='Where are you going?' className='headerSearchInput' />
                </div>
                <div className="headerSearchItem">
                    <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
                    <span onClick={() => setOpenDate(!openDate)} className="headerSearchText">{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
                    {openDate && <DateRange
                    editableDateInputs={true}
                    onChange={item => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    className="date"
                    />}
                </div>
                <div className="headerSearchItem">
                    <FontAwesomeIcon icon={faPerson} className="headerIcon" />
                    <span className="headerSearchText">{`${options.adult} Adult : ${options.children} Children : ${options.room} Room`}</span>
                    <div className="options">
                        <div className="optionItem">
                            <span className="optionText">Adult</span>
                            <button className="optionCunterButton">-</button>
                            <span className='optionCunterNumber'>1</span>
                            <button className="optionCunterButton">+</button>
                        </div>
                        <div className="optionItem">
                            <span className="optionText">Adult</span>
                            <button className="optionCunterButton">-</button>
                            <span className='optionCunterNumber'>1</span>
                            <button className="optionCunterButton">+</button>
                        </div>
                        <div className="optionItem">
                            <span className="optionText">Adult</span>
                            <button className="optionCunterButton">-</button>
                            <span className='optionCunterNumber'>1</span>
                            <button className="optionCunterButton">+</button>
                        </div>
                        
                    </div>
                </div>
                <div className="headerSearchItem">
                    <button className="headerSerchBtn">
                        Search
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header