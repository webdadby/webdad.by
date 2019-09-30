<template>
    <div class="container">
        <div class="content" >
            <el-row :gutter="20">
                <el-col :span="20"  :offset="3">
                    <h2 class="">{{h2}}</h2>
                    <p>{{p}}</p>
                </el-col>
            </el-row>
            <el-row   type="flex" class="row-bg" justify="center" :gutter="20">
                <el-col class="blok" :span="6"  v-for="item in description" :key="item">
                    <div class="grid-content">
                        <div class="">
                            <img class="img-responsive" :src='item.image' alt="Our Exceptional Solutions Image">
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
.animated{
   background:rgb(55, 114, 255) none repeat scroll 0% 0%;
   text-align: left;
   color: #fff;
   height: 400px;
}

.content-wrapper-link:hover{
    border-radius: 22px 22px 22px 22px;
-moz-border-radius: 22px 22px 22px 22px;
-webkit-border-radius: 22px 22px 22px 22px;
border: 1px solid #ffffff;
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
    color: #fff;
    text-decoration: none;
}
h3 span{
    color: #808080;
    font-size: 12px;
    margin-left: 5px;
}
p{
    color: #fff;
    text-align: left;
}
.content{
    padding: 20px;
    background: #4b6cb7;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #182848, #4b6cb7);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #182848, #4b6cb7); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

}
.description{
    padding: 10px;
    padding-left: 20px;
    padding-right: 20px;
}
p{
    color: #fff;
    text-align: left;
}
h2{
    text-align: left;
    color: #fff;  /* fallback for old browsers */

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
    padding: 0px!important;
    margin-left: 10px
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
img{
    width: 100%;
    border-radius: 22px 22px 0px 0px;
-moz-border-radius: 22px 22px 0px 0px;
-webkit-border-radius: 22px 22px 0px  0px;
}
</style>