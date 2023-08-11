"use client";

import { useEffect, useState } from "react";

export const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "KES",
  });
// export const formatMoney = (amount: number | undefined = 0): string => {
//     const options: Intl.NumberFormatOptions = {
//       style: 'currency',
//       currency: 'KES',
//       minimumFractionDigits: 2,
//     };
//     if (amount % 100 === 0) {
//       options.minimumFractionDigits = 0;
//     }
//     const formatter = new Intl.NumberFormat('en-KE', options);
//     return formatter.format(amount);
//   };
  


interface CurrencyProps{
    value?: string | number;
}
   
const Currency:React.FC<CurrencyProps> = ({value}) => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(()=> {
        setIsMounted(true);
    }, [])
    if (!isMounted) {
        return null;
    }
    return ( <div className="font-semibold">
        {formatter.format(Number(value))}
        {/* {formatMoney(value)} */}

    </div> );
}
 
export default Currency;