<template>
    <div class="container img_header" data-parallax="scroll">
        <div class="discription">
	        <h1></h1>
	        <p>Разработка програмного комплекса</p>
            <el-button type="warning" round>Оставить заявку</el-button>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>
<style scoped>
.container{
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 50vh;
    width: 100%;
    height: 50%;
    left: 0;
    top: 0;
}
.img_header{
    background: url(../assets/img/1920x1080/2.png) center center no-repeat;
}
h1{
    font-size: 50px;
    font-weight: 700;
    color: #fff;
    line-height: 1.1;
}
.discription{
    position: absolute;
    top: 20%;
    text-align: left;
    padding-left: 20%;
}
p{
    color: #fff;
}
</style>