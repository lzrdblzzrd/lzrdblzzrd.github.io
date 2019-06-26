// $('.heading .animated').each(function(i) {
// 	var $animate = $(this);
// 	setTimeout(function() {
// 	$animate.addClass('fadeIn');
// 	}, i*600); // delay 100 ms
// });

$('.animated').each(function(i) {
	var $animate = $(this);
	setTimeout(function() {
		$animate.addClass('fadeInDown');
	}, i*300); // delay 100 ms
});

particlesJS('particles', {
	particles: {
		color: '#fff',
		color_random: false,
		shape: 'circle', // "circle", "edge" or "triangle"
		opacity: {
			opacity: .5,
			anim: {
				enable: true,
				speed: 1.5,
				opacity_min: 0,
				sync: false
			}
		},
		size: 2,
		size_random: true,
		nb: 100,
		line_linked: {
			enable_auto: true,
			distance: 150,
			color: '#fff',
			opacity: .7,
			width: .5,
			condensed_mode: {
				enable: false,
				rotateX: 600,
				rotateY: 600
			}
		},
		anim: {
			enable: true,
			speed: 1
		}
	},
	interactivity: {
		enable: false,
		mouse: {
			distance: 300
		},
		detect_on: 'canvas', // "canvas" or "window"
		mode: 'grab', // "grab" of false
		line_linked: {
			opacity: .5
		},
		events: {
			onclick: {
				enable: false,
				mode: 'push', // "push" or "remove"
				nb: 4
			},
			onresize: {
				enable: true,
				mode: 'out', // "out" or "bounce"
				density_auto: false,
				density_area: 800 // nb_particles = particles.nb * (canvas width *	canvas height / 1000) / density_area
			}
		}
	},
	/* Retina Display Support */
	retina_detect: true
});