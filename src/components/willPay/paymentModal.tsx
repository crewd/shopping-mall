import { ReactChild, ReactNode } from "react"
import { createPortal } from "react-dom"

const ModalPortal = ({ children }: { children: ReactChild }) => {
  return createPortal(children, document.getElementById('modal')!)
}

const PaymentModal = ({
  show, proceed, cancel
}: {
  show: boolean,
  proceed: () => void,
  cancel: () => void
}) => {
  return show ? (
    <ModalPortal>
      <div>
        <p>결제 하시겠습니까?</p>
        <div>
          <button onClick={proceed}>예</button>
          <button onClick={cancel}>아니오</button>
        </div>
      </div>
    </ModalPortal>
  ) : null
}

export default PaymentModal