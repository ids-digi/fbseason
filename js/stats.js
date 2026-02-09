const gameStats = {
	"iu-olddominion" : [
		"193 passing yards",
		"309 rushing yards",
		"30 first downs",
	],
	"iu-kennesawstate" : [
		"280 passing yards",
		"313 rushing yards",
		"28 first downs",
	],
	"iu-illinois" : [
		"267 passing yards",
		"312 rushing yards",
		"31 first downs",
	],
	"iu-michiganstate" : [
		"332 passing yards",
		"132 rushing yards",
		"24 first downs"
	],
	"iu-ucla" : [
		"213 passing yards",
		"262 rushing yards",
		"27 first downs"
	],
	"iu-pennstate" : [
		"218 passing yards",
		"108 rushing yards",
		"20 first downs",
	],
	"iu-wisconsin" : [
		"305 passing yards",
		"83 rushing yards",
		"19 first downs",
	],
	"iu-purdue" : [
		"193 passing yards",
		"355 rushing yards",
		"22 first downs",
	],
	"iu-ohiostate" : [
		"222 passing yards",
		"118 rushing yards",
		"17 first downs",
	],
	"iu-alabama" : [
		"192 passing yards",
		"215 rushing yards",
		"22 first downs",
	],
	"iu-oregon" : [
		"177 passing yards",
		"185 rushing yards",
		"18 first downs",
	],
	"iu-miami" : [
		"186 passing yards",
		"131 rushing yards",
		"20 first downs",
	],
}

const games = document.querySelectorAll('.game');
games.forEach(g => {
	const data = g.querySelector('.data');
	for (var i = 0; i < data.children.length; i++) {
		data.children[i].innerHTML = gameStats[g.id][i];
	}
})
