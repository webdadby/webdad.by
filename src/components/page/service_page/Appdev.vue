<template>
    
    <div class="container">
        <Nav/>
        <Header 
        title='Разарботка' 
        h1='Разработка ПО и мобильных приложений'
        description='Уникальный продукт которым гордится наша команда. Готовы взяться за проект без четкого технического задания. Идеальный вариант для больших проектов с бесконечным циклом разработки.'
        image='/static/img/1920x1080/2.png'
         />
        <Carusel/>
    </div>
</template>
<script>
import Nav from '@/components/Nav'
import Header from '@/components/Header'
import Carusel from '@/components/Carusel'
export default {
    components:{
        Nav,
        Header,
        Carusel
    }
    
}
</script>
<style scoped> 
    


</style>
