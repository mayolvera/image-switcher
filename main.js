$("body").on("click", "#man", function (e) {
	e.preventDefault();

	const url = $("#man").data("image");

	$("img").attr("src", url);
});

$("body").on("click", "#baby", function (e) {
	e.preventDefault();

	const url = $("#baby").data("image");

	$("img").attr("src", url);
});