import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider"
import { useState, useEffect } from "react"
import { NavLink } from "react-router-dom";


function EMI() {
  const [cost, setCost] = useState(400000);
  const [Interest, setInterest] = useState(8)
  const [Tenure, setTenure] = useState(80)
  const [Emi, setEmi] = useState(0)
  const [TotalIntrest, setTotalIntrest] = useState(0)
  const [TotalAmount, setTotalAmount] = useState(0)


  const calculateEMI = () => {
    if (isNaN(cost) || cost <= 0 || isNaN(Interest) || Interest <= 0 || isNaN(Tenure) || Tenure <= 0) {
      return { error: 'Invalid input parameters' };
    }
      // Convert interest rate to decimal and tenure to months
      const interestRate = Interest / 1200; // Assuming interest is given as an annual rate
      const numOfMonths = Tenure

      // EMI = > (P * R * (1 + R)^N) / ((1 + R)^N - 1)
      const emi = (cost * interestRate) / (1 - Math.pow(1 + interestRate, -numOfMonths));
      // console.log(emi)
      setEmi(Math.round(emi).toLocaleString(undefined))


      // Calculate total amount, total amount of credit, and total interest
    const totalAmount = emi * numOfMonths;
    const totalAmountOfCredit = cost;
    const totalInterest = totalAmount - totalAmountOfCredit;
    // console.group(totalAmount, totalAmountOfCredit, totalInterest)

    setTotalAmount(Math.round(totalAmount).toLocaleString(undefined))
    setTotalIntrest(Math.round(totalInterest).toLocaleString(undefined))
  }
  
  const handelInputValue = (e) => {
    setCost(e.target.value)
  }
  const handleSliderChange = (cost) => {
    setCost(cost);
  };

  const handelIntrestChange = (Interest) => {
    setInterest(Interest.target.value)
  }
  
  const handleIntrestSliderChange = (Interest) => {
    setInterest(Interest);

  }

  const handelTenureChange = (Tenure) => {
    setTenure(Tenure.target.value)
  }

  const handleTenureSliderChange = (Tenure) => {
    setTenure(Tenure);
  }

  useEffect(() => {
    calculateEMI();
  }, [cost, Interest, Tenure]);
  return (
    <>
      <div className="p-4 w-screen h-screen bg-zinc-100">
        <div className="text-xl font-bold text-gray-500 flex gap-2">
        <h2 >Navi </h2>
        <h2> &gt;</h2>
        <NavLink to={"/"}><h2> Calculator</h2></NavLink>
        
        <h2> &gt;</h2>
        <h2> Personal Loan EMI Calculator</h2>
        </div>
        <h1 className="text-5xl font-bold text-center p-2 m-2">
          Personal Loan EMI Calculator
        </h1>
        <div className="flex justify-center items-center w-full mt-10">
          <div className="w-1/2 p-4 m-4 bg-neutral-200 ">
            <div className="flex justify-between items-center">
            <h3 className="text-xl">Loan Amount</h3>
            <div className="flex justify-center items-center h-10 border-2 border-gray-600 rounded w-1/5 p-1 gap-1 hover:cursor-text bg-stone-300">
            <p className="font-bold ">₹</p>
            <Input type={"number"} className={"[&::-webkit-inner-spin-button]:appearance-none [appearance:textfield]"} value={cost} onChange={handelInputValue} />
            </div>
            </div>
            <div className="p-4 m-2 flex justify-end w-full" >
            <Slider defaultValue={[10000]} max={2000000} step={1000} className={"w-1/3"} value={[cost]}  onValueChange={handleSliderChange} />
            </div>
            {/* 22 */}
            <div className="flex justify-between items-center">
            <h3 className="text-xl">Rate of Interest (P.a)</h3>
            <div className="flex justify-between  items-center h-10 border-2 border-gray-600 rounded w-1/5 p-1 gap-1 hover:cursor-text bg-stone-300">
            <Input type={"number"} className={"[&::-webkit-inner-spin-button]:appearance-none [appearance:textfield] "} value={Interest} onChange={handelIntrestChange}/>
            <p className="font-bold">%</p>
            </div>
            </div>
            <div className="p-4 m-2  flex justify-end w-full" >
            <Slider defaultValue={[12]} max={40} step={1} className={"w-1/3"} value={[Interest]} onValueChange={handleIntrestSliderChange}/>
            </div>
            {/* 33 */}
            <div className="flex justify-between items-center">
            <h3 className="text-xl">Loan Tenure (Months)</h3>
            <div className="flex justify-center items-center h-10 border-2 border-gray-600 rounded w-1/5 p-0.5 m-1 gap-1 hover:cursor-text bg-stone-300">
            <Input type={"number"} className={"[&::-webkit-inner-spin-button]:appearance-none [appearance:textfield]"} value={Tenure} onChange={handelTenureChange}/>
            <p className="font-bold">Months</p>
            </div>
            </div>
            <div className="p-4 m-2  flex justify-end w-full" >
            <Slider defaultValue={[12]} max={360} step={1} className={"w-1/3"} value={[Tenure]} onValueChange={handleTenureSliderChange} />
            </div>
          </div>
          <div className="w-1/2  flex justify-evenly">
            <div className="font-thin text-xl">
              <p>Monthly EMI</p>
              <p>Total Interest</p>
              <p>Total Amount</p>
            </div>
            <div className="font-bold text-xl">
            <p> ₹{Emi}</p>
            <p> ₹{TotalIntrest}</p>
            <p> ₹{TotalAmount}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EMI;
