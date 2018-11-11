/* SMOOTH SCROLL TO VIDEO */
$("#arrow").click(function () {
    $('html, body').animate({
        scrollTop: $(".video_title1_ctnr").offset().top
    }, 1000);
});




//////////////////////////
// YOUTUBE VIDEO SETUP //
////////////////////////
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        width: '1120',
        height: '630',
        videoId: 'KqtvA6xo4DE',
        playerVars: {
            'rel': 0
        },
        events: {
            'onReady': onPlayerReady,
        }
    });
}

function onPlayerReady(event) {
    /* $('#play_vid').click(function () {
        event.target.playVideo();
        console.log("video automatically plays");
    }); */
    $('.playBtn').click(function () {
        event.target.playVideo();
        console.log("video automatically plays");
    });
}

$(document).ready(function () {
    
    $('#player').hide();
    /* $('#play_vid').click(function () {
        console.log("you clicked the play button");
        $('#player').show();
        $('#play_vid').hide();
    }); */
    $('.playBtn').click(function () {
        console.log("you clicked the play button");
        $('#player').show();
        $('#play_vid').hide();
        $('.playBtn').hide();
    });
});




//SWAP FIRST BACKGROUND IMAGE >> DESKTOP >> MOBILE
var parallax_window2_1 = document.getElementById('page3');

$(window).resize(mobile);

function mobile() {
    if ($(window).width() < 768 && $(window).height() > 567) {
        console.log('window is under 768');
        $('.parallax-window1').parallax({
            // imageSrc: './images/page1_bg_mobile.jpg',
            imageSrc: '',
            naturalWidth: 800,
            naturalHeight: 1360
        });
        // parallax_window2.setAttribute('data-image-src', './images/page1_bg_desktop.jpg')

    } else if ($(window).width() < 768 && $(window).height() < 568) {
        console.log('window width =< 768 & =< 420');
        $('.parallax-window1').parallax({
            imageSrc: ''
        });
    } else if($(window).width() > 767 && $(window).height() > 567){
        $('.parallax-window1').parallax({
            imageSrc: './images/page1_bg_desktop.jpg',
            naturalWidth: 2000,
            naturalHeight: 1000
        });
        // parallax_window2.setAttribute('data-image-src', './images/blue_bg.jpg')

    }
}
mobile();


// $(document).ready(function() {
//     var resizeTimer,
//         $window = $(window);
    
//     function imageresize()
//     {
//         if ($window.width() < 700)
//         {
//             parallax_window2_1.style.display = 'none'
//             parallax_window2_2.style.display = 'block';
//             parallax_window2_1.removeAttribute("data-image-src");
//             // parallax_window2_1.setAttribute('data-image-src', '')
//             parallax_window2_2.setAttribute('data-image-src', './images/fireplace.jpg')
//             // $('.fluidimage').text('< 700');
//             console.log('small');
//         } 
//         else
//         {
//             parallax_window2_1.style.display = 'block'
//             parallax_window2_2.style.display = 'none'
            
//             parallax_window2_2.removeAttribute("data-image-src");
//             parallax_window2_1.setAttribute('data-image-src', './images/blue_bg.jpg')
//             // parallax_window2_2.setAttribute('data-image-src', '')
//             console.log('big');
//             // $('.fluidimage').text('>= 700');
//         }
//     }
//     imageresize();//Triggers when document first loads
    
//     $window.resize(function() {
//         clearTimeout(resizeTimer);
//         resizeTimer = setTimeout(imageresize, 100);
//     });
//  }); 




// VIDEO CONTROLS

var video1 = document.getElementById("video1");

function vidplay() {
    if (video1.paused) {
        video1.play();
        $(".playBtn1").hide();
    } else {
        video1.pause();
        $(".playBtn1").show();
    }
}

$("#video1, .playBtn1").on('click', function () {
    //video1.pause();
    // video2.pause();
    // video3.pause();
    vidplay();
});
$("#video2, .playBtn2").on('click', function () {
    video1.pause();
    video3.pause();
    vidplay2();
});
$("#video3, .playBtn3").on('click', function () {
    video1.pause();
    video2.pause();
    vidplay3();
});

// PAUSE VIDEO ON SCROLL OUT THE VIEW
$(window).scroll(function () {
    $('video').each(function () {
        if ($(this).is(":in-viewport")) {
        } else {
            $(this)[0].pause();
        }
    })
});


// b.setAttribute("name", "helloButton");



// var imgSrc = parallax_window2.getAttribute("data-image-src");
// imgSrc = "./images/page1_bg_desktop.jpg"
// console.log(imgSrc);
// var parallax_window1 = document.getElementsByClassName('parallax-window1');
// var data = parallax_window1.dataset;
// console.log(parallax_window1);
// // parallax_window2.dataset.imageSrc = '../images/blue_bg.jpg';