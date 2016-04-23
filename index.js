$(document).ready(function(){ 

	$(".icon-menu").click(function(){
		$(".menu").animate({
			right: "0px"
		}, 200);

		$("body").animate({
			right: "250px"
		}, 200);
	});

	$(".icon-close").click(function(){
		$(".menu").animate({
			right: "-250px"
		}, 200);

		$("body").animate({
			right: "0px"
		}, 200);
	});

	$(".menu").mouseleave(function(){
		$(".menu").animate({
			right: "-250px"
		}, 200);

		$("body").animate({
			right: "0px"
		}, 200);
	});

	$(".button").click(function(e){
		e.preventDefault();
		$("html body").animate({
			scrollTop: $("#introSection").offset().top
		}, 800);
	});

	$(".projectJump").click(function(e){
		e.preventDefault();
		$("html body").animate({
			scrollTop: $("#portfolioSection").offset().top
		}, 800);
	});

	setBindings();

	function setBindings(){
		$("nav a").click(function(e){
			e.preventDefault();
			var sectionID = e.currentTarget.id + "Section";

			$("html body").animate({
				scrollTop: $("#" + sectionID).offset().top
			}, 800);
		})
	}

	// Auto Animation

	$(".fadeInOnload").hide().fadeIn(800);

	$(".fadeInOnloadUp").animate({
		top: "15px"
	}, 800);
	
	$(window).scroll(function(){
		$(".h").each(function(i){

			var bottom_of_object = $(this).offset().top + $(this).outerHeight();
			var bottom_of_window = $(window).scrollTop() + $(window).innerHeight();

			if (bottom_of_window > bottom_of_object){
				$(this).fadeTo(400,1);
			}
		});
	});

	/*$(window).click(function(){
		for(i = 1; i < 7; i++){
			document.getElementById("project" + i.toString()).css("opacity":"1");
		}
	});*/

	$(window).scroll(function(){
		$(".h2").each(function(j){

			var middle_of_object = $(this).offset().top + $(this).outerHeight()/2;
			var bottom_of_window = $(window).scrollTop() + $(window).innerHeight();
			var n = 1;

			if (bottom_of_window > middle_of_object){
				$(this).fadeTo(500,1);
			}
		});
	});

	// scroll global parameters
	sqs_css = ".wrap { font-family:Georgia } "
	sqs_title = "Keep In Touch"
	sqs_label_submit = "Send Message"
	sqs_label_message = "Details"
	sqs_label_subject = "What position are you seeking?"
	sqs_placeholder_name = "Provide your full name"
	sqs_placeholder_message = "A description of your relevant background and interests."

});