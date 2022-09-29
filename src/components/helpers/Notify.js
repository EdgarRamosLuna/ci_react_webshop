import React from 'react'
import { NotifyS } from '../../styles/Home';

const Notify = (props) => {
  const {children} = props;
  return (
    <NotifyS>
        <div>
            <i className="fa-solid fa-circle-exclamation"></i>
        </div>
        {children}
    </NotifyS>
  )
}

export default Notify