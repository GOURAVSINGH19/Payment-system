"use client"

import useBalance from "@repo/store/useBalance"
const Balance = () => {
    const balance = useBalance();
    return (
        balance
    )
}

export default Balance