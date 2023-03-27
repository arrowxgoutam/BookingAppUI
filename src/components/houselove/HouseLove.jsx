import React from 'react'

const HouseLove = () => {
  return (
    <div className='house'>
        <div className="container">
            <div className="housetitle">
                <h1>Homes guests love</h1>
            </div>
            <div className="houseList">
                <div className="houseItem">
                    <img src="https://cf.bstatic.com/xdata/images/hotel/square600/421852968.webp?k=f3889222c82f4a8e3783dddb5f1cc04d6140eeb2d5cb8297817a15aacfe4d191&o=&s=1" alt="" />
                    <h1 className='houseItemTitle'>3 Epoques Apartments by Prague Residences</h1>
                    <p className="houseLocation">Prague 1, Czech Republic, Praha 1</p>
                    <p className="housePrice">Starting from <span>USD 100</span></p>
                    <div className="rating">
                        <button>4.9</button>
                        <span>Excellent</span>
                    </div>
                </div>
                <div className="houseItem">
                    <img src="https://cf.bstatic.com/xdata/images/hotel/square600/421853145.webp?k=140bfc6c54ee753d4a748ee7b5a86c00c988e6fc9bb340c87172ead66a3ea9d5&o=&s=1" alt="" />
                    <h1 className='houseItemTitle'>6 Contaients Apartments by Prague Residences</h1>
                    <p className="houseLocation">Prague 1, Czech Republic, Prague</p>
                    <p className="housePrice">Starting from <span>USD 180</span></p>
                    <div className="rating">
                        <button>4.0</button>
                        <span>Very Good</span>
                    </div>
                </div>
                <div className="houseItem">
                    <img src="https://cf.bstatic.com/xdata/images/hotel/square600/87428762.webp?k=9a065fcd92168145d8c8358701662c76793535597b678efc8f6921c8e3c188e6&o=&s=1" alt="" />
                    <h1 className='houseItemTitle'>7 Seasons Apartments Budapest</h1>
                    <p className="houseLocation">06. Terézváros, Hungary, Budapest</p>
                    <p className="housePrice">Starting from <span>USD 95</span></p>
                    <div className="rating">
                        <button>4.9</button>
                        <span>Excellent</span>
                    </div>
                </div>
                <div className="houseItem">
                    <img src="https://cf.bstatic.com/xdata/images/hotel/square600/95058973.webp?k=979587fd2ac8f7777a34758264d557eef57d0e98e58bdaeb121f5b968a20f810&o=&s=1" alt="" />
                    <h1 className='houseItemTitle'>Numa | Vita Apartments Budapest</h1>
                    <p className="houseLocation">Fortezza da Basso, Italy, Florence</p>
                    <p className="housePrice">Starting from <span>USD 100</span></p>
                    <div className="rating">
                        <button>4.9</button>
                        <span>Excellent</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HouseLove