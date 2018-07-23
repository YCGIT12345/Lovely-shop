

    function resizeFontsize(){
        var width = document.documentElement.clientWidth ;
        document.documentElement.style.fontSize=width/36+'px';
    }
    resizeFontsize();
    window.addEventListener('orientationchange',resizeFontsize);
    window.addEventListener('resize',resizeFontsize);
