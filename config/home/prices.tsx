import { OrderModalTrigger } from '@/app/_components/order-modal/order-modal-trigger';
import Link from '@/components/ui/link';

export const prices = [
  {
    text: (
      <>
        Стоимость неоновой вывески зависит от:
        {' '}
        <br />
        <br />
        1. Размера
        {' '}
        <br />
        2. Общей длины неона
        {' '}
        <br />
        3. Типа используемого неона (одноцветный, RGB или Smart)
        {' '}
        <br />
        4. Сложности рисунка
        {' '}
        <br />
        5. Комплектации
        {' '}
        <br />
      </>
    )
  },
  {
    text: (
      <>
        Точная стоимость изготавливаемой вывески определяется индивидуально после согласования макета, но в ходе простых расчетов в нашем умном конструкторе вы можете узнать примерную стоимость предстоящей работы
      </>
    )
  },
  {
    text: (
      <>
        Мы изготавливаем
        {' '}
        <Link.Cases className='!text-[length:inherit] !font-normal text-gradient-second' hasUnderline>уникальные работы</Link.Cases>
        , которые зацепят внимание каждого вашего клиента, поэтому наши работы стоит воспринимать как инвестиция в повышенное внимание клиентов к вашему бизнесу
      </>
    )
  },
  {
    text: (
      <>
        Чем больше заказ, тем большую скидку мы вам предлагаем. Для запроса персональных условий сотрудничества можете
        {' '}
        <OrderModalTrigger className='inline p-0 !text-[length:inherit] !font-normal text-gradient-second' size='none' variant='ghost'>написать нам лично</OrderModalTrigger>
        , мы найдем выгодное решение для вашей проблемы.
      </>
    )
  }
];
