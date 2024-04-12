import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider"
import { useState, useEffect } from "react"
import { NavLink } from "react-router-dom";


function Lumsumcalc() {
  const [cost, setCost] = useState(25000);
  const [Interest, setInterest] = useState(12)
  const [Tenure, setTenure] = useState(10)
  const [mul, setMul] = useState(0)
  const [ereturns, setErturns] = useState(0)
  const [TotalAmount, setTotalAmount] = useState(0)


  const calculateMUL = () => {
    if (isNaN(cost) || cost <= 0 || isNaN(Interest) || Interest <= 0 || isNaN(Tenure) || Tenure <= 0) {
      return { error: 'Invalid input parameters' };
    }
     // Convert the annual interest rate to a decimal
     const annualInterestRateDecimal = Interest / 100;
  
     // Calculate the future value using the compound interest formula
     const futureValue = cost * Math.pow(1 + annualInterestRateDecimal, Tenure);
   
    //  console.log(`After ${Tenure} years, your investment will be worth $${futureValue.toFixed(2)}`);
     setTotalAmount(Math.round(futureValue).toLocaleString(undefined));
    setMul(Math.round(cost).toLocaleString(undefined));
     const eretruns = futureValue - cost;
     setErturns(Math.round(eretruns).toLocaleString(undefined));
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
    calculateMUL();
  }, [cost, Interest, Tenure]);
  return (
    <>
      <div className="p-4 w-screen h-screen bg-zinc-100">
        <div className="text-2xl font-bold text-gray-500 flex gap-2">
        <h2 >Navi </h2>
        <h2> &gt;</h2>
        <NavLink to={"/"}><h2> Calculator</h2></NavLink>
        
        <h2> &gt;</h2>
        <h2> Lumpsum Calculator</h2>
        </div>
        <h1 className="text-5xl font-bold text-center p-2 m-2">
        Lumpsum Calculator
        </h1>
        <div className="flex justify-center items-center w-full mt-10">
          <div className="w-1/2 p-4 m-4 bg-neutral-200 ">
            <div className="flex justify-between items-center">
            <h3 className="text-xl">Total Investment</h3>
            <div className="flex justify-center items-center h-10 border-2 border-gray-600 rounded w-1/5 p-1 gap-1 hover:cursor-text bg-stone-300">
            <p className="font-bold ">₹</p>
            <Input type={"number"} className={"[&::-webkit-inner-spin-button]:appearance-none [appearance:textfield]"} value={cost} onChange={handelInputValue} />
            </div>
            </div>
            <div className="p-4 m-2 flex justify-end w-full" >
            <Slider defaultValue={[10000]} max={1000000} step={50000} className={"w-1/3"} value={[cost]}  onValueChange={handleSliderChange} />
            </div>
            {/* 22 */}
            <div className="flex justify-between items-center">
            <h3 className="text-xl">Expected return rate (p.a)</h3>
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
            <h3 className="text-xl">Loan Tenure (Years)</h3>
            <div className="flex justify-center items-center h-10 border-2 border-gray-600 rounded w-1/5 p-0.5 m-1 gap-1 hover:cursor-text bg-stone-300">
            <Input type={"number"} className={"[&::-webkit-inner-spin-button]:appearance-none [appearance:textfield]"} value={Tenure} onChange={handelTenureChange}/>
            <p className="font-bold">Years</p>
            </div>
            </div>
            <div className="p-4 m-2  flex justify-end w-full" >
            <Slider defaultValue={[12]} max={30} step={5} className={"w-1/3"} value={[Tenure]} onValueChange={handleTenureSliderChange} />
            </div>
          </div>
          <div className="w-1/2  flex justify-evenly">
            <div className="font-thin text-xl">
              <p>Invested Amount</p>
              <p>Est. Returns</p>
              <p>Total Value</p>
            </div>
            <div className="font-bold text-xl">
            <p> ₹{mul}</p>
            <p> ₹{ereturns}</p>
            <p> ₹{TotalAmount}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Lumsumcalc;

