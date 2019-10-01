<template>
  <div class="container">
    <el-row type="flex" class="row-bg" justify="center" :gutter="24">
        <el-col class="BlokAboutLeft" :span="8">
          <img src='/static/svg/3.svg'>
        </el-col>
        <el-col class="BlokAboutRight" :span="8">
            <el-carousel :interval="5000" direction="vertical" arrow="never">
                <el-carousel-item v-for="item in description" :key="item">
                  <div>
                    <h3>{{item.header}}</h3>
                    <p>{{item.text}}
                    </p>
                    </div>
                </el-carousel-item>
            </el-carousel>
            </el-col>
    </el-row>
  </div>
</template>

<style scoped>
  .el-carousel__item h3 {
    font-size: 18px;
    line-height: 50px;
    margin: 0;
    padding: 20px;
    padding-left: 30px;
    padding-right: 30px;
  }
  h3{
    font-size: 20px;
    text-align: center;
    color: #7793ed;
  }
  p{
    text-align: center;
    color: #7793ed;
  }
  img{
    width: 100%;
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