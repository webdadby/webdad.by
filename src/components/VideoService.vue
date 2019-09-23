<template>
    <div class="container1">
        <div class="caption">
            <el-row :gutter="20">
                <el-col :span="4"  :offset="3">
                    <h1>Реклама</h1>
                </el-col>
            </el-row>
        </div>
        <div class="content">
            <el-row :gutter="20">
                <el-col :span="8"  :offset="4">
                    <div class="service-element">
                        <i class="fab fa-youtube"></i>
                    </div>
                    <div class="grid-content bg-purple">
                        <h3>Профессиональное создание рекламных роликов</h3>
                        <p>Наша команда готова взяться за создание видео рекламы любой сложности</p>
                    </div>
                    <a href="" class="content-wrapper-link"></a>
                </el-col>
                <el-col :span="4">
                    <div class="service-element">
                        <i class="fas fa-video"></i>
                    </div>
                    <div class="grid-content bg-purple">
                        <h3>Монтаж, 2D, 3D графика, Сьемка</h3>
                        <p>Комплексное ведение страниц в социальных сетях</p>
                    </div>
                    <a href="" class="content-wrapper-link"></a>
                    </el-col>
                <el-col :span="4">
                    <div class="service-element">
                        <i class="fas fa-photo-video"></i>
                    </div>
                    <div class="grid-content bg-purple">
                        <h3>Аниминирование видео</h3>
                        <p class="margin-b-5">Поможем поднять Ваш интернет-ресурс в поисковой выдачи Yandex и Google. Тем самым увеличим поток посетителей сайта а это потенциальные клиенты.</p>
                    </div>
                    <a href="" class="content-wrapper-link"></a>
                    </el-col>
            </el-row>
        </div>
    </div>
    
</template>

<script>
export default {
    name: 'ReklamaService'
  
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