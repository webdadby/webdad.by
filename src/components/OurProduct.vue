<template>
    <div class="bg-fon">
        <div class="container">
            <div class="content" >
                <el-row class="row-bg pd-0" :gutter="24">
                    <el-col :span="20">
                        <h2 class="">{{h2}}</h2>
                        <p>{{p}}</p>
                    </el-col>
                </el-row>
                <el-row  class="row-bg" justify="center" :gutter="23">
                    <el-col class="blok" :xs="24" :span="8"  v-for="item in description" :key="item">
                        <div class="grid-content">
                            <div class="">
                                <img class="img-responsive" :src='item.image' width="397" height="300" alt="Our Exceptional Solutions Image">
                            </div>
                            <div class="description">
                                <h3><a href="#">{{item.header}}</a> <span class="text-uppercase margin-l-20">{{item.text}}</span></h3>    
                                <p>{{item.p}}</p>
                            </div>
                        </div>
                        <a :href='item.a' target="_blank" class="content-wrapper-link"></a>
                    </el-col>
                </el-row>
            </div>
        </div>
    </div>
    
</template>

<script>
export default {
    name: 'It_service',
    props:{ 
        description: Array,
        h2: String,
        p: String,
        image: String
        }
}
</script>

<style scoped>
.container {
width:1400px;
margin-left:auto;
margin-right:auto;
}

.content-wrapper-link:hover{
    /* border-radius: 22px 22px 22px 22px;
-moz-border-radius: 22px 22px 22px 22px;
-webkit-border-radius: 22px 22px 22px 22px;
border: 1px solid #ffffff; */
}
.content-wrapper-link:hover{
    -webkit-transition: border-radius 1s;
    -moz-transition: border-radius 1s;
    -o-transition: border-radius 1s;
    -webkit-transition: border 1s;
    -moz-transition: border 1s;
    -o-transition: border 1s;
}
h3{
    text-align: left;
}
h3 a{
    /* color: #fff; */
    text-decoration: none;
}
h3 span{
    /* color: #808080; */
    font-size: 12px;
    margin-left: 5px;
}
p{
    /* color: #fff; */
    text-align: left;
}
.grid-content{
    background: #fff;
    padding: 10px;
    
}
.content-wrapper-link{
padding: 10px
}
.content-wrapper-link:hover{
    -webkit-box-shadow: 0px 15px 0px 0px #E6A23C;
    -moz-box-shadow:    0px 15px 0px 0px #E6A23C;
    box-shadow:         0px 15px 0px 0px #E6A23C;
  
}
.content{
    padding: 20px;
    /* background: #4b6cb7;  fallback for old browsers */
    /* background: -webkit-linear-gradient(to right, #182848, #4b6cb7);  Chrome 10-25, Safari 5.1-6 */
    /* background: linear-gradient(to right, #182848, #4b6cb7); W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

}
.description{

    padding-left: 20px;
    padding-right: 20px;
    height: 200px;
}
p{
    /* color: #fff; */
    text-align: left;
}
h2{
    text-align: left;
    /* color: #fff;  fallback for old browsers */

}
.service-element{
    padding: 20px 30px 0px 30px;
    text-align: left;
}
.container{
    display: grid;
    grid-template-columns: 100%;
}
i{
    font-size: 50px;
}
.blok{
    position: inherit;
    /* padding: 0px!important; */
    /* padding: 10px */
    /* padding-left: 0px!important;
    padding-right: 0px!important;
     */
}

/* .blok  :nth-child(2){
    margin-left: 10px;
    margin-right: 10px;
} */
.content-wrapper-link{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: block;
    z-index: 3;
}
img{
    width: 100%;
    border-radius: 22px 22px 0px 0px;
-moz-border-radius: 22px 22px 0px 0px;
-webkit-border-radius: 22px 22px 0px  0px;
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
    .blok{
        padding: 10px;
    }
    p{
    /* color: #fff; */
    font-size: 15px;
    }
    h2{
    font-size: 1.5rem;
    /* color: #fff;  fallback for old browsers */

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