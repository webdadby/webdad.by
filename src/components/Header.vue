<template>
    <div class="container img_header" :style="{ backgroundImage: 'url(' + image + ')' }" data-parallax="scroll">
        <div class="discription">
	        <h1>{{h1}}</h1>
	        <p>{{description}}</p>
            <el-button type="warning" round>Оставить заявку</el-button>
        </div>
    </div>
</template>

<script>
export default {
    props: {
    title: String,
    h1: String,
    description: String,
    likes: Number,
    isPublished: Boolean,
    commentIds: Array,
    author: Object,
    callback: Function,
    contactsPromise: Promise, // или любой другой конструктор
    image :String 
}
    
}
</script>
<style scoped>
.container{
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 70vh;
    width: 100%;
    height: 50%;
    left: 0;
    top: 0;
}
 .img_header{
    background-image: center center no-repeat;
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
    width: 70%;
}
</style>