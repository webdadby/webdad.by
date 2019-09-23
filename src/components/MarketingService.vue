<template>
    <div class="container1">
        <div class="caption">
            <el-row :gutter="20">
                <el-col :span="4"  :offset="3">
                    <h1>Маркетинг</h1>
                </el-col>
            </el-row>
        </div>
        <div class="content">
            <el-row :gutter="20">
                <el-col :span="4"  :offset="4">
                    <div class="service-element">
                        <i class="fas fa-chart-bar"></i>
                    </div>
                    <div class="grid-content bg-purple">
                        <h3>Анализ конкурентов</h3>
                        <p class="margin-b-5">Один из первых и самых главных шагов перед тем, как определиться с маркетинговой стратегией компании.</p>
                    </div>
                    <a href="" class="content-wrapper-link"></a>
                </el-col>
                <el-col :span="4">
                    <div class="service-element">
                        <i class="fas fa-bullhorn"></i>
                    </div>
                    <div class="grid-content bg-purple">
                        <h3>Маркетинг на аутсорсинге</h3>
                        <p>Непосредственная передача маркетинговых функций в компанию, которая специализируется в данной области</p>
                    </div>
                    <a href="" class="content-wrapper-link"></a>
                    </el-col>
                <el-col :span="4">
                    <div class="service-element">
                        <i class="fas fa-key"></i>
                    </div>
                    <div class="grid-content bg-purple">
                        <h3>Маркетинг «Под ключ»</h3>
                        <p class="margin-b-5">Лучший выбор для среднего и малого бизнеса при запуске маркетинга на предприятии</p>
                    </div>
                    <a href="" class="content-wrapper-link"></a>
                    </el-col>
                <el-col class="service" :span="4">
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
    name: 'It_service'
  
}
</script>

<style scoped>
.container1{
    display: grid;
    grid-template-columns: 100%;
}
i{
    font-size: 50px;
}
.service{
    visibility: visible;
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
</style>