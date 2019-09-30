<template>
    <div class="container">
        <Nav/>
        <HeaderHome/>
        <Breadcrumb/>
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
import HeaderHome from '@/components/HeaderHome'

import Nav from '@/components/Nav'
import  Breadcrumb from '@/components/Breadcrumb'
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
        HeaderHome,
        Breadcrumb,
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
