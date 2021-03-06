import { createRef, SyntheticEvent, useEffect, useRef, useState } from "react";
import { useRecoilState } from "recoil";
import { CartType } from "../../graphql/cart";
import { checkedCartState } from "../../recoils/cart";
import CartItem from "./item";
import WillPay from "../willPay";
import { useNavigate } from "react-router-dom";

const CartList = ({ items }: { items: CartType[] }) => {
  const [formData, setFormData] = useState<FormData>();
  const [checkedCartData, setCheckedCartData] = useRecoilState(checkedCartState);
  const navigate = useNavigate();
  const formRef = useRef<HTMLFormElement>(null);
  const checkboxRefs = items.map(() => createRef<HTMLInputElement>());

  const handleSubmit = () => {
    if (checkedCartData.length) {
      return navigate('/payment');
    }
    return alert('결제할 대상이 없습니다');
  };

  // 개별 아이템 선택시
  const setAllCheckedFormItems = () => {
    if (!formRef.current) {
      return;
    }
    const data = new FormData(formRef.current);
    const selectedCount = data.getAll('select-item').length;
    const allChecked = (selectedCount === items.length);
    formRef.current.querySelector<HTMLInputElement>('.select-all')!.checked = allChecked

  }

  // select-all 선택시
  const setItemsCheckedFromAll = (targetInput: HTMLInputElement) => {
    const allChecked = targetInput.checked
    checkboxRefs.forEach(inputElem => {
      inputElem.current!.checked = allChecked;
    })
  }

  const handleCheckboxChanged = (e?: SyntheticEvent) => {
    if (!formRef.current) {
      return;
    };

    const targetInput = e?.target as HTMLInputElement;

    if (targetInput && targetInput.classList.contains('select-all')) {
      setItemsCheckedFromAll(targetInput)
    }

    else {
      setAllCheckedFormItems()
    }

    const data = new FormData(formRef.current);
    setFormData(data);
  }

  useEffect(() => {
    checkedCartData.forEach((item) => {
      const itemRef = checkboxRefs.find(ref => ref.current!.dataset.id === item.id);
      if (itemRef) {
        itemRef.current!.checked = true;
      }
    })
    setAllCheckedFormItems()
  }, [])

  useEffect(() => {
    const checkedItems = checkboxRefs.reduce<CartType[]>((res, ref, i) => {
      if (ref.current!.checked) {
        res.push(items[i])
      }
      return res;
    }, [])
    setCheckedCartData(checkedItems);
  }, [items, formData])

  return (
    <div>
      <form ref={formRef} onChange={handleCheckboxChanged}>
        <label>
          <input className="select-all" name="select-all" type="checkbox" />
          전체선택
        </label>
        <ul className="cart">
          {items.map((item, i) => (
            <CartItem {...item} key={item.id} ref={checkboxRefs[i]} />
          ))}
        </ul>
      </form>
      <WillPay submitTitle="결제창으로" handleSubmit={handleSubmit} />
    </div>
  )
}

export default CartList;