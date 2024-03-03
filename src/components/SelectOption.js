import React from 'react';
import './SelectOption.scss';
import { Link } from 'react-router-dom';

const SelectOption = () => {
  return (
    <>
      <div className='circle'></div> {/* Circle as fixed background */}
      <div className='rectangle'></div>
      <div className='optionsTitleDiv'>
        <p className='optionsTitle'>SELECT OPTION FROM BELOW</p>
      </div>
      <div className='options'>
        <div className='option1'>
          <Link to="/markstopercentile"><p className='optionText'>Predict Your Percentile From Your Marks </p></Link>
        </div>
        <div className='option2'>
          <Link to = "/percentiletocollege"><p className='optionText'>Predict Your College From Your Percentile</p></Link>
        </div>
      </div>
    </>
  )
}

export default SelectOption
