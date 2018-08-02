<template>
    <div class="prompt-box">
        <!-- 全局的遮罩层-灰色 -->
        <transition name="fade">
            <div class="cover" v-show="true"></div>
        </transition>


        <transition name="fade">
            <slot></slot>
        </transition>

    </div>
</template>



<style scoped>
.prompt-box{
    width: 100%;
    height: 100%;
}
.cover{
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    background: rgba(0,0,0,0.5);
    z-index: 1;
}

@keyframes fadeIn {
    0%{opacity: 0;}
    100%{opacity: 1;}
}
@keyframes fadeOut {
    0%{opacity: 1;}
    100%{opacity: 0;}
}
.fade-enter-active{
    animation: fadeIn 400ms;
}
.fade-leave-active{
    animation: fadeOut 400ms;
}
</style>

