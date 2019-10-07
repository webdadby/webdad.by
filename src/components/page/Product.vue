<template>
    <div class="container">
        <Nav/>
        <Header 
        title='Разарботка' 
        h1='Наши продукты'
        description='Уникальный продукт которым гордится наша команда.'
        image='/static/img/1920x1080/2.png'
        />
        <OurProduct
        h2='Эсклюзивные web-приложения'
        p='Наша команда гордиться'
        :description= "[
          {header:'SmmBot',text:'в стадии разработки', image:'/static/img/397x300/yandex.png'},
          {header:'ParerRealt',text:'в стадии разработки', image:'/static/img/397x300/yandex.png'},
          {header:'',text:'в стадии разработки', image:'/static/img/397x300/yandex.png'},

        ]"/>
        <OurProduct
        h2='Эсклюзивные web-приложения'
        p='Наша команда гордиться'
        :description= "[
          {header:'SmmBot',text:'в стадии разработки', image:'/static/img/397x300/yandex.png'},
          {header:'ParerRealt',text:'в стадии разработки', image:'/static/img/397x300/yandex.png'},
          {header:'',text:'в стадии разработки', image:'/static/img/397x300/yandex.png'},

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
    },
    data(){
      return{
      }
    }
}
</script>
