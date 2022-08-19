import React, { useEffect } from 'react'

const Alert = ({show, msg, type, removeAlert, list}) => {
  useEffect(() => {
    const timeOut = setTimeout(() => {
      removeAlert();
    },3000)
    return () => clearTimeout(timeOut);
  },[list])

  return <p className={`alert alert-${type}`}>{msg}</p>
}

export default Alert
