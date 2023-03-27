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
import { useNavigate } from 'react-router-dom';

const Header = ({type}) => {
    const [destination, setDestination] = useState("");
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

    const navigate = useNavigate()


    const handleOption = (name, operation) => {
        setOptions((prev) => {
            return {
                ...prev,
                [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
            };
        });
    };

    const handleSearch = () => {
        navigate("/hotels", {state:{ destination, date, options }})
    }


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
           { type !=="list" &&
           <>
           <h1 className="headerTitle">
                Find your next stay
            </h1>
            <p className="headerDesc">
                Search deals on hotels, homes, and much more...
            </p>
            <div className="headerSearch">
                <div className="headerSearchItem">
                    <FontAwesomeIcon icon={faBed} className="headerIcon" />
                    <input 
                        type="text" 
                        placeholder='Where are you going?' 
                        className='headerSearchInput' 
                        onChange={e=>setDestination(e.target.value)}
                        />
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
                    minDate={new Date()}
                    />}
                </div>
                <div className="headerSearchItem">
                    <FontAwesomeIcon icon={faPerson} className="headerIcon" />
                    <span onClick={()=>setOpenOptions(!openOptions)} className="headerSearchText">{`${options.adult} Adult : ${options.children} Children : ${options.room} Room`}</span>
                   { openOptions && <div className="options">
                        <div className="optionItem">
                            <span className="optionText">Adult</span>
                            <div className="optionContainer">
                                <button disabled={options.adult <= 1} className="optionCunterButton" onClick={()=>handleOption("adult", "d")}>-</button>
                                <span className='optionCunterNumber'>{options.adult}</span>
                                <button className="optionCunterButton" onClick={()=>handleOption("adult", "i")}>+</button>
                            </div>
                        </div>
                        <div className="optionItem">
                            <span className="optionText">Children</span>
                            <div className="optionContainer">
                                <button disabled={options.children <= 0} className="optionCunterButton" onClick={()=>handleOption("children", "d")}>-</button>
                                <span className='optionCunterNumber'>{options.children}</span>
                                <button className="optionCunterButton" onClick={()=>handleOption("children", "i")}>+</button>
                            </div>
                        </div>
                        <div className="optionItem">
                            <span className="optionText">Room</span>
                            <div className="optionContainer">
                                <button disabled={options.room <= 1} className="optionCunterButton" onClick={()=>handleOption("room", "d")}>-</button>
                                <span className='optionCunterNumber'>{options.room}</span>
                                <button className="optionCunterButton" onClick={()=>handleOption("room", "i")}>+</button>
                            </div>
                        </div>
                        
                    </div>}
                </div>
                <div className="headerSearchItem">
                    <button className="headerSerchBtn" onClick={handleSearch}>
                        Search
                    </button>
                </div>
            </div>
            </>}
        </div>
    </div>
  )
}

export default Header