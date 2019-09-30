<template>
    
    <div class="container">
        <Nav/>
        <Header 
        title='Разарботка' 
        h1='Решение проблем бизнеса с помощью ИТ'
        description='Готовы предложить ИТ решение трудностей вашего бизнеса. Создадим уникальные инструменты, как для сотрудников, так и для клиентов. Наши решения это нечто большее чем стандартные CRM & ERP.'
        image='/static/img/1920x1080/2.png'
         />
    </div>
</template>
<script>
import Nav from '@/components/Nav'
import Header from '@/components/Header'
export default {
    components:{
        Nav,
        Header
    }
    
}
</script>
<style scoped> 
    


</style>
