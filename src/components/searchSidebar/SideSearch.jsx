import React from 'react'
import "./sidesearch.css"
const SideSearch = (props) => {
    return (
    <>
        <div className="sideSearch-sec">
        <div className="search-cont">
            <div className="search-title">
                <b>SEARCH</b>
                <img src="images/cancel.png" alt="cancel" onClick={()=>props.sideSearchView(false)} />
            </div>
            <div className="search-box">
                <input type="text" placeholder='Search for :' />
                <div className="search-icon-img">
                    <img src="images/search-light.png" alt="search" />
                </div>
            </div>
            <div className="search-text">
                Find your product with fast search. Enter some keyword such as dress, jacket etc.
            </div>
        </div>
        </div>
    </>
    )
}

export default SideSearch 