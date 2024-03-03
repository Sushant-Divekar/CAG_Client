import React from 'react'
import './MtoP.scss'
const MtoP = () => {
  return (
    <>
      <div className='circle'></div> {/* Circle as fixed background */}
      <div className='rectangle'></div>
      <div className='MtoPdiv'>
        <div className='MtoPTitle'>
          <p className='MtoPtext'>Predict Your Percentile From Your Marks </p>
        </div>
        <input className='marksInput'
           type='text'
           placeholder='Enter Your Marks'
        />
        <div className='PercentileOp'>

        </div>
      </div>
    </>
  )
}

export default MtoP
