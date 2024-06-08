import Button from '@mui/material/Button';
import axios from 'axios';
import Navbar from '../components/Navbar';


const Payment = () => {
    const checkoutHandler= async (amount)=>{

        const {data : {key}} = await axios.get("http://localhost:4000/api/getkey");
        const {data : {orders}} = await axios.post("http://localhost:4000/api/checkout",{
            amount
        })
        const options = {
            "key": key,
            "amount": orders.amount, 
            "currency": "INR",
            "name": "IIIT ALLAHABAD E-CELL",
            "description": "Test Transaction",
            "image": "https://upload.wikimedia.org/wikipedia/en/2/2e/Indian_Institute_of_Information_Technology%2C_Allahabad_Logo.png",
            "order_id": orders.id, 
            "callback_url": "http://localhost:4000/api/paymentverification",
            "prefill": {
                "name": "Gaurav Kumar",
                "email": "gaurav.kumar@example.com",
                "contact": "9000090000"
            },
            "notes": {
                "address": "Razorpay Corporate Office"
            },
            "theme": {
                "color": "#3399cc"
            }
        };
        var razor = new window.Razorpay(options);
        razor.open();
    }

  return (
        <> 
            <Navbar /> 
            <div className="flex flex-col items-center justify-center h-screen">
                <Button className=' m-16' onClick={() => checkoutHandler(5000)} variant="outlined">Pay Now</Button>  
            </div>
        </>
    )
}

export default Payment