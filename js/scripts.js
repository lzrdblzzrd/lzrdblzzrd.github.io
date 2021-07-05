var videos = ["MZQz4mf2Q8g", "EfPlon91dwU", "T-OwX_s1Fbk", "l7v8DAbIOx0"];
var random = videos[Math.floor(Math.random() * videos.length)];

function onBodyLoad() {
	document.title = "Loading..."
	var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
	link.rel = 'icon';
	link.href = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACh0lEQVRYR72XMWzTQBSG36tUpykgwgbt1pklHQgMEFAHUJwiMdQMTCw1QgIJMSFm2AAJlqZLdjNEonWAAdFUSKQMdGHvBO2WAIXEBnTojGydfefznQ14S+6/e9977+7dOwSNr93pVPyfxg4QqAinIQx/+WTu+pXmQHVZVBGuOO4uAhxV0TKaPdsyj2XNkQK0nO4zALKYtYhsHAnpLl9ummmaVICW45Isw4cPHQwkX/a/ASFyuW2ZQlvCP9OMn63Nw1TJkHKNfR82+u+FGhEEByAyXq9VoVwqcYu+6r0BAAIL9dPc2MjzobfFgyQhYgAi4xfOnEz1+N6Dx8HY3ds3UzUvNvvcGAsRAaw47hoCNFm1zDjVqQBQHQeB8NxeMht0LAJIep9lXAdABBFGIQBInvN6bR7KGZtNF2DkedDb2mYCjJ9sqzEbAOTxXhcgLQrY7ryu+D++R6VT5aiFbqjugVA/9nzYYE6GMekfwdZTd8DWdpXc5wUQRGGIecOfJwWiNMQA6IY4Lzn3yQOtmwI6/+VmH9iiHQOgtf1U9XjWFRCNhwCyCRMTCHdu3Ygkb7c/wOev+9HvQgD3Hz7JvIS0AHRToBwqRihNAdXpnII8AMmyTFNAa0DUYv1ngEGhQqQbAWEhKlKKdQGS4acXUsplJG5AdA2y+tHYg9475jJC3LWXGjOFrmMdIJH3sX4gT0OiCsB3RbhmW42LMQDRXvgbx1K5JQu9ETalJ6pQnuKbUlkE+Abkj1ralMog6JhKr1C4Lc+CYL3+Zw+T0Miq03UJkKB7zfshwPqyZaY+75Qepy1n/SMAzuhAEIC9a0Ufp0mDj9qdyvQBY4e9OxKagTE5PXf10rmhKuxv7dY04RXN8/AAAAAASUVORK5CYII=';
	$("#loadinggif").fadeTo(500, 1);
	$("#bgndVideo").YTPlayer();
	$(document).on('mousemove', (event) => {
		$('#enterbutton').css({
			left: event.clientX,
			top: event.clientY,
		});
	});
	myPlayer = jQuery('#bgndVideo').YTPlayer( {
		onReady: function( player ) {
			setTimeout(function () {
				$("#loadinggif").fadeTo(250, 0);
				$("#enterbutton").fadeTo(250, 1);
				setTimeout(function() {
					$("#loadinggif").remove();
				}, 500);
				document.body.addEventListener('mouseenter', function(e) {
					$("#enterbutton").fadeTo(100, 1);
				});
				document.body.addEventListener('mouseout', function(e) {
					if (!e.relatedTarget && !e.toElement) {
						$("#enterbutton").fadeTo(100, 0);
					}
				});
				document.title = "​";
				var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
				link.rel = 'icon';
				link.href = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=';
			}, 500);
		}
	});    
};
			
			

function enter(e) {
	$("#enterbutton").css( 'pointer-events', 'none' );
	$("#enterbutton").fadeTo(1000, 0);
	$("#plugdiv").fadeTo(1000, 0);
	$("#logo, #links").addClass("parallax");
	$('<div class="rainbowlinetop"></div><div class="rainbowlinebottom"></div>').appendTo('body');
	$("#maincontent").show();
	setTimeout(function() {
		$("#plugdiv").remove();
		$("#maincontent").fadeTo(1000, 1);
	}, 1000);
	$("#bgndVideo").YTPUnmute();
	$("#bgndVideo").YTPPlay();
};

function parallax() {
	var lFollowX = 0,
		lFollowY = 0,
		x = 0,
		y = 0,
		friction = 1 / 50;

	function moveBackground() {
		x += (lFollowX - x) * friction;
		y += (lFollowY - y) * friction;

		translate = 'translate(' + x + 'px, ' + y + 'px)';

		$('.parallax').css({
			'-webkit-transform': translate,
			'-moz-transform': translate,
			'transform': translate
		});

		window.requestAnimationFrame(moveBackground);
	}

	$(window).on('mousemove click', function(e) {
		var lMouseX = Math.max(-50, Math.min(50, $(window).width() / 2 - e.clientX));
		var lMouseY = Math.max(-50, Math.min(50, $(window).height() / 2 - e.clientY));
		lFollowX = (12 * lMouseX) / -100; // 100 : 12 = lMouxeX : lFollow
		lFollowY = (10 * lMouseY) / -100;
	});

	moveBackground();
};



function titleChange() {
	$( "#steam" ).hover(
		function() {
			document.title = "Steam";
			var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
			link.rel = 'icon';
			link.href = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABUklEQVQ4T2NkwALYRHX+YxP/9foKI7o4igCLiAFWjeia/ry5ANcHZzAJGROlGWbYv3dnwXohhKAZXs3/3p2EO4JJyBzO/v/+FCPEACEbnAb8e3uYgUnYluHR5bUMcrrBDDA+SN//d0cYGZmEHfHa/vfNPpQgYBZxYgCJgWiw5cwibjgN+PN6J0ZksIi6M4DEQTTYAFaZAJwG/Hq8HqyITTaQYfn0EobIzB4GkBiIDwOM////BxuwYNV+hoyqOXCJH3eWYksKDBwq0SjicAOQRXl0Uxm+XJ6NohAkhg0wclsW/P9yrB+rJEhww/4LDDHVC3HKg6ORx7Ua7I3Pu1owFPK61eDU/GV3KyQd8AS1wwPy1fJiBrHIXgYHXXmGA5cf4tQMkviyrhJiAAhwx00iKSl/XZSHSMpwQ3IXEGXI18kJmJkJ2a3c9RuxGvS10R8jOwMAXUZwAih0FgUAAAAASUVORK5CYII=';
			document.getElementsByTagName('head')[0].appendChild(link);
		}, function() {
			document.title = "​";
			var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
			link.rel = 'icon';
			link.href = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=';
				}
	);
	$( "#soundcloud" ).hover(
		function() {
			document.title = "SoundCloud";
			var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
			link.rel = 'icon';
			link.href = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAkklEQVQ4T2NkoBAwUqifYbgb8L+BgenHI76/yOHEOe8TirexhsH3JL7//xn+X2RkYNTHFsjIhqAYANIIkgTR+GIHw4DvSXz1nPM+NYI0fvv/W46LkfURMdHLyMCoDLeN8S+jyn/m/3cYGf53/mdgLCfGAJAaxme+DFz8onwV3PM+1RHrBZjhIK8M94RETEBSHAYAydw1Ar0g54gAAAAASUVORK5CYII=';
		}, function() {
			document.title = "​";
			var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
			link.rel = 'icon';
			link.href = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=';
		}
	);
	
	$( "#discord" ).hover(
		function() {
			document.title = "Discord";
			var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
			link.rel = 'icon';
			link.href = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAfElEQVQ4T62T0Q3AIAhEj3TTztAxOkM3NTY0wSiejQb9hOMJhwqCR4L16AD3k7NCr1Oa3CheRCYAkAAcg85Kzi5ggKmpGkB1+1SxiRTydbAdoGQPHcWo0FpkzntwB6hX6AFsVApYcTIO8Fuw/TITmXbquf6Zuv8zrRio2hcmglaxilCskAAAAABJRU5ErkJggg==';
		}, function() {
			document.title = "​";
			var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
			link.rel = 'icon';
			link.href = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=';
		}
	);
			
	$( "#instagram" ).hover(
		function() {
			document.title = "Instagram";
			var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
			link.rel = 'icon';
			link.href = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACtUlEQVQ4T32SX2hOYRzHP895d855XzPbroQbF9y4kCX5N2szLMMYmV1IiTDZbibmggsp/yNz4UYSxYVmzTKrGbMRi0jtQiilxjalbcb7nnOe56fzbEjJqd/59dTz+fy+z9OjmPiW734mqUCRSiuSASRDfnc/EpKRIRkJvhE8Y9jzolDFqP2t2tkrk9KKVOYPlApiCAv6WmwltcEXgycGF03Vy1Klqqp7JRkIqXC8zrUt+hXqn72p4D6uMnhK4xGh6st6xNfa2g93FnPn4Ev6uz/jxVEF27MMZKGYXjSN+ecK6FrQgqsiEo5BnV92T3wJ2dO9lu6Gxwx2fcQnwo1jqjhqDIOjHBY+2ca7Qz3MOl7Is0W3bELVtOS6eASsebyd7mWNNpanQgoeHfjrCG+KzxKRIox85vXs+CPoLTolvvrB3IdH+LByP66TYUZ7o4UHVteijcf09rN2/bbkJKFJMaerjueLb6DFRX0qqxE/a4z81quMVlTbjTktNxletxUjWWjx0MZnalsjH1YcITSTmN3ZwKvCy4R6Mmq0okoSKiDVfJtgY7kVeE13SVdWYMS1CSKTJL/1Cv1l9QQ6m5kdR+krukgQCzKVqyXhBCRudUB18fjLuPHQiqJNq+x0//Ydux4qr7GCGe1neFNyhiDKQcnmIiHbgSsPoK50XGCAxvt/XeLY+s0WjqdObbvI++XHyOhYsLtEyHHgdAc0n4S+TtBAxsCYwKhGRoRwAmZpKZMP7LL3EVhBwwohNwHZCmrb4MkleN0CP2LYwLCGrxoz4qCLN+Duq2WwfC+ZaIotJSfKhDwHpiQgqaCy5b9P+dv6Lb9hK4h3y821Ql6cwoEEEAiMGDuZLxqGIhiMMMMJ0nZyrpVMa7+grMBKnlaOH8VV8H0CHtIWtDWgkSFt4XSUS37rNcv+BJ5iVd3oUl+iAAAAAElFTkSuQmCC';
		}, function() {
			document.title = "​";
			var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
			link.rel = 'icon';
			link.href = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=';
		}
	);
			
	$( "#telegram" ).hover(
		function() {
			document.title = "Telegram";
			var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
			link.rel = 'icon';
			link.href = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAj0lEQVQ4T6WTTRKAIAiFYdMh2tjROppHy0WXaGNDDcUgOP64RN/3HqgIkwsn9TAE2GLKZHzsAZsBIaYTAVaZuAnAbr8wXwC4VBOUojeurhcJLCE7WWLae2ZQE3r75P4BuD85XV3T120C9CEvGbdVJJCAmrgL4E2fzdyHRAm4Tz1IWW9+iRIyDLA+XlcCC3ADTR5KEQjpym8AAAAASUVORK5CYII=';
		}, function() {
			document.title = "​";
			var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
			link.rel = 'icon';
			link.href = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=';
		}
	);
};

function blocker() {
	function stop() {
		return false
	}
			
	document.ondragstart = stop;
	document.onselectstart = stop;
	document.oncontextmenu = stop;
			
	document.onkeydown = function(e) {
		if(event.keyCode == 123) { return stop() }
		if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)){ return stop() }
		if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)){ return stop() }
		if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)){ return stop() }
		if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)){ return stop() }
	}
};

function redirecter() {
	(function(a,b){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))window.location=b})(navigator.userAgent||navigator.vendor||window.opera,'mobile/');
};
