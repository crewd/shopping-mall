import { useState } from "react";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { useRecoilState, useSetRecoilState } from "recoil";
import { EXCUTE_PAY } from "../../graphql/payment";
import { getClient, graphqlFetcher } from "../../queryClient";
import { checkedCartState } from "../../recoils/cart";
import WillPay from "../willPay";
import PaymentModal from "./modal";

type PaymentInfos = string[];

const Payment = () => {
  const [checkedCartData, setCheckedCartData] = useRecoilState(checkedCartState);
  const [modalShow, toggleModal] = useState(false);
  const navigate = useNavigate();

  const queryClient = getClient();

  const { mutate: excutePay } = useMutation(
    (payInfos: PaymentInfos) => graphqlFetcher(EXCUTE_PAY, payInfos),
  )

  const showModal = () => {
    toggleModal(true);
  };

  const proceed = () => {
    // 결제 진행
    const payInfos = checkedCartData.map(({ id }) => {
      return id;
    })
    excutePay(payInfos);
    setCheckedCartData([]);
    alert('결제 완료!')
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