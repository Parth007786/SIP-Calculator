import { createContext, useState } from 'react'

export const SipContext = createContext();
export const SipProvider = ({ children }) => {

    const [investment, setInvestment] = useState(0);
    const [rate, setRate] = useState(0);
    const [duration, setDuration] = useState(0);
    const [futureValue, setFutureValue] = useState(0);

    return (
        <SipContext.Provider value={{ investment, setInvestment, rate, setRate, duration, setDuration, futureValue, setFutureValue }}>
            {children}
        </SipContext.Provider>
    )
}
