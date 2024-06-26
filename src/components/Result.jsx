import { useContext, useEffect } from "react";
import { SipContext } from "./SipContext";

const Result = () => {
    const { investment, rate, duration, futureValue, setFutureValue } = useContext(SipContext);

    useEffect(() => {
        const calculateSip = () =>{
        const monthlyRate = rate / 12 / 100;
        const months = duration * 12;
        const futureValue = investment * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate);
        setFutureValue(futureValue.toFixed(2));
    }

    if (investment && rate && duration) {
        calculateSip();
    }
}, [investment, rate, duration, setFutureValue]);

return (
    <div className="result">
        <h2>Future Value : ₹{futureValue}</h2>
    </div>

);
};

export default Result;