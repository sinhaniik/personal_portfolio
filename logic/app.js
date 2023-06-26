// THE GITHUB
$('.github').click(function (e) {
	const target1 = e.target.classList[0];
	const target2 = e.target.classList[2];

	if (target1 === 'fa-github' || 'github') {
		window.location = 'https://github.com/sinhaniik';
	} else if (target2 === 'fa-github' || 'github') {
		window.location = 'https://github.com/sinhaniik';
	}
});

// THE TWITTER
$('.twitter').click(function (e) {
	const target1 = e.target.classList[0];
	const target2 = e.target.classList[2];

	if (target1 === 'fa-twitter' || 'twitter') {
		window.location = 'https://twitter.com/sinhaniik';
	} else if (target2 === 'fa-twitter' || 'twitter') {
		window.location = 'https://twitter.com/sinhaniik';
	}
});

//THE LINKEDIN
$('.linkedin').click(function (e) {
	const target1 = e.target.classList[0];
	const target2 = e.target.classList[2];

	if (target1 === 'fa-linkedin' || 'linkedin') {
		window.location = 'https://www.linkedin.com/in/sinhaniik/';
	} else if (target2 === 'fa-linkedin' || 'linkedin') {
		window.location = 'https://www.linkedin.com/in/sinhaniik/';
	}
});

//THE HASHNODE
$('.hashnode').click(function (e) {
	const target1 = e.target.classList[0];
	const target2 = e.target.classList[2];

	if (target1 === 'fa-hashnode' || 'hashnode') {
		window.location = 'https://sinhaniik.hashnode.dev/';
	} else if (target2 === 'fa-hashnode' || 'hashnode') {
		window.location = 'https://sinhaniik.hashnode.dev/';
	}
});

// NAVBAR BUTTON RESUME ADDED
$('.nav_btn').click(function (e) {
	window.location =
		'https://drive.google.com/file/d/1NaLkP2KA7vM_issTMQgwJsxKm1ZAaV6R/view?usp=share_link';
});

// Project crown_clothing link added
$('.crown_clothing').click(function (e) {
	const className = e.target.className;
	const myArray = className.split(' ');

	if (myArray[0] === 'crown_clothing') {
		window.location = 'https://github.com/sinhaniik/Crown-Clothing';
	}
});
// Project portfolio link added
$('.portfolio').click(function (e) {
	const className = e.target.className;
	const myArray = className.split(' ');

	if (myArray[0] === 'portfolio') {
		window.location = 'https://github.com/sinhaniik/personal_portfolio';
	}
});
// Project music_band link added
$('.music_band').click(function (e) {
	const className = e.target.className;
	const myArray = className.split(' ');

	if (myArray[0] === 'music_band') {
		window.location = 'https://github.com/sinhaniik/music_band';
	}
});

$(".blog_h1").click(function(e) {
	const className = e.target.className
	
	if(className === "blog_h1") {
		window.location = 'https://sinhaniik.hashnode.dev/';
	}
})
