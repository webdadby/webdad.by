<template>
    <div class="container">
        <Nav/>
        <Header/>
        <ItService/>
        <MarketingService/>
        <ReklamaService/>
        <DesignService/>
        <VideoService/>
        <BlokAbout/>
        <Footer/>
    </div>

 
</template>

<script>
import Header from '@/components/Header'
import Nav from '@/components/Nav'
import ItService from '@/components/ItService'
import MarketingService from '@/components/MarketingService'
import ReklamaService from '@/components/ReklamaService'
import DesignService from '@/components/DesignService'
import VideoService from '@/components/VideoService'
import BlokAbout from '@/components/BlokAbout'
import Footer from '@/components/Footer'

export default {
    components:{
        Nav,
        Header,
        ItService,
        MarketingService,
        ReklamaService,
        DesignService,
        VideoService,
        BlokAbout,
        Footer
    }
}
</script>