
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import { useLocation } from 'react-router-dom'
import { useState } from 'react'


import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import SearchItem from '../components/SearchItem'

export default function List() {




  return (
    <div>
      <Navbar/>
      <Header type="list"/>
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
              <h1 className="listTitle">Search</h1>
              <div className="listItem">
                <label htmlFor="dest">Destination</label>
                <input type="text" placeholder="{destination}"/>
                </div>
                
              <div className="listItem">
                <div className="listOptions">
                <label htmlFor="option">Options</label>
                  <div className="listOptionItem">
                    <span className="listOptiontext">Min Price <small>per night</small></span>
                    <input type="text" className="listItemInput" />
                  </div>
                  <div className="listOptionItem">
                    <span className="listOptiontext">Max Price <small>per night</small></span>
                    <input type="text" className="listItemInput" />
                  </div>
                 
                </div>
                
              </div>
              <button>Search</button>
          </div>
          <div className="listResult">
            <SearchItem/>
          
          </div>
        </div>
      </div>
    </div>
  )
}
