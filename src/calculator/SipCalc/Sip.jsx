import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Sip() {
  const [cost, setCost] = useState(4000);
  const [Interest, setInterest] = useState(12);
  const [Tenure, setTenure] = useState(10);
  const [Fvalue, setFvalue] = useState(0);
  const [TotalIntrest, setTotalIntrest] = useState(0);
  const [TotalAmount, setTotalAmount] = useState(0);

  const calculateSip = () => {
    if (
      isNaN(cost) ||
      cost <= 0 ||
      isNaN(Interest) ||
      Interest <= 0 ||
      isNaN(Tenure) ||
      Tenure <= 0
    ) {
      return { error: "Invalid input parameters" };
    }
    const futureValue = calculateFutureValue(cost, Interest, Tenure);

    const formattedFutureValue =
      Math.round(futureValue).toLocaleString(undefined);
    // console.log(`Future Value: ${formattedFutureValue}`);
    setFvalue(formattedFutureValue);

    const Investedamount = cost * 12 * Tenure;
    setTotalAmount(Math.round(Investedamount).toLocaleString(undefined));
    // console.log(Investedamount)

    const EstReturns = futureValue - Investedamount;
    setTotalIntrest(Math.round(EstReturns).toLocaleString(undefined));
    // console.log(EstReturns.toFixed(0))
  };

  function calculateFutureValue(cost, Interest, Tenure) {
    const monthlyInterestRate = Interest / 12 / 100;
    const numberOfMonths = Tenure * 12;

    const futureValue =
      cost *
      ((Math.pow(1 + monthlyInterestRate, numberOfMonths) - 1) /
        monthlyInterestRate) *
      (1 + monthlyInterestRate);

    return futureValue;
  }

  const handelInputValue = (e) => {
    setCost(e.target.value);
  };
  const handleSliderChange = (cost) => {
    setCost(cost);
  };

  const handelIntrestChange = (Interest) => {
    setInterest(Interest.target.value);
  };

  const handleIntrestSliderChange = (Interest) => {
    setInterest(Interest);
  };

  const handelTenureChange = (Tenure) => {
    setTenure(Tenure.target.value);
  };

  const handleTenureSliderChange = (Tenure) => {
    setTenure(Tenure);
  };

  useEffect(() => {
    calculateSip();
  }, [cost, Interest, Tenure]);
  return (
    <>
      <div className="p-4 w-screen h-screen bg-zinc-100">
        <div className="text-2xl font-bold text-gray-500 flex gap-2">
          <h2>Navi </h2>
          <h2> &gt;</h2>
          <Link to="/">
            <h2> Calculator</h2>
          </Link>
          <h2> &gt;</h2>
          <h2> Calculate SIP Returns</h2>
        </div>
        <h1 className="text-5xl font-bold text-center p-2 m-2">
          Calculate SIP Returns
        </h1>
        <div className="flex justify-center items-center w-full mt-10">
          <div className="w-1/2 p-4 m-4 bg-neutral-200 ">
            <div className="flex justify-between items-center">
              <h3 className="text-xl">Monthly Investment</h3>
              <div className="flex justify-center items-center h-10 border-2 border-gray-600 rounded w-1/5 p-1 gap-1 hover:cursor-text bg-stone-300">
                <p className="font-bold ">₹</p>
                <Input
                  type={"number"}
                  className={
                    "[&::-webkit-inner-spin-button]:appearance-none [appearance:textfield]"
                  }
                  value={cost}
                  onChange={handelInputValue}
                />
              </div>
            </div>
            <div className="p-4 m-2 flex justify-end w-full">
              <Slider
                defaultValue={[10000]}
                max={2000000}
                step={1000}
                className={"w-1/3"}
                value={[cost]}
                onValueChange={handleSliderChange}
              />
            </div>
            {/* 22 */}
            <div className="flex justify-between items-center">
              <h3 className="text-xl">Expected return rate (p.a)</h3>
              <div className="flex justify-between  items-center h-10 border-2 border-gray-600 rounded w-1/5 p-1 gap-1 hover:cursor-text bg-stone-300">
                <Input
                  type={"number"}
                  className={
                    "[&::-webkit-inner-spin-button]:appearance-none [appearance:textfield] "
                  }
                  value={Interest}
                  onChange={handelIntrestChange}
                />
                <p className="font-bold">%</p>
              </div>
            </div>
            <div className="p-4 m-2  flex justify-end w-full">
              <Slider
                defaultValue={[12]}
                max={40}
                step={1.5}
                className={"w-1/3"}
                value={[Interest]}
                onValueChange={handleIntrestSliderChange}
              />
            </div>
            {/* 33 */}
            <div className="flex justify-between items-center">
              <h3 className="text-xl">Time Period (Years)</h3>
              <div className="flex justify-center items-center h-10 border-2 border-gray-600 rounded w-1/5 p-0.5 m-1 gap-1 hover:cursor-text bg-stone-300">
                <Input
                  type={"number"}
                  className={
                    "[&::-webkit-inner-spin-button]:appearance-none [appearance:textfield]"
                  }
                  value={Tenure}
                  onChange={handelTenureChange}
                />
                <p className="font-bold">Years</p>
              </div>
            </div>
            <div className="p-4 m-2  flex justify-end w-full">
              <Slider
                defaultValue={[10]}
                max={30}
                step={1}
                className={"w-1/3"}
                value={[Tenure]}
                onValueChange={handleTenureSliderChange}
              />
            </div>
          </div>
          <div className="w-1/2  flex justify-evenly">
            <div className="font-thin text-xl">
              <p>Invested Amount</p>
              <p>Est. Returns</p>
              <p>Total Value</p>
            </div>
            <div className="font-bold text-xl">
              <p> ₹{TotalAmount}</p>
              <p> ₹{TotalIntrest}</p>
              <p> ₹{Fvalue}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sip;
