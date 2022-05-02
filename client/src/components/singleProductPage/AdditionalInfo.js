import React from 'react'
import "./singlepage.css"
const AdditionalInfo = (props) => {
  return (
    <>
        <div className="additional-info">
            <div className="additional-info-item hr-check">
                <span>colors</span>
                Green, Red
            </div>
            <div className="additional-info-item">
                <span>sizes</span>
                {props.size}
            </div>
        </div>
    </>
  )
}

export default AdditionalInfo