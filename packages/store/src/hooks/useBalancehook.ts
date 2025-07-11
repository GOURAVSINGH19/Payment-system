import { useRecoilValue } from "recoil"
import { balanceAtom } from "../atom/balance"
const useBalance = () => {
    const value = useRecoilValue(balanceAtom)
    return (
        value
    )
}

export default useBalance