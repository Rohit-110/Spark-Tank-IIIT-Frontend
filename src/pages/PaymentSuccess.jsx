import { useSearchParams } from "react-router-dom"
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom';
import { Context } from "..";
import useContext from 'react';

const PaymentSuccess = () => {
    const search = useSearchParams()[0]
    const reference_num = search.get("reference");
    const {isAuthenticated}= useContext(Context);
    if(!isAuthenticated)window.location.href = '/';
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen">
        <div className=" flex flex-col items-center justify-center">
            <span className=" font-bold text-4xl ">Form Submitted Succcessfully</span>
            <p>Reference Number : {reference_num}</p>
        </div>
        <div className="flex flex-col items-center mt-6">
          <Link to='/mysubmission'>
            <Button className='m-16 hover:bg-blue-500'  variant="outlined">View Submission</Button>  
          </Link>
        </div>
      </div>
    </>
  )
}

export default PaymentSuccess