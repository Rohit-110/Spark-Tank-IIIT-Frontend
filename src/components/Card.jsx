import React from 'react'
import '../index.css'
import { Profiler } from 'react'
const Card = ({team, status, prof , org , isverified}) => {
  return (
    <>
        <table className='flex flex-col justify-evenly w-full bg-orange-300 rounded-3xl border-x-yellow-800 inline-table  '>
            <tr className='flex flex-row justify-between m-1 '>
                <td className='text-2xl p-2 '>Team Name :<span className='text-white'> { team}</span> </td>
                <td className='text-2xl p-2'>Status :<span className="text-red-500"> {status}</span> </td>
            </tr>
            <tr className='flex flex-row justify-between m-1 text-nowrap'>
                <td className='text-2xl   p-2 '>Professor: <span className='text-white'> { prof }</span> </td>
                <td className='text-2xl  p-2 '>Organisation :<span className='text-white'> { org }</span> </td>
            </tr>   
        </table>
    </>
  )
}

export default Card
