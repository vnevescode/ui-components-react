import React from 'react'
import './Cards.styles.css'

const Cards = () => {
  return (
    <>
        <div className="cards">
            {/* A card with given width */}
            <div className="cards__item">
                {'Card 1'}
            </div>
            {/* Repeat other cards */}
            <div className="cards__item">
                {'Card 2'}
            </div>
            <div className="cards__item">
                {'Card 3'}
            </div>
            <div className="cards__item">
                {'Card 4'}
            </div>
            <div className="cards__item">
                {'Card 5'}
            </div>
            <div className="cards__item">
                {'Card 6'}
            </div>
            <div className="cards__item">
                {'Card 7'}
            </div>
            <div className="cards__item">
                {'Card 8'}
            </div>
        </div>
    </>
  )
}

export default Cards