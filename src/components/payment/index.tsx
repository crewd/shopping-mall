import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { checkedCartState } from "../../recoils/cart";
import WillPay from "../willPay";
import PaymentModal from "../willPay/paymentModal";

const Payment = () => {
  const setCheckedCartData = useSetRecoilState(checkedCartState);
  const [modalShow, toggleModal] = useState(false);
  const navigate = useNavigate();

  const showModal = () => {
    toggleModal(true);
  };

  const proceed = () => {
    // 결제 진행
    setCheckedCartData([]);
    navigate('/products', { replace: true })
  }

  const cancel = () => {
    toggleModal(false);
  }

  return (
    <div>
      <WillPay submitTitle="결제하기" handleSubmit={showModal} />
      <PaymentModal show={modalShow} proceed={proceed} cancel={cancel} />
    </div>
  )
}

export default Payment;