import React from 'react'
import { useLocation, useParams } from 'react-router-dom'

const InstructorDetail = () => {
    // let param = useParams()
    let {id} = useParams()
    console.log({id})
    let {state,pathname} = useLocation()
    console.log({state})
  return (
    <div className='p-3'>

        <p>

            from useParam: I' am instructor- <span className='text-danger fw-bolder'>{id}</span>
        </p>
        <p>

            from useLocation: I' am instructor- <span className='text-danger fw-bolder'>{state.name}</span>
        </p>

        <p>our path is: {pathname}</p>
    </div>
  )
}

export default InstructorDetail