<template>
    <div class="container ">
        <div class="white">
            <el-row type="flex" class="row-bg" justify="center" :gutter="24">
                <el-col class="BlokAboutLeft" :span="8">
                    <img src='/static/svg/3.svg'>
                </el-col>
                <el-col class="BlokAboutRight" :span="8">
                    <el-carousel :interval="5000" direction="vertical" arrow="never">
                        <el-carousel-item v-for="item in description" :key="item">
                            <div>
                                <h3>{{item.header}}</h3>
                                <p>{{item.text}}</p>
                            </div>
                        </el-carousel-item>
                    </el-carousel>
                </el-col>
            </el-row>
        </div>
        <div class="color">
            <el-row type="flex" class="row-bg" justify="center" :gutter="24">
                <el-col class="BlokAboutLeft" :span="8">
                    <h2>Индивидуальная разработка </h2>
                    <ul>
                        <li>Учитываем все пожелания клиента, руководствуемся техническими требованиями к реализации веб ресурсов и рекомендациями поисковых систем</li>
                        <li>Применяем современные технологии разработки HTML 5 CSS 3, что позволяет сделать интернет сайт эффективным и удобным при его использовании</li>
                        <li>Создание сайта включает в себя интеграцию со сторонними базами данных, службами доставки и пользовательскими сервисами, по завершении процесса настроим SЕО</li>
                    </ul>
                </el-col>
                <el-col class="BlokAboutRight" :span="8">
                <img src='/static/svg/1.svg'>
                </el-col>
            </el-row>
        </div>
        <div class="white">
            <el-row type="flex" class="row-bg" justify="center" :gutter="24">
                <el-col class="BlokAboutLeft" :span="8">
                    <img src='/static/svg/2.svg'>
                </el-col>
                <el-col class="BlokAboutRight" :span="8">
                    <h2>Создаем сайты любой сложности</h2>
                    <ul>
                        <li>Предложим на выбор несколько вариантов изготовления веб ресурсов, различных по уровню их сложности и технической оснащенности в модификациях “Старт”, “Стандарт” и “Бизнес”</li>
                        <li>Подготовим индивидуальный дизайн, соответствующий коммерческим задачам компании и особенностям целевой аудитории потребителей продукции предприятия</li>
                        <li>Делаем сайты с адаптивной версткой, а создание технической конфигурации и программирование функционала ведем с учетом специфики вида деятельности клиентов</li>
                    </ul>
                </el-col>
            </el-row>
        </div>
        <div class="color application">
             <el-row type="flex" class="row-bg" justify="center" :gutter="24">
                 <el-col class="BlokAboutLeft" :span="8">
                    <p class="span">Найдём идеальное решение для вас</p>
                    <p>- 100% удовлетворение гарантировано</p>
                    
                </el-col>
                 <el-col class="BlokAboutRight" :span="8">
                       <el-button type="warning" class="el-button">Оставить заявку</el-button>
                 </el-col>
             </el-row>
        </div>

    </div>
    
</template>

<style scoped>
.container{
    
}
.color{
    background: rgb(55, 114, 255) none repeat scroll 0% 0%;
    padding: 30px;
}
.white{
    padding: 30px;
}
.color h2{
    text-align: left;
    color: #fff;
}

.white h2{
    text-align: right;
    color: rgb(55, 114, 255);
}
.color ul{
    list-style-type: none;
    padding: 0px;
}
.white ul{
    list-style-type: none;
    padding: 0px;
}
li:before{
    content: "";

}
.color li{
    text-align: left;
    padding-top: 20px;
    color: #fff;
}
.white li{
    text-align: right;
    padding-top: 20px;
    color: rgb(55, 114, 255);
}
li i{
    padding: 20px;
}
img{
    padding: 30px;
    width: 100%;
}

.BlokAboutLeft .span{
    font-size: 30px;
    color: #fff;
    font-weight: 700;
    text-align: left;
}

.BlokAboutLeft p{
    color: #fff;
    font-size: 15px;
    text-align: left;
    }
.BlokAboutRight{
    padding: 50px;
}

.el-carousel__item h3 {
    font-size: 18px;
    line-height: 50px;
    margin: 0;
    padding: 30px;
    padding-left: 30px;
    padding-right: 30px;
  }
h3{
    font-size: 20px;
    text-align: center;
    color: #7793ed;
  }
.el-carousel__item p{
    text-align: center;
    color: #7793ed;
  }
</style>


<script>
export default {
    props:{ 
        description: Array,
        header: String,
        text: String,
        },
    data(){
    
    }
}
</script>