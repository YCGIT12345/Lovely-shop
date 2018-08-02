<template>
    <div class="centent" ref="centent">
        <div ref="cententbox">
            <slot></slot>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
        }
    },
    methods:{
        refreshDOM(){
            this.myScroll.refresh();
        }
    },
    mounted(){
        this.myScroll = new IScroll(this.$refs.centent,{
            probeType: 3,
            click: true,
            tap: true,
        })
        this.myScroll.on('beforeScrollStart',()=>{
            this.refreshDOM();
        });
    },
}
</script>
<style scoped>
.centent{
    width: 100%;
    position: absolute;
    top: .44rem;
    left: 0;
    bottom: .49rem;
    overflow: hidden;
    background:#ebebeb;
}
</style>