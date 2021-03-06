var totalPoints = 28;

var renderPerks = function () {
    var html = '',
        special = getSPECIAL();
		specialRu = getSPECIALru();

    html += '<tr>';
    for (var i = 0; i < special.length; ++i) {
        html += '<th>' + specialRu[i].special.toUpperCase() + ': ' + special[i].value + '</th>';
    }
    html += '</tr>';

    for (var i = 0; i <= 9; ++i) {
        html += '<tr>';
        for (var j = 0; j < perks.length; ++j) {
            var perk = perks[j].perks[i],
                className = i > special[j].value - 1 ? ' unavailable' : '';

            if (!perk.currentRank) {
                perk.currentRank = 0;
            }
			if (className == ' unavailable') {
                perk.currentRank = 0;
            }

            var title = '';
            title += perk.ranked.map(function (rank) {
                var rankClass = perk.currentRank >= rank.rank ? 'has-rank' : 'no-rank';
                return '<p class=' + rankClass + '>Ранг ' + rank.rank + ' (' + rank.level + '): ' + rank.description + '</p>';
            }).join('');

            html += '<td><div oncontextmenu="return false;" data-placement="left" data-trigger="hover" data-original-title="' + perk.name_ru + '" rel="popover" data-html="true" data-content="' + title + '" data-i="' + i + '" data-j="' + j + '" class="perk' + className + '" style="background-image:url(\'img/' + perk.img + '\');">';
            if (className !== ' unavailable') {
                html += '<div class="overlay">&nbsp;' + perk.currentRank + ' / ' + perk.ranks + '&nbsp;</div>';
            }
            html += '</td>';
        }
        html += '</tr>';
    }
    $('.table').html(html);
}

var getJSON = function () {
    return btoa(JSON.stringify({
        s: getSPECIALShort(),
        r: getRanks()
    }));
}

var getRanks = function () {
    var ranks = [];
    for (var i = 0; i < perks.length; ++i) {
        for (var j = 0; j < perks[i].perks.length; ++j) {
            var perk = perks[i].perks[j];
            if (perk.currentRank && perk.currentRank > 0) {
                var item = {};
                item[perk.name] = perk.currentRank;
                ranks.push(item);
            }
        }
    }

    return ranks;
}

var getSPECIALShort = function () {
    var specs = [];
    $('input[type="number"]').each(function () {
        specs.push($(this).val());
    });
    return specs;
};

var getSPECIAL = function () {
    return $('[data-special]').map(function () {
        return {
            special: $(this).data('special'),
            value: $(this).find('input').val()
        };
    });
};

var getSPECIALru = function () {
    return $('[data-special-ru]').map(function () {
        return {
            special: $(this).data('special-ru'),
        };
    });
};

var requiredLevel = function () {
    var total = 0;
    for (var i = 0; i < perks.length; ++i) {
        for (var j = 0; j < perks[i].perks.length; ++j) {
            total += perks[i].perks[j].currentRank;
        }
    }

    var remaining = totalPoints - getAllocatedPoints();
    if (remaining < 0) {
        total += remaining * -1;
    }

    var maxLevel = 0;
    for (var i = 0; i < perks.length; ++i) {
        for (var j = 0; j < perks[i].perks.length; ++j) {
            for (var k = 0; k < perks[i].perks[j].currentRank; ++k) {
                if (perks[i].perks[j].ranked[k].level > maxLevel) {
                    maxLevel = perks[i].perks[j].ranked[k].level;
                }
            }
        }
    }

    if (maxLevel > total)
        total = maxLevel;

    return total;
}

var renderRequiredLevel = function () {
    $('.required-level').text('Необходимый уровень: ' + requiredLevel());
}

var renderAll = function () {
	renderPerks();
    calculatePoints();
    renderRequiredLevel();
    renderSummary();
    window.location.hash = '#' + getJSON();
	$('.perk').mousedown(function(e) {
		var $container = $(this),
            i = parseInt($container.data('i')),
            j = parseInt($container.data('j')),
            perk = perks[j].perks[i],
			special = getSPECIAL();
			className = i > special[j].value - 1 ? ' unavailable' : '';
			if (e.which === 1 && perk.currentRank < perk.ranks && className !== ' unavailable') {
				perk.currentRank += 1;
				renderAll();
			} else if (e.which === 3 && perk.currentRank != 0 && className !== ' unavailable') {
				perk.currentRank -= 1;
				renderAll();
			};
	});
};

var calculatePoints = function () {
	
    var remaining = totalPoints - getAllocatedPoints();
    if (remaining <= 0) {
        remaining = 0;
		$(".points-left").hide(250);
    } else {
		$(".points-left").show(250);
	};
    $pointsLeft.text(remaining + ' очков осталось');
}

var getAllocatedPoints = function () {
    return $('[data-special] input').map(function () {
        return parseInt($(this).val());
    }).get().reduce(function (prev, curr) {
        return prev + curr;
    });
}

var $pointsLeft = $('.points-left');
$includeBobbleheads = $('.include-bobbleheads-check');

var includeBobbleheads = function () {
	return $includeBobbleheads.is(':checked');
}

var pointsRemaining = function () {
    return parseInt($pointsLeft.text());
}

var renderSummary = function () {
    var html = '';
    for (var i = 0; i < perks.length; ++i) {
        for (var j = 0; j < perks[i].perks.length; ++j) {
            var perk = perks[i].perks[j];
			if (perk.currentRank && perk.currentRank > 0) {
				html += '<li>' + perk.name_ru + ': ' + perk.currentRank + '/' + perk.ranks + '</li>';
				html += '<ul>';
				for (var k = 0; k < perk.currentRank; ++k) {
					html += '<li>' + perk.ranked[k].description + '</li>';
				}
				html += '</ul>';
			}
        }
    }

    $('.summary').html(html);
    $('[rel="popover"]').popover();
}

$(function () {
    var hash = window.location.hash.replace('#', '');
    if (hash.length > 0) {
        var load = JSON.parse(atob(hash));
        $('input[type=number]').each(function (index) {
            $(this).val(load.s[index]);
        });

        for (var i = 0; i < load.r.length; ++i) {
            var key = Object.keys(load.r[i])[0],
                value = load.r[i][key];

            for (var j = 0; j < perks.length; ++j) {
                for (var k = 0; k < perks[j].perks.length; ++k) {
                    var perk = perks[j].perks[k];
                    if (perk.name === key) {
                        perk.currentRank = value;
                    }
                }
            }
        }
    }

    renderAll();

    $includeBobbleheads.on('click', function () {
		if (includeBobbleheads()) {
			totalPoints += 7;
		} else {
			totalPoints -= 7;
		}
		renderAll();
    });

    $('.btn-inc').on('click', function () {
        var $li = $(this).parent().parent(),
            $input = $li.find('input'),
            value = parseInt($input.val()),
            remaining = totalPoints - getAllocatedPoints();

        if (value < 10) {
            $input.val(value + 1);
        }

        renderAll();
    });

    $('.btn-dec').on('click', function () {
        var $li = $(this).parent().parent(),
            $input = $li.find('input'),
            value = parseInt($input.val()),
            special = $li.data('special');

        if (value > 1) {
            $input.val(value - 1);

            for (var i = 0; i < perks.length; ++i) {
                if (perks[i].special === special) {
                    for (var j = value - 1; j < perks[i].perks.length; ++j) {
                        perks[i].perks[j].currentRank = 0;
                    }
                }
            }
        }

        renderAll();
    });

    $('body').on('click', '.btn-inc-perk, .btn-dec-perk', function () {
        var $container = $(this).parent().parent(),
            i = parseInt($container.data('i')),
            j = parseInt($container.data('j')),
            perk = perks[j].perks[i],
            incrementing = $(this).hasClass('btn-inc-perk');

        if (!perk.currentRank)
            perk.currentRank = 0;

        if (incrementing) {
            if (perk.currentRank < perk.ranks) {
				perk.currentRank += 1;
            }
        } else {
            if (perk.currentRank > 0) {
                perk.currentRank -= 1;
            }
        }

        renderAll();
    });
});

$('.saveToFile').on('click', function () {
	html2canvas($(".col-md-3")[0]).then(function(canvas) {
		canvas.toBlob(function(blob) {
			saveAs(blob, "F4CP Билд.png");
		});
    });
});

var angle = sessionStorage['angle'] || '0';

(function RainbowColor() {
	$(".rainbow").css({"background-color":"hsla(" + (180 + angle) + ", 100%, 50%, 50%)", "color":"hsl(" + angle + ", 100%, 50%)", "border-color":"hsl(" + (180 + angle) + ", 100%, 50%"});
	(angle < 360 ? angle++ : angle = 0); sessionStorage['angle'] = angle;
	requestAnimationFrame(RainbowColor);
})();