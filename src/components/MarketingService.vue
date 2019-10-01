<template>
    <div class="container">
        <div class="content">
            <el-row class="row-bg pd-0" :gutter="24">
                <el-col class="pd-0" :xs="24" :span="6">
                    <h1 class=""><router-link to="/Software" class="router-link">Маркетинг</router-link></h1>
                </el-col>
            </el-row>
        </div>
        <div class="content">
            <el-row class="row-bg" :gutter="24">
                <el-col class="blok none-mobile" :xs="24" :span="6">
                    <div class="service-element">
                        <i class="fas fa-chart-bar"></i>
                    </div>
                    <div class="grid-content bg-purple">
                        <h3>Анализ конкурентов</h3>
                        <p class="margin-b-5">Один из первых и самых главных шагов перед тем, как определиться с маркетинговой стратегией компании.</p>
                    </div>
                    <a href="/CompetitorAnalysis" class="content-wrapper-link"></a>
                </el-col>
                <el-col class="blok animated" :xs="24" :span="6">
                    <div class="service-element">
                        <i class="fas fa-bullhorn"></i>
                    </div>
                    <div class="grid-content bg-purple">
                        <h3>Маркетинг на аутсорсинге</h3>
                        <p>Непосредственная передача маркетинговых функций в компанию, которая специализируется в данной области</p>
                    </div>
                    <a href="/marketing-na-autsorsinge" class="content-wrapper-link"></a>
                    </el-col>
                <el-col class="blok none-mobile" :xs="24" :span="6">
                    <div class="service-element">
                        <i class="fas fa-key"></i>
                    </div>
                    <div class="grid-content bg-purple">
                        <h3>Маркетинг «Под ключ»</h3>
                        <p class="margin-b-5">Лучший выбор для среднего и малого бизнеса при запуске маркетинга на предприятии</p>
                    </div>
                    <a href="" class="content-wrapper-link"></a>
                    </el-col>
                <el-col class="blok" :xs="24" :span="6">
                    <div class="service-element">
                        <i class="fas fa-wifi"></i>
                    </div>
                    
                    <div class="grid-content bg-purple">
                        <h3>WIFI-Маркетинг</h3>
                        <p class="margin-b-5">WiFi-маркетинг новое направление в рекламе помогает собирать идентификаторы смартфонов ваших клиентов и выгружает аудиторию на рекламные площадки.</p>
                        
                     </div>
                     <a href="http://wifi.webdad.by/" class="content-wrapper-link "></a>
                     </el-col>
            </el-row>
        </div>
    </div>
    
</template>

<script>
export default {
    name: 'MarketingService'
  
}
</script>

<style scoped>
.container {
width:1200px;
margin-left:auto;
margin-right:auto;
}
.content{
    width: 100%;
}

.pd-0 {
padding:0!important;
text-align: left;
}
.animated{
   background:rgb(23, 190, 187) none repeat scroll 0% 0%;
   text-align: left;
   color: #fff;
}
.grid-content{
    padding: 10px 30px 20px 30px;
    text-align: left;
}

.router-link {
    color:#000;
    text-decoration:none;
}
.service-element {
    text-align:left;
    padding:20px 30px 0;
}
i{
    font-size: 50px;
}
.blok{
    position: inherit;
}

.content-wrapper-link{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: block;
    z-index: 3;
}

@media (max-width: 767px) {
    .container{
        max-width: 100%;
    }
    .pd-0 {
        padding-left :20px!important;
        text-align: left;
    }
    .row-bg{
        padding: 20px;
    }
    h1{
        font-size: 1.5rem;
    }
    .blok{
        padding: 10px;
    }
    .grid-content h3{
        font-size: 15px;
    }
    .grid-content p{
        display: none;
    }
    .none-mobile{
        display: none;
    }
}
@media (min-width: 768px) and (max-width: 991px) {
      /* стили для sm-устройств */
}
@media (min-width: 991px) and (max-width: 1199px) {
      /* стили для md-устройств */
}
@media (min-width: 1200px) {
      /* стили для lg-устройств */
}
</style>