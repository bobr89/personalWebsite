var main = function(){

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

	// squaresend global parameters
	sqs_css = ".wrap { font-family:Georgia } "
	sqs_title = "Keep In Touch"
	sqs_label_submit = "Send Message"
	sqs_label_message = "Details"
	sqs_label_subject = "What position are you seeking?"
	sqs_placeholder_name = "Provide your full name"
	sqs_placeholder_message = "A description of your relevant background and interests."

};

$(document).ready(main);