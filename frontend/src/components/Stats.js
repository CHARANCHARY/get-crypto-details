import React from 'react'

export default function Stats() {
  return (
    <div className='stat-container'>
        <div className='percent-stat'>
            <div><h2>0.18%</h2></div>
            <div><h5>3 Mins</h5></div>
        </div>
        <div className='percent-stat'>
            <div><h2>3.11%</h2></div>
            <div><h5>3 Hour</h5></div>
        </div>
        <div className='stat-result'>
            <h4>Best Price to Trade</h4>
            <span>₹ 20,99,361</span>
            <h6>Average BTC/INR net price including commission</h6>
        </div>
        <div className='percent-stat'>
            <div><h2>83.5%</h2></div>
            <div><h5>30 Day</h5></div>
        </div>
        <div className='percent-stat'>
            <div><h2>02.48%</h2></div>
            <div><h5>2 Days</h5></div>
        </div>
    </div>
  )
}
