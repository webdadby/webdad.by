<template>
    <el-row :gutter="20">
        <el-col class="BlokAboutLeft" :span="10">

        </el-col>
        <el-col class="BlokAboutRight" :span="15">
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
</template>

<style scoped>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>

<script>
export default {
    data(){
    }
}
</script>