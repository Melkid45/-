import React from 'react'

export default function Faq() {

    const OpenFaq = (e) => {
        e.target.closest('.account__body-block-faq-items-item').querySelector('.account__body-block-faq-items-item-bot').classList.toggle('open')
        e.target.closest('div').classList.toggle('open')
    }

  return (
    <div className='account__body-block-faq none'>
        <h2>
            Вопросы и ответы
        </h2>
        <div className="account__body-block-faq-items">
            <div className="account__body-block-faq-items-item">
                <div onClick={OpenFaq} className="account__body-block-faq-items-item-top">
                    <span>Тут текст вопроса</span>
                    <svg viewBox="0 0 5 9">
                        <path d="M0.419,9.000 L0.003,8.606 L4.164,4.500 L0.003,0.394 L0.419,0.000 L4.997,4.500 L0.419,9.000 Z" fill="#E40AA0"/>
                    </svg>
                </div>
                <p className="account__body-block-faq-items-item-bot">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam eaque alias est perspiciatis molestias, minus architecto veritatis ad temporibus sequi quis voluptate praesentium, quasi sed repudiandae consequatur ab debitis. Neque.
                    Laboriosam nostrum reprehenderit odit cum iusto. Cupiditate consequatur optio error commodi expedita quasi! Autem dicta atque esse laudantium deleniti quod temporibus, ut sit doloribus in voluptatem hic corrupti, odio explicabo.
                </p>
            </div>
            <div className="account__body-block-faq-items-item">
                <div onClick={OpenFaq} className="account__body-block-faq-items-item-top">
                    <span>Тут текст вопроса</span>
                    <svg viewBox="0 0 5 9">
                        <path d="M0.419,9.000 L0.003,8.606 L4.164,4.500 L0.003,0.394 L0.419,0.000 L4.997,4.500 L0.419,9.000 Z" fill="#E40AA0"/>
                    </svg>
                </div>
                <p className="account__body-block-faq-items-item-bot">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam eaque alias est perspiciatis molestias, minus architecto veritatis ad temporibus sequi quis voluptate praesentium, quasi sed repudiandae consequatur ab debitis. Neque.
                    Laboriosam nostrum reprehenderit odit cum iusto. Cupiditate consequatur optio error commodi expedita quasi! Autem dicta atque esse laudantium deleniti quod temporibus, ut sit doloribus in voluptatem hic corrupti, odio explicabo.
                </p>
            </div>
            <div className="account__body-block-faq-items-item">
                <div onClick={OpenFaq} className="account__body-block-faq-items-item-top">
                    <span>Тут текст вопроса</span>
                    <svg viewBox="0 0 5 9">
                        <path d="M0.419,9.000 L0.003,8.606 L4.164,4.500 L0.003,0.394 L0.419,0.000 L4.997,4.500 L0.419,9.000 Z" fill="#E40AA0"/>
                    </svg>
                </div>
                <p className="account__body-block-faq-items-item-bot">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam eaque alias est perspiciatis molestias, minus architecto veritatis ad temporibus sequi quis voluptate praesentium, quasi sed repudiandae consequatur ab debitis. Neque.
                    Laboriosam nostrum reprehenderit odit cum iusto. Cupiditate consequatur optio error commodi expedita quasi! Autem dicta atque esse laudantium deleniti quod temporibus, ut sit doloribus in voluptatem hic corrupti, odio explicabo.
                </p>
            </div>
            <div className="account__body-block-faq-items-item">
                <div onClick={OpenFaq} className="account__body-block-faq-items-item-top">
                    <span>Тут текст вопроса</span>
                    <svg viewBox="0 0 5 9">
                        <path d="M0.419,9.000 L0.003,8.606 L4.164,4.500 L0.003,0.394 L0.419,0.000 L4.997,4.500 L0.419,9.000 Z" fill="#E40AA0"/>
                    </svg>
                </div>
                <p className="account__body-block-faq-items-item-bot">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam eaque alias est perspiciatis molestias, minus architecto veritatis ad temporibus sequi quis voluptate praesentium, quasi sed repudiandae consequatur ab debitis. Neque.
                    Laboriosam nostrum reprehenderit odit cum iusto. Cupiditate consequatur optio error commodi expedita quasi! Autem dicta atque esse laudantium deleniti quod temporibus, ut sit doloribus in voluptatem hic corrupti, odio explicabo.
                </p>
            </div>
            <div className="account__body-block-faq-items-item">
                <div onClick={OpenFaq} className="account__body-block-faq-items-item-top">
                    <span>Тут текст вопроса</span>
                    <svg viewBox="0 0 5 9">
                        <path d="M0.419,9.000 L0.003,8.606 L4.164,4.500 L0.003,0.394 L0.419,0.000 L4.997,4.500 L0.419,9.000 Z" fill="#E40AA0"/>
                    </svg>
                </div>
                <p className="account__body-block-faq-items-item-bot">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam eaque alias est perspiciatis molestias, minus architecto veritatis ad temporibus sequi quis voluptate praesentium, quasi sed repudiandae consequatur ab debitis. Neque.
                    Laboriosam nostrum reprehenderit odit cum iusto. Cupiditate consequatur optio error commodi expedita quasi! Autem dicta atque esse laudantium deleniti quod temporibus, ut sit doloribus in voluptatem hic corrupti, odio explicabo.
                </p>
            </div>
        </div>
    </div>
  )
}
