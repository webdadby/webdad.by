<template>
    <div class="container">
        <el-row :gutter="20">
                <el-col class="BlokAboutLeft" :span="5" :offset="4">
                    <span>Мы делаем все, чтобы гордиться своей работой</span>
                    <p>Мы тщательно изучаем специфику Вашего бизнеса и предлагаем решения, максимально соответствующие Вашим задачам. Мы уделяем огромное внимание компетенциям наших специалистов и постоянно обучаем их. Каждый проект ведет квалифицированный менеджер, который обладает всеми необходимыми знаниями и всегда готов предоставить консультацию. По итогам каждого месяца мы предоставляем расширенную отчетность. Мы видим свой успех в успехе наших Клиентов.</p>
                    <el-button type="warning" round>О нас</el-button>
                </el-col>
                <el-col class="BlokAboutRight" :span="10">
                </el-col>
        </el-row>
    </div>
<!-- 
        <div class="BlokAboutLeft">
            <span>Мы делаем все, чтобы гордиться своей работой</span>
            <p>Мы тщательно изучаем специфику Вашего бизнеса и предлагаем решения, максимально соответствующие Вашим задачам. Мы уделяем огромное внимание компетенциям наших специалистов и постоянно обучаем их. Каждый проект ведет квалифицированный менеджер, который обладает всеми необходимыми знаниями и всегда готов предоставить консультацию. По итогам каждого месяца мы предоставляем расширенную отчетность. Мы видим свой успех в успехе наших Клиентов.</p>
        </div>
        <div class="BlokAboutRight">
            <img src="../assets/img/970x970/1.png" alt="Фото"> -->
        <!-- </div> -->

</template>

<script>
export default {

}
  

</script>

<style scoped>
.container{
    background: #000000;
    margin-top: 50px;
}
.BlokAboutLeft{
     padding: 20px;
     text-align: left;
     /* font-size: 30px */

}
.BlokAboutLeft span{
    color: #fff;
    font-size: 30px;
    font-weight: 500;
}
.BlokAboutLeft p{
    color: #fff
}
.BlokAboutRight img{
    width: 100%;
}
.BlokAboutRight{
    /* background: url(static/img/970x970/1.png) center center no-repeat; */
    padding: 20px;
    height: 100%;

}
</style>


