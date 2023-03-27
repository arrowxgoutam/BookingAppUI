import React from 'react'

const PropertyList = () => {
  return (
    <div className='property'>
      <div className="container">
        <div className="propertyTitle">
                <h1>Browse by property type</h1>
            </div>
            <div className="propertyList">
                <div className="pItem">
                    <img src="https://q-xx.bstatic.com/xdata/images/xphoto/300x240/57584488.jpeg?k=d8d4706fc72ee789d870eb6b05c0e546fd4ad85d72a3af3e30fb80ca72f0ba57&o=" alt="" />
                    <h1 className="pTitle">
                        Hotels
                    </h1>
                    <span>3,405 Hotels</span>
                </div>
                <div className="pItem">
                    <img src="https://r-xx.bstatic.com/xdata/images/hotel/300x240/119467716.jpeg?k=f3c2c6271ab71513e044e48dfde378fcd6bb80cb893e39b9b78b33a60c0131c9&o=" alt="" />
                    <h1 className="pTitle">
                    Apartments
                    </h1>
                    <span>28,462 Apartments</span>
                </div>
                <div className="pItem">
                    <img src="https://q-xx.bstatic.com/xdata/images/xphoto/300x240/45450084.jpeg?k=f8c2954e867a1dd4b479909c49528531dcfb676d8fbc0d60f51d7b51bb32d1d9&o=" alt="" />
                    <h1 className="pTitle">
                        Resorts
                    </h1>
                    <span>76,835 Resorts</span>
                </div>
                <div className="pItem">
                    <img src="https://r-xx.bstatic.com/xdata/images/hotel/300x240/100235855.jpeg?k=5b6e6cff16cfd290e953768d63ee15f633b56348238a705c45759aa3a81ba82b&o=" alt="" />
                    <h1 className="pTitle">
                        Villas
                    </h1>
                    <span>2,76,890 Villas</span>
                </div>
             
            </div>
      </div>
    </div>
  )
}

export default PropertyList