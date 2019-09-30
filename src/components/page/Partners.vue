<template>
    <div class="container">
        <Nav/>
        <Header 
        title='Разарботка' 
        h1='Наши партнеры'
        description='Уникальный продукт которым гордится наша команда.'
        image='/static/img/1920x1080/2.png'
        />
        <OurProduct
        h2='Бизнес партнеры'
        p='Наша команда гордиться'
        :description="[
          {header:'Яндекс', text:'1', image:'/static/img/397x300/yandex.png', p:'52150525jhgfvdefhnml,kmjnhbvgfc', a:'/webdad.by'},
          {header:'Битрикс',text:'1', image:'./static/img/1920x1080/2.png', p:'', a:''},
          {header:'Битрикс',text:'в2', image:'static/img/1920x1080/2.png', p:'', a:''}
            ]"/>
        <OurProduct
        h2='Партнерская программа'
        p='Наша команда гордиться'
        :description="[
          {header:'INSTAPLUS.PRO', text:'', p:'Это онлайн программа для работы с Инстаграм с помощью которой можно за несколько минут настроить привлечение новой целевой аудитории. Подходит для продвижения бизнеса и раскрутки личных страниц.', image:'/static/img/397x300/instaplus.png', a:'https://instaplus.pro/r/7647cb'},
          {header:'',text:'',  p:'', image:'', a:''},
          {header:'',text:'', p:'', image:'', a:''}
        ]"/>
        <Footer/>
    </div>

 
</template>

<script>
import Nav from '@/components/Nav'
import Header from '@/components/Header'
import OurProduct from '@/components/OurProduct'
import Footer from '@/components/Footer'


export default {
    components:{
        Nav,
        Header,
        OurProduct,
        Footer

    }
}
</script>
