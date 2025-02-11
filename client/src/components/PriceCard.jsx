import React from 'react'

export default function PriceCard() {
  return (
    <div className='account__body-block-price none'>
        <div className="account__body-block-price-item">
            <span>Стоимость платных услуг:</span>
            <table>
                <tr>
                    <td>Обычное размещение</td>
                    <td>500 руб./ 30 дней</td>
                </tr>
                <tr>
                    <td>VIP размещение</td>
                    <td>1500 руб./ 30 дней</td>
                </tr>
                <tr>
                    <td>TOP размещение</td>
                    <td>2500 руб./ 30 дней</td>
                </tr>
                <tr>
                    <td>Отключение комментариев</td>
                    <td>500 руб./ 30 дней</td>
                </tr>
                <tr>
                    <td>Удаление комментариев</td>
                    <td>500 руб. за один комментарий</td>
                </tr>
            </table>
        </div>
        <div className="account__body-block-price-item">
            <span>Бонусы при пополнении:</span>
            <table>
                <tr>
                    <td>При пополнении баланса от 1500 руб. </td>
                    <td>+5%</td>
                </tr>
                <tr>
                    <td>При пополнении баланса от 2000 руб. </td>
                    <td>+7%</td>
                </tr>
                <tr>
                    <td>При пополнении баланса от 3000 руб. </td>
                    <td>+10%</td>
                </tr>
                <tr>
                    <td>При пополнении баланса от 5000 руб. </td>
                    <td>+15%</td>
                </tr>
                <tr>
                    <td>При пополнении баланса от 10000 руб. </td>
                    <td>+20%</td>
                </tr>
                <tr>
                    <td>При пополнении баланса от 14000 руб. </td>
                    <td>+25%</td>
                </tr>
            </table>
        </div>
        <p className="account__body-block-price-desc">Как пополнить баланс подробно написано <a href=''>здесь</a></p>
    </div>
  )
}
