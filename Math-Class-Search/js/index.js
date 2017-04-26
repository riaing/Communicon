$.fn.toggleState = function(b) {
	$(this).stop().animate({
		width: b ? "300px" : "50px"
	}, 600, "easeOutElastic" );
}

$(document).ready(function() {
	var container = $(".container");
	var boxContainer = $(".search-box-container");
	var submit = $(".submit");
	var searchBox = $(".search-box");
	var response = $(".response");
	var isOpen = false;
	submit.on("mousedown", function(e) {
		e.preventDefault();
		boxContainer.toggleState(true);
		isOpen = !isOpen;
		if(!isOpen) {
			handleRequest();
		} else {
			searchBox.focus();
		}	
	});
	searchBox.keypress(function(e) {
		if(e.which === 13) {
			boxContainer.toggleState(true);
			isOpen = false;
			handleRequest();
		}
	});
	searchBox.blur(function() {
		boxContainer.toggleState(true);
		isOpen = false;
	});
	function handleRequest() {
		// You could do an ajax request here...
		var value = searchBox.val().trim();
		var classNum = value.replace(" ", "");
		var answered = false;
		searchBox.val('');
		if(value.length > 0) {
			if (classNum.substring(0,4).toUpperCase() == 'MATH') {
				switch(classNum.substring(4,7)){
					case '521':
						response.text(('Math 521:This is the introductory real analysis course, which is the foundation for rigorous treatment of functions, differential equations, and also advanced statistics. Although not quite needed for undergraduate level computer science, it is probably needed in many research fields that are relevant to the subjects above, such as algorithm analysis, scientific computation, modelling, etc. Again this course will be mostly theoretical, and not quite relevant to these fields at first glance. But eventually it will if you progress further. Math 528, for example, is a better choice for actually working with differential equations. '));		
						answered = true;
						break;
					case '522':
						response.text(('Math 522:This is the natural continuation of Math 521, which goes further along the direction of theories about differential equations. It also covers some multivariable analysis. '));
						answered = true;
						break;
					case '523':
						response.text(('Math 523:This is the introductory course to complex analysis, which is also very useful in many branches, in particular applied math and PDE (partial differential equations). Although also called analysis, it actually has quite a different flavor from real analysis. Compared to Math 521 it has significantly less theory and proofs. A lot of this course will be integrate certain functions with brand new methods. For example, many real integrals and series that are hard to directly calculate can be solved by complex analysis. '));
						answered = true;
						break;
					case '528':
						response.text(('Math 528:This course will be mainly about Laplace and Fourier transform, two important ways of solving many differential equations and integrals. This course will be very applied, geared towards solving actual differential equations that come up in applications. It also covers some numerical methods, but Math 566 is more specifically about numerical methods. '));
						answered = true;
						break;						
					case '533':
						response.text(('Math 533:Number theory is very important in cryptography algorithms. But this course will not introduce much theory behind all the results. If you really want to delve deep into it, you should probably take the abstract algebra courses (Math 534, 578 and subsequent 600 level courses) instead, since group and field theory are the actual theories behind most of the number theory. However these abstract algebra courses also cover a lot of other stuff, and admittedly they are quite abstract (as the name suggests) and hard.'));
						answered = true;
						break;
					case '547':
						response.text(('Math 547:This is perhaps the most useful course in math department for computer science majors. Just to name a few applications, linear algebra is used in differential equations, statistics (especially regression and approximation), modelling, image processing, Markov chains, etc. Depending on the instructor, there may also be some introduction about the actual computation, and usage of softwares like Matlab and Mathematica. Again depending on the instructor, the course may not cover enough of orthogonality (Gram-Schmidt) and eigenvalues, which are really the most important stuff in application. '));
						answered = true;
						break;
					case '577':
						response.text(('Math 577:This is also called linear algebra, but it is from a much more theoretical (abstract algebra) point of view. There will not be usage of softwares, but rather proofs instead. It does cover inner products, Gram-Schmidt, eigenvalues, etc, which I personally think are the most important parts. This course belongs to the abstract algebra sequence, so it is probably needed if you want to go along this line.'));
						answered = true;
						break;												
				}
			}
			if (! answered){
				response.text(('Info for ' + value + ' currently not available...\nTry searching for Math 521, Math 522, Math 523, Math 528, Math 533, Math 547, Math 577...'));
			}
			response.animate({
				opacity: 1,
				paddingRight: "50px",
				paddingLeft: "50px"
			}, 300).delay(8000).animate({
				opacity: 1,
				paddingRight: "50px",
				paddingLeft: "50px"
			}, 300);
		}
	}
});