<template>
    <div class="container1">
        <div class="caption">
            <el-row :gutter="20">
                <el-col :span="4"  :offset="3">
                    <h1>IT услуги</h1>
                </el-col>
            </el-row>
        </div>
        <div class="content">
            <el-row :gutter="20">
                <el-col :span="4"  :offset="4">
                    <div class="service-element">
                        <i class="fab fa-codepen"></i>
                    </div>
                    <div class="grid-content bg-purple">
                        <h3>Разработка программного обеспечения</h3>
                        <p>Уникальный продукт которым гордится наша команда. Готовы взяться за проект без четкого технического задания. Идеальный вариант для больших проектов с бесконечным циклом разработки.</p>
                    </div>
                    <a href="" class="content-wrapper-link"></a>
                </el-col>
                <el-col :span="4">
                    <div class="service-element">
                        <i class="fas fa-project-diagram"></i>
                    </div>
                    <div class="grid-content bg-purple">
                        <h3>Корпоративные программные решения</h3>
                        <p class="margin-b-5">Готовы предложить ИТ решение трудностей вашего бизнеса. Создадим уникальные инструменты, как для сотрудников, так и для клиентов. Наши решения это нечто большее чем стандартные CRM & ERP.</p>
                    </div>
                    <a href="" class="content-wrapper-link"></a>
                    </el-col>
                <el-col :span="4">
                    <div class="service-element">
                        <i class="fas fa-mobile"></i>
                    </div>
                    <div class="grid-content bg-purple">
                        <h3>Разработка мобильных </br>приложений</h3>
                        <p class="margin-b-5">Готовы предложить ИТ решение трудностей вашего бизнеса. Создадим уникальные инструменты, как для сотрудников, так и для клиентов. Наши решения это нечто большее чем стандартные CRM & ERP.</p>
                    </div>
                    <a href="" class="content-wrapper-link"></a>
                    </el-col>
                <el-col :span="4">
                    <div class="service-element">
                        <i class="fas fa-mobile"></i>
                    </div>
                    
                    <div class="grid-content bg-purple">
                        <h3>Разработка веб-приложений/сайтов</h3>
                        <p class="margin-b-5">Разработка веб-приложений с помощью технического задания. Создаем продукты под ключ. Разработка сайтов и порталов на платформах Bitrix, Modx, Joomla и д.р. Публикуем сайт на домене и хостинге или VDS. </p>
                     </div>
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