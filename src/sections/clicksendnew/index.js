import React from 'react'
import NewBanner from './newbanner'
import OurFleet from './ourfleet'
import TotalDrivers from './totaldrivers'
import ForCard from './forcard'

const ClickNewSend = () => {
  return (
    <React.Fragment>
   <NewBanner/>
   <OurFleet/>
   <TotalDrivers/>
   <ForCard/>
    </React.Fragment>
  )
}

export default ClickNewSend