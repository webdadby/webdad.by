<template>
    <div class="container">
        <Nav/>
        <Header 
        title='Разарботка' 
        h1='Свяжитесь с нами'
        description='Уникальный продукт которым гордится наша команда.'
        image='/static/img/1920x1080/2.png'
        />
        <OurContact
        h2='Наши контакты'
        p=''
        :description="[
          {header:'Брест', adress:'ул. Куйбышева 9, офис 217', phone:'+375 25 966-32-80', email:'info@webdad.by'},
          {header:'Минск', adress:'ул. Карла Либкнехта 108,',  phone:'+375 25 966-32-80', email:'info@webdad.by'}
        ]"
        />
        <maps/>
        <Footer/>
    </div>

 
</template>

<script>
import Nav from '@/components/Nav'
import Header from '@/components/Header'
import OurContact from '@/components/OurContact'
import maps from '@/components/maps'
import Footer from '@/components/Footer'


export default {
    components:{
        Nav,
        Header,
        OurContact,
        maps,
        Footer
    },
    data(){
      return{
      }
    }
}
</script>
