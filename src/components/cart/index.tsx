import { SyntheticEvent, useRef } from "react";
import { CartType } from "../../graphql/cart";
import CartItem from "./item";

const CartList = ({ items }: { items: CartType[] }) => {
  const formRef = useRef<HTMLFormElement>(null);

  const handleCheckboxChanged = (e: SyntheticEvent) => {
    if (!formRef.current) {
      return;
    };
    const checkBoxs = formRef.current.querySelectorAll<HTMLInputElement>('.cart-item__checkbox')
    const targetInput = e.target as HTMLInputElement;
    const data = new FormData(formRef.current);
    const selectedCount = data.getAll('select-item').length;

    // select-all 선택시
    if (targetInput.classList.contains('select-all')) {
      const allChecked = targetInput.checked
      checkBoxs.forEach(inputElem => {
        inputElem.checked = allChecked;
      })
    }

    // 개별 아이템 선택시
    else {
      const allChecked = (selectedCount === items.length);
      formRef.current.querySelector<HTMLInputElement>('.select-all')!.checked = allChecked
    }
  }

  return (
    <form ref={formRef} onChange={handleCheckboxChanged}>
      <label>
        <input className="select-all" name="select-all" type="checkbox" />
        전체선택
      </label>
      <ul className="cart">
        {items.map(item => (
          <CartItem {...item} key={item.id} />
        ))}
      </ul>
    </form>
  )
}

export default CartList;