<template>

    <el-container>
        <div id="Nav"><Nav/></div>
        <div id="Header"><Header/></div>
        <div id="ItService"><ItService/></div>
    </el-container>

 
</template>

<script>
import Header from '@/components/Header'
import Nav from '@/components/Nav'
import ItService from '@/components/ItService'
export default {
    components:{
        Nav,
        Header,
        ItService
    }
}
</script>