function isMobile() {
return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

if (!isMobile()) {
//place script you don't want to run on mobile here
var mouseLoad = sessionStorage.getItem("mouseLoad", 1);
var mouse           = document.getElementById('mouse');
var mouses          = document.querySelectorAll('[data-mouse]');
for (var me=0; me < mouses.length; me++) {

    
    mouses.item(me).onmouseover = function(){
        var wordHover = this.getElementsByTagName('strong');
        for(var i = 0; i < wordHover.length; i++)
        {
            wordHover[i].style.color = this.dataset.background;
        }
        mouse.classList.add("hovert");
        var circles = document.getElementsByClassName('circle');
        for(var i = 0; i < circles.length; i++)
        {
            circles[i].style.background = this.dataset.background;
            mouse.getElementsByTagName('span')[i].style.color = this.dataset.text;
        }
        
        if ( this.dataset.mouse === 'read' ){
            mouse.classList.add("mouse--read");
            mouse.classList.remove('mouse--link-internal');
            var width = document.getElementById('mousecontainer-read').clientWidth;
            var size = document.getElementById('mousecontainer-read').style.transform = 'translate(' + width/2 + 'px,'  + -width/2 + 'px)';
            //lottie.play("Mouse heart");
        }
        else if ( this.dataset.mouse === 'link-internal' ){
            mouse.classList.add("mouse--link-internal");
            mouse.classList.remove('mouse--read');
            var width = document.getElementById('mousecontainer-link-internal').clientWidth;
            var size = document.getElementById('mousecontainer-link-internal').style.transform = 'translate(' + width/2 + 'px,'  + -width/2 + 'px)';
            //lottie.play("Mouse heart");
        }

    }
    
    mouses.item(me).onmouseout = function(){
        mouse.classList.remove("hovert");
        var wordHover = this.getElementsByTagName('strong');
        for(var i = 0; i < wordHover.length; i++)
        {
            wordHover[i].removeAttribute('style');
        }
        var circles = document.getElementsByClassName('circle');
        for(var i = 0; i < circles.length; i++)
        {   
            circles[i].removeAttribute('style');
            mouse.getElementsByTagName('span')[i].removeAttribute('style');
        }
        
    }   
}

function followCursor(event){

    var curX = event.clientX;
    var curY = event.clientY;
    var scroll_start = 0;

    mouse.style.transform = "translate(calc(" + curX + "px - 50vw),calc(" + curY + "px - 50vh))";
    //Store mouse cursor previsous page and inject them
    var mouseprevious = "translate(calc(" + curX + "px - 50vw),calc(" + curY + "px - 50vh))";
    sessionStorage.setItem("mouseprevious", mouseprevious);
    setTimeout(function(){mouse.classList.add("inload");}, 1);
    sessionStorage.setItem("mouseLoad", 1);
    /*

    if( $('body').hasClass('page--single') === true ){
        var footerChange = $('#realated--content');

        var footerOffset = footerChange.offset();
        $(document).scroll(function() { 
            scroll_start = $(this).scrollTop();
            if((scroll_start > (footerOffset.top - curY))) {
                
                    $("#mouse .base--circle").removeClass('base--circle--dark');
                    $("#mouse .base--circle").addClass('base--circle--white');
            }
            else {

                    $("#mouse .base--circle").addClass('base--circle--dark');
                    $("#mouse .base--circle").removeClass('base--circle--white');
            }
        });

        if((event.pageY < footerOffset.top))  {
            $("#mouse .base--circle").addClass('base--circle--dark');
            $("#mouse .base--circle").removeClass('base--circle--white');
        }
        else {
            $("#mouse .base--circle").removeClass('base--circle--dark');
            $("#mouse .base--circle").addClass('base--circle--white');
        }

    }


    else if( $('body').hasClass('page--homepage') === true ){


        var contentChange = $('#svg__world');
        var contentOffset = contentChange.offset();
            $(document).scroll(function() { 
                scroll_start = $(this).scrollTop();
                if((scroll_start > (contentOffset.top - curY)) && (scroll_start < (contentOffset.top + contentChange.outerHeight() - curY))) {
                        $("#mouse .base--circle").addClass('base--circle--dark');
                        $("#mouse .base--circle").removeClass('base--circle--white');
                }
                else {
                        $("#mouse .base--circle").removeClass('base--circle--dark');
                        $("#mouse .base--circle").addClass('base--circle--white');
                }
           });

        if((event.pageY > contentOffset.top) && (event.pageY < (contentOffset.top + contentChange.outerHeight())))  {
            $("#mouse .base--circle").addClass('base--circle--dark');
            $("#mouse .base--circle").removeClass('base--circle--white');
        }
        else {
            $("#mouse .base--circle").removeClass('base--circle--dark');
            $("#mouse .base--circle").addClass('base--circle--white');
        }
    }
    else if( $('body').hasClass('page--about') === true ){
        var contentChange = $('#about--introduction');
        var contentOffset = contentChange.offset();
            $(document).scroll(function() { 
                scroll_start = $(this).scrollTop();
                if((scroll_start > (contentOffset.top - curY)) && (scroll_start < (contentOffset.top + contentChange.outerHeight() - curY))) {
                       
                        $("#mouse .base--circle").addClass('base--circle--dark');
                        $("#mouse .base--circle").removeClass('base--circle--white');
                }
                else {
                        $("#mouse .base--circle").removeClass('base--circle--dark');
                        $("#mouse .base--circle").addClass('base--circle--white');
                }
           });

        if((event.pageY > contentOffset.top) && (event.pageY < (contentOffset.top + contentChange.outerHeight())))  {
            $("#mouse .base--circle").addClass('base--circle--dark');
            $("#mouse .base--circle").removeClass('base--circle--white');
        }
        else {
            $("#mouse .base--circle").removeClass('base--circle--dark');
            $("#mouse .base--circle").addClass('base--circle--white');
        }
    }
    
    else if(($(".menu-burger").hasClass('active-menu')  === true )){
        if(curX < (window.innerWidth / 2))  {
            console.log('lol');
            $("#mouse .base--circle").addClass('base--circle--dark');
            $("#mouse .base--circle").removeClass('base--circle--white');
        }
        else {
            $("#mouse .base--circle").removeClass('base--circle--dark');
            $("#mouse .base--circle").addClass('base--circle--white');
        }
    }

    else{
      $("#mouse .base--circle").addClass('base--circle--white');
    }
    */
}
/*
if (mouseLoad == 1){
    mouse.classList.add("inload");
}
*/


document.body.onmousemove = followCursor;

}

function interval() {
    while (true) {
        setInterval(showImage, 1);
    }
}

function showImage() {

    var x = clientX;
    var y = clientY;
    var image = document.getElementsByClassName("list__place--image");
    image.style.left = x;
    image.style.top = y;
 }
 
