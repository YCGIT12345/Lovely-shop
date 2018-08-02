<template>
    <div class="swiper-container" ref="swiper">
        <div class="swiper-wrapper">
            <slot></slot>
        </div>

       
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
    </div>
</template>
<script>
export default {
    data(){
        return{

        }
    },
    mounted() {
        var mySwiper = new Swiper (this.$refs.swiper, {
            loop: true,
            
            // 如果需要分页器
            pagination: '.swiper-pagination',
        })
    },
}    
</script>
<style>

</style>