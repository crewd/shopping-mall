import { useRecoilState } from "recoil";
import { checkedCartState } from "../../recoils/cart";
import WillPay from "../willPay";

const Payment = () => {
  const [checkedCartData, setCheckedCartData] = useRecoilState(checkedCartState);

  return (
    <WillPay />
  )
}

export default Payment;