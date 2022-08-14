import React, { useContext, useState } from "react";

const AppContext = React.createContext()

const AppProvider = ({children})=>{

    const [billAmount, setBillAmount] = useState();
    const [tipPercent, setTipPercent] = useState();
    const [people, setpeople] = useState()
    const [tipAmount, setTipAmount] = useState(0)
    const [totalBill, setTotalBill] = useState(0);
    const [alert, setAlert] = useState({show:false, msg:''})


            let numBill = parseInt(billAmount);
            let numTip = parseInt(tipPercent)
            let numpeople = parseInt(people)

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(!billAmount || !tipPercent || !people){
            showAlert(true, 'Please out all The field')
            removeAlert();

            
        }else {
            const tip =  ((numBill * (numTip/100))/ numpeople);
            setTipAmount(tip)
            const totalPerPerson = ((numBill/numpeople) + tip);
            setTotalBill(totalPerPerson);
            

            
            
            
        

        }
    }

    const showAlert = (show=false, msg='') =>{
        setAlert({show,msg})
    }

    const removeAlert= () =>{
        const timeOut = setTimeout(()=>{
            showAlert();

        },3000)
        return () => clearTimeout(timeOut);
    }

    const reset = ()=>{
        setBillAmount()
        setTipPercent()
        setpeople()
        setTotalBill(0)
        setTipAmount(0)

    }
    



    return <AppContext.Provider value={{billAmount,setBillAmount,tipPercent,setTipPercent,people,setpeople,handleSubmit,
        numBill,numTip,numpeople,totalBill,tipAmount,alert,reset
    }}>{children}</AppContext.Provider>
}

export const useGlobalContext = ()=>{
    return useContext(AppContext)
}

export {AppContext,AppProvider}