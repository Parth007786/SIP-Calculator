import { useContext } from "react";
import { SipContext } from "./SipContext";

const InputForm = () =>{
    const { investment, setInvestment, rate, setRate, duration, setDuration} = useContext(SipContext);

    return(
        <form className="input-form">
            <div className="form-group">
                <label>Monthly Investment (₹) :</label>
                <input type="number" value={investment} onChange={(e) => setInvestment(e.target.value)} />
            </div>
            <div className="form-group">
                <label>Annual Rate of Return (%) :</label>
                <input type="number" value={rate} onChange={(e)=> setRate(e.target.value)} />
            </div>
            <div className="form-group">
                <label>Duration (Years) :</label>
                <input type="number" value={duration} onChange={(e) => setDuration(e.target.value)} />
            </div>
        </form>
    )
}
export default InputForm;