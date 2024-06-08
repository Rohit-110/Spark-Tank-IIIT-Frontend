import { useSearchParams } from "react-router-dom"
const PaymentSuccess = () => {
    const search = useSearchParams()[0]
    const reference_num = search.get("reference");
  return (
    <>
        <div className=" flex flex-col items-center justify-center h-screen">
            <span className=" font-bold text-4xl ">Form Submitted Succcessfully</span>
            <p>Reference Number : {reference_num}</p>
        </div>
    </>
  )
}

export default PaymentSuccess