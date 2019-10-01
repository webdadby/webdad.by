<template>
    <div class="">
        <Nav/>
        <Header 
        title='Разарботка' 
        h1='IT Услуги'
        description='Уникальный продукт которым гордится наша команда. Готовы взяться за проект без четкого технического задания. Идеальный вариант для больших проектов с бесконечным циклом разработки.'
        image='/static/img/1920x1080/2.png'
         />
        <!-- <Carusel
        :description="[
        {header:'Решения', text:'Каждый наш проект точно настроен под процессы компании-заказчика, что существенно повышает эффективность ее деятельности'},
        {header:'Также мы разрабатываем', text:'За 10 лет разработки мы решили много интересных задач'},
        {header:'Поэтапная разработка снижает риски внедрения ПО', text:'Поэтапная разработка позволяет уже через 2-4 месяца получить первый результат и установить систему с базовым функционалом. Вы сможете работать, а мы продолжим расширять функциональность системы, дорабатывая её по заранее согласованному плану'}
        ]"/> -->
        <BlokDescription
        :description="[
        {header:'Решения', text:'Каждый наш проект точно настроен под процессы компании-заказчика, что существенно повышает эффективность ее деятельности'},
        {header:'Также мы разрабатываем', text:'За 10 лет разработки мы решили много интересных задач'},
        {header:'Поэтапная разработка снижает риски внедрения ПО', text:'Поэтапная разработка позволяет уже через 2-4 месяца получить первый результат и установить систему с базовым функционалом. Вы сможете работать, а мы продолжим расширять функциональность системы, дорабатывая её по заранее согласованному плану'}
        ]"/>
        <ItService/>
        <Footer/>
    </div>
    
</template>
<script>
import Nav from '@/components/Nav'
import Header from '@/components/Header'
import Carusel from '@/components/Carusel'
import BlokDescription from '@/components/BlokDescription'
import ItService from '@/components/ItService'
import Footer from '@/components/Footer'

export default {
    components:{
        Nav,
        Header,
        Carusel,
        BlokDescription,
        ItService,
        Footer
    }
    
}
</script>
<style scoped> 
.container1{
    width: 940px;
}
p{
    padding: 0;
    margin: 0;
}
.pix_section{
    background: url('/static/img/1800x600/image-1.png');
    background-size: cover;
    background-position: center;    
    padding-top: 150px;
    padding-bottom: 150px;
}
.row{
    margin-left: -10px;
    margin-right: -10px;
}

.bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
img{
    text-align: right;
  }
.left{
    text-align: right;
}
.h-20{
    height: 200px;
}
.right{
    text-align: left;
}

@media (min-width: 992px){
.col-md-6{
    width: 50%;
}
}
</style>
