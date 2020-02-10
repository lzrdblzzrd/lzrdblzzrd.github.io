var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
window.player;

var lanzer = "g0dz";
var lanzer2 = "thiccboisupreme";
var lanzerClan3 = "onetap.su";
var lanzerClan2 = "fatality.win";
var lanzerClan = "gamesense";
var lanzerAvatar = "img/painless.jpg";
var dauns = [
	'avaster',
	'esoterik',
	'lucifer',
	'lucky',
	'bolbi',
	'teal',
	'xane'
	
];

window.onYouTubeIframeAPIReady = function() {
    player = new YT.Player('youtube', {
        width: screen.width,
        height: Math.ceil(screen.width / (16 / 9)),
        videoId: "4j5Tm4AqeTY",
        playerVars: {
			playlist: '4j5Tm4AqeTY',
			autoplay: 1,
			controls: 0,
			disablekb: 1,
			hl: 'ru-ru',
			hd: 1,
			vq: 'hd720',
			loop: 1,
			modestbranding: 1,
			showinfo: 0,
			autohide: 1,
			color: 'white',
			iv_load_policy: 3,
			theme: 'light',
			rel: 0
        },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
};
var audio = document.querySelector("audio");
audio.volume = 1; //0.1

function onPlayerReady(e) {
    $('iframe#youtube').attr("data-keepplaying", "");
    window.player.setVolume(10);
    $(window).trigger("resize");
    
    audio.currentTime = 0;
    audio.play();
    $('div.youtube-controls').fadeIn("slow");
}

function onPlayerStateChange(e) {
    if(e.data === YT.PlayerState.ENDED) {
        window.player.playVideo();
    }
}

$(document).ready(function() {
    $('#main').fullpage({
        onLeave: function(index, nextIndex, direction){
            switch(nextIndex) {
                case 1:
                    $('div.page-down').fadeIn("fast");
                    $('div.page-up').fadeOut("fast");
                    break;
                case 2:
                    $('div.page-up').fadeIn("fast");
                    $('div.page-down').fadeOut("fast");
                    
                    var gamesense = $(this).next();
                    if($(gamesense).attr("expanded") === "true") {
                        return;
                    }
                    
                    $(gamesense).attr("expanded", "true");
                    $(gamesense).find('div.bottom').delay(1000).animate({
                        width: "100%"
                    }, 300);
                    $(gamesense).find('div.left, div.right').delay(1300).animate({
                        height: "58px"
                    }, 50);
                    $(gamesense).find('div.gamesense a').delay(1000).animate({
                        width: "100%",
                        "font-size": "26px",
                        "letter-spacing": "7px"
                    }, 700);
                    $(gamesense).find('div.gamesense h3').delay(1000).animate({
                        width: "250px",
                        "font-size": "26px",
                        "letter-spacing": "3px",
                        opacity: 1
                    }, 800);
                    $(gamesense).find('div.top-left, div.top-right').delay(1350).animate({
                        width: "120px"
                    }, 1000);
                    break;
            }
        }
    });
});

$(window).resize(function() {
    //$('#youtube').width($(window).width()).height(Math.ceil($(window).width() / (16 / 9)));
    var width = $(window).width(),
                    pWidth, // player width, to be defined
                    height = $(window).height(),
                    pHeight, // player height, tbd
                    $tubularPlayer = $('#youtube');

            // when screen aspect ratio differs from video, video must center and underlay one dimension

    if (width / (16/9) < height) { // if new video height < window height (gap underneath)
        pWidth = Math.ceil(height * (16/9)); // get new player width
        $tubularPlayer.width(pWidth).height(height).css({left: (width - pWidth) / 2, top: 0}); // player width is greater, offset left; reset top
    } else { // new video width < window width (gap to right)
        pHeight = Math.ceil(width / (16/9)); // get new player height
        $tubularPlayer.width(width).height(pHeight).css({left: 0, top: (height - pHeight) / 2}); // player height is greater, offset top; reset left
    }
});



var weapons = [ //для ссылочек на иконки оружек из папки /img/map/
    'ssg08'
];

function kill() {
    var newState = $('<div><span id="ct">'+lanzer+'</span><span><img src="img/map/'+weapons[Math.floor((Math.random() * weapons.length))]+'.png" /></span>\n\
                                    <span><img src="img/map/headshot.png" /></span><span id="t">'+dauns[Math.floor((Math.random()*dauns.length))]+'</span></div>');
    $('div.kills').append($(newState).show().delay(1000).fadeOut("slow", function() {
        $(this).remove();
    }));
    var kills = parseInt($('div.section.main table tbody tr:eq(1) td:eq(6)').html());
    var score = parseInt($('div.section.main table tbody tr:eq(1) td:eq(10)').html());
    $('div.section.main table tbody tr:eq(1) td:eq(6)').html(""+(kills+1));
    $('div.section.main table tbody tr:eq(1) td:eq(10)').html(""+(score+2));
    setTimeout(kill, Math.random() * 700);
}
kill();
$('span.clantag').html(lanzerClan);
$('span.clantag2').html(lanzerClan2);
$('span.clantag3').html(lanzerClan3);
$('span.name').html(lanzer);
$('span.name2').html(lanzer2);
$('span.name3').html(lanzer2);
$('td.avatar img').attr("src", lanzerAvatar);

$('div.section.main table').delay(2000).fadeIn(500);
$('div.page-down').delay(2500).fadeIn(1000);

var step = 0;
function clan() {
    step++;
    var clanName = lanzerClan.substring(step >= lanzerClan.length ? lanzerClan.length : step, lanzerClan.length);
    
    var n = (step >= lanzerClan.length) ? ((lanzerClan.length * 2) - step) : lanzerClan.length; //.lengt * 2
    for(var i=0; i< n; i++) {
        clanName += "&nbsp;";
    }
    
    clanName += lanzerClan.substring(0, step);
    
    for(var i=0; i<step-lanzerClan.length; i++) {
        clanName += "&nbsp;";
    }

    if(step == lanzerClan.length*2) { //length*2
        step = 0;
    }
    
    $('span.clantag').html(clanName);
    setTimeout(clan, 250); //250
}

clan();

var step2 = 0;
function clan2() {
    step2++;
    var clanName2 = lanzerClan2.substring(step2 >= lanzerClan2.length ? lanzerClan2.length : step2, lanzerClan2.length);
    
    var n = (step2 >= lanzerClan2.length) ? ((lanzerClan2.length * 2) - step2) : lanzerClan2.length; //length*2
    for(var i=0; i< n; i++) {
        clanName2 += "&nbsp;";
    }
    
    clanName2 += lanzerClan2.substring(0, step2);
    
    for(var i=0; i<step2-lanzerClan2.length; i++) {
        clanName2 += "&nbsp;";
    }

    if(step2 == lanzerClan2.length*2) { //lengt*2
        step2 = 0;
    }
    
    $('span.clantag2').html(clanName2);
    setTimeout(clan2, 250); //250
}

clan2();

var step3 = 0;
function clan3() {
    step3++;
    var clanName3 = lanzerClan3.substring(step3 >= lanzerClan3.length ? lanzerClan3.length : step3, lanzerClan3.length);
    
    var n = (step3 >= lanzerClan3.length) ? ((lanzerClan3.length * 2) - step3) : lanzerClan3.length; //length*2
    for(var i=0; i< n; i++) {
        clanName3 += "&nbsp;";
    }
    
    clanName3 += lanzerClan3.substring(0, step3);
    
    for(var i=0; i<step3-lanzerClan3.length; i++) {
        clanName3 += "&nbsp;";
    }

    if(step3 == lanzerClan3.length*2) { //lengt*2
        step3 = 0;
    }
    
    $('span.clantag3').html(clanName3);
    setTimeout(clan3, 250); //250
}

clan3();

$('div.gamesense').click(function() {
   location.href = 'https://youtu.be/t9vBmdGlyVA?t=1m8s'; //http://u.to/aMMM
});

var event = $(document).click(function(e) {
    e.stopPropagation();
    e.preventDefault();
    e.stopImmediatePropagation();
    return false;
});

$(document).bind('contextmenu', function(e) {
    e.stopPropagation();
    e.preventDefault();
    e.stopImmediatePropagation();
    return false;
});


$('input[type="range"]').on('input', function() {
    audio.volume = $(this).val();
    
    if($(this).val() == 0) {
        $('li.volume img').attr("src", "img/volume_off.png");
        audio.muted = true;
    } else {
        $('li.volume img').attr("src", "img/volume.png");
        audio.muted = false;
    }
});

$('li.pause').click(function() {
    if(audio.paused) {
        audio.play();
        window.player.playVideo();
        $('li.pause img').attr("src", "img/pause.png");
        $('#youtube').css({
            filter: "",
            opacity: "0.5"
        });
    } else {
        audio.pause();
        window.player.pauseVideo();
        $('li.pause img').attr("src", "img/play.png");
        $('#youtube').css({
            filter: "blur(5px)",
            opacity: "0.35"
        });
    }
});

$('li.volume').click(function() {
    if(audio.muted) {
        audio.muted = false;
        audio.volume = 0.05;
        $('input[type="range"]').val(0.05);
        $('li.volume img').attr("src", "img/volume.png");
    } else {
        audio.muted = true;
        $('input[type="range"]').val(0);
        $('li.volume img').attr("src", "img/volume_off.png");
    }
});

$('div.group-links a[href]').click(function() {
   window.open($(this).attr("href")); 
});

$('div.page-down').click(function() {
    $.fn.fullpage.moveSectionDown();
});

$('div.page-up').click(function() {
    $.fn.fullpage.moveSectionUp();
});

$('div.page-down, div.page-up').on("mouseenter", function() {
   $(this).animate({
       opacity: "1"
   }, 300);
}).on("mouseleave", function() {
    $(this).animate({
       opacity: "0.65"
   }, 300);
});

if(document.addEventListener){
	document.addEventListener("DOMContentLoaded", function(){
		loaded();
	});
} else if(document.attachEvent){
	document.attachEvent("onreadystatechange", function(){
		loaded();
	});
}

//function loaded(){

//	setInterval(loop, 700);

//}
function loaded() {

    setInterval(loop, 352); //252

}

var x = 0;

//var titleText = ["(&#65342;&#9697;&#65342;)&#12387;","^&#969;^","&#9696;&#8255;&#9696;"];
//var titleText = [ ">", "> g", "> g0", "> g0d", " > g0dz", "> g0dz.", "> g0dz.u", "> g0dz.us", "< g0dz.u", "< g0dz.", "< g0dz", "< g0d", "< g0", "g <", "<", "<", ];
var titleText = [ "empty inside", ];//"g0dz", "g0dz.", "g0dz.us", ]; //"g0dz.us", "g0dz.us", ]; //"g0dz.u", "g0dz.", "g0dz", "g0d", "g0", "g", "-", ];

function loop(){

	document.getElementsByTagName("title")[0].innerHTML = titleText[x++%titleText.length];

}

function select(elem) {
    var rng, sel;
    if (document.createRange) {
        rng = document.createRange();
        rng.selectNode(elem);
        sel = window.getSelection();
        var strSel = '' + sel;
        if (!strSel.length) {
            sel.removeAllRanges();
            sel.addRange(rng);
        }
    } else {
        var rng = document.body.createTextRange();
        rng.moveToElementText(elem);
        rng.select();
    }
}

$('div.discord span.copy').click(function() {
    select($(this)[0]);
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
    
    var copied = $('<div class="copied">Copied</div>');
    $(this).parent().append(copied);
    $(copied).animate({
        opacity: "1",
        bottom: "45px"
    }, 500, function() {
        $(this).fadeOut(500, function() {
            $(this).remove();
        });
    });
});

//Testing