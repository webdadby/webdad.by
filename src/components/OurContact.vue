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
                        <div class="description">

                            <h3><i class="fas fa-building"></i>{{item.header}} </h3>   
                            <ul>
                                <li><i class="fas fa-map-marker-alt"></i>{{item.adress}}</li>
                                <li><i class="fas fa-phone-volume"></i>{{item.phone}}</li>
                                <li><i class="fas fa-envelope"></i>{{item.email}}</li>
                            </ul>
                            <p></p> 
                            <p></p>
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
        adress: String,
        phone: String,
        image: String
        }
}
</script>

<style scoped>
.animated{
   text-align: left;
   color: #fff;
   height: 400px;
}


h3{
    text-align: center;
    text-decoration: none;
}
h3 i{
    font-size: 35px;
    padding: 20px;
}
h3 i:hover{
    color: #ffa500;
}
h3 span{
    text-align: left;
    text-decoration: none;
    color: #808080;
    font-size: 12px;
    margin-left: 5px;
}
p{
    text-align: left;
    color: #808080;
}
ul{
    text-align: left;
    list-style-type: none;
    
}
li i{
    font-size: 15px;
    padding: 10px;
}

li i:hover{
    color: #57b0ff;
}
.content{
    padding: 20px;

}
.description{
    padding: 10px;
    background: #f0f0f0;
}
h2{
    text-align: left;
}
.service-element{
    text-align: left;
}
.container{
    display: grid;
    grid-template-columns: 100%;
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
</style>