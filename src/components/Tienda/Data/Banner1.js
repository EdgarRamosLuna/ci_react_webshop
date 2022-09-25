import React from 'react'
import { Banner } from '../../../styles/Home'

const Banner1 = (props) => {
const {img, pos, mb} = props;
  return (
    <Banner img={img} pos={pos} mb={mb}>
        <div className='container'>
            
        </div>
    </Banner>
  )
}

export default Banner1