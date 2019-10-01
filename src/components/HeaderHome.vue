<template>
        <div class="container">
            <div class="video">
                <video autoplay loop class="fillWidth1">
                    <source src="static/video/Slow_Typer.mp4" type="video/mp4"/>
                    Your browser does not support the video tag. I suggest you upgrade your browser.
                    <source src="static/video/Slow_Typer.webm" type="video/webm"/>
                    Your browser does not support the video tag. I suggest you upgrade your browser.
                </video>
                <!-- <img src="../assets/video/Slow_Typer.jpg" alt=""> -->
            </div>
            <div class="content">
                <div class="discription">
                    <div class="">
                        <h1 class="carousel-title">Digital-агентство</h1>
                        <p>Мы - агентство с опытом и необыкновенными людьми</p>
                    </div>
                    <el-row>
                        <el-button type="warning" round>Оставить заявку</el-button>
                    </el-row>
                    
                </div>
            </div>
        </div>
        
</template>

<script>
export default {
  name: 'Header'
  }
</script>

<style scoped>
h1{
    font-size: 90px;
    font-weight: 700;
    color: #fff;
    line-height: 1.1;
}
.container{
    width: 100%;
    display: grid;
    grid-template-columns: 1fr;
}
video{
    width: 100%;
}
.content{
    z-index: 1;
    width: 100%;
}
.discription{
    position: absolute;
    top: 35%;
    text-align: left;
    padding-left: 20%;
    color: #ffffff;
}

@media (max-width: 930px) {
  h1{
    font-size: 90em;
    font-weight: 700;
    color: #fff;
    line-height: 1.1;
}
}
</style>