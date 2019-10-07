<template>
    <footer>
        <div class="container">
            <el-row class="m-0" :gutter="20">
                    <el-col class="Links m-0" :span="4" :offset="4">
                        <ul class="list-unstyled footer-list">
                                <li class="footer-list-item"><a class="footer-list-link" href="#">Home</a></li>
                                <li class="footer-list-item"><a class="footer-list-link" href="#">About</a></li>
                                <li class="footer-list-item"><a class="footer-list-link" href="#">Products</a></li>
                                <li class="footer-list-item"><a class="footer-list-link" href="#">Pricing</a></li>
                                <li class="footer-list-item"><a class="footer-list-link" href="#">Clients</a></li>
                                <li class="footer-list-item"><a class="footer-list-link" href="#">Careers</a></li>
                                <li class="footer-list-item"><a class="footer-list-link" href="#">Contact</a></li>
                                <li class="footer-list-item"><a class="footer-list-link" href="#">Terms</a></li>
                            </ul>
                    </el-col>
                    <el-col class="Social" :span="4" >
                        <ul class="list-unstyled footer-list">
                                <!--<li class="footer-list-item"><a class="footer-list-link" href="#">Twitter</a></li>-->
                                <!--<li class="footer-list-item"><a class="footer-list-link" href="#">Facebook</a></li>-->
                                <li class="footer-list-item"><a class="footer-list-link" href="https://www.instagram.com/web.dad/">Instagram</a></li>
                                <!--<li class="footer-list-item"><a class="footer-list-link" href="#">YouTube</a></li>-->
                            </ul>
                    </el-col>
                    <el-col class="Callback" :span="4" >
                        <div class="col-sm-5 sm-margin-b-30">
                            <span class="color-white">Связаться с нами</span>
                            <input type="text" class="form-control footer-input" placeholder="Name" required>
                            <input type="email" class="form-control footer-input" placeholder="Email" required>
                            <input type="text" class="form-control footer-input" placeholder="Phone" required>
                            <textarea class="form-control footer-input" rows="6" placeholder="Message" required></textarea>
                            <el-button class="btn" type="warning" round>Отправить</el-button>
                        </div>
                    </el-col>
            </el-row>
            <el-row class="copyright">
                <el-col :span="10">
                    <img class="footer-logo" src="static/img/logo2.png" alt="Asentus Logo">
                </el-col>
                <el-col :span="10">
                    <p><a class="color-base fweight-700" href="www.webdad.by">Copyright © Web Dad 2019</a></p>
                </el-col>
            </el-row>
        </div>
    </footer>

</template>

<script>
export default {
    
}
</script>

<style scoped>
.m-0 {
margin:0!important;

}
footer{
    background: url('../../static/img/1920x1080/2.png') center center no-repeat;
    padding-top: 50px;
}
.Links{
    color: #fff
}

a{
    text-decoration: none;
    color: #fff;
}
a:hover{
    color: #E6A23C;
}
.Social{
    color: #fff
}
ul{
    list-style: none;
    text-align: left
}
span{
    color: #fff;
}
.Callback{
    margin-left: 100px;
    margin-right: 200px;
}
.form-control{
    height: 50px;
    font-size: 14px;
    font-weight: 400;
    color: #a6a7aa;
    background: #fafafa;
    border: none;
    box-shadow: none;
    border-radius: 0;
    padding-left: 15px;
    background: rgba(218, 216, 216, 0.15);
    width: 100%;
    margin-top: 20px;
}
.btn{
    margin-top: 10px;
}
.copyright{
    padding-top: 30px;
    padding-bottom: 10px;
}
.copyright img{
    width: 200px;
}
</style>