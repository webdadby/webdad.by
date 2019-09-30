<template>
    <div class="container">
        <div class="caption">
            <el-row :gutter="20">
                <el-col :span="4"  :offset="3">
                    <h1>Реклама</h1>
                </el-col>
            </el-row>
        </div>
        <div class="content">
            <el-row  :gutter="20">
                <el-col class="blok" :span="4"  :offset="4">
                    <div class="service-element">
                        <i class="fab fa-yandex-international"></i>
                    </div>
                    <div class="grid-content bg-purple">
                        <h3>Контектсная реклама</h3>
                        <p class="margin-b-5">Запусти рекламные компании в поисковых системах и рекламных сетях для выводите на рынок новый продуктов, увеличиние количество продаж, расширения клиентской базы. Яндекс.Директ, Goolgle Ads, MyTarget</p>
                    </div>
                    <a href="#" class="content-wrapper-link"></a>
                </el-col>
                <el-col class="blok" :span="4">
                    <div class="service-element">
                        <i class="fas fa-icons"></i>
                    </div>
                    <div class="grid-content bg-purple">
                        <h3>SMM</h3>
                        <p>Комплексное ведение страниц в социальных сетях</p>
                    </div>
                    <a href="" class="content-wrapper-link"></a>
                    </el-col>
                <el-col class="blok animated " :span="4">
                    <div class="service-element">
                       <i class="fas fa-poll"></i>
                    </div>
                    <div class="grid-content bg-purple">
                        <h3>SEO продвижение</h3>
                        <p class="margin-b-5">Поможем поднять Ваш интернет-ресурс в поисковой выдачи Yandex и Google. Тем самым увеличим поток посетителей сайта а это потенциальные клиенты.</p>
                    </div>
                    <a href="" class="content-wrapper-link"></a>
                    </el-col>
                <el-col class="blok" :span="4">
                    <div class="service-element">
                        <i class="fas fa-thumbs-up"></i>
                    </div>
                    
                    <div class="grid-content bg-purple">
                        <h3>PR</h3>
                        <p class="margin-b-5">Ваша репутация будет на высоте</p>
                     </div>
                     <a href="http://wifi.webdad.by/" class="content-wrapper-link "></a>
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
.animated{
   background: #79cc64;
   text-align: left;
   color: #fff;
}
.grid-content{
    padding: 10px 30px 20px 30px;
    text-align: left;
}
.service-element{
    padding: 20px 30px 0px 30px;
    text-align: left;
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
</style>