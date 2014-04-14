(function () {
	'use strict';

	$.get('https://api.github.com/repos/mattborn/mattborn/commits',
		function (data) {
			var date = data[0].commit.author.date;
			$('.last-updated').html(moment(date).fromNow());
		});

	wt.fix({
		elements: '.doc h1, .doc p',
		method: 'nbsp',
		event: 'resize'
	});
})();
