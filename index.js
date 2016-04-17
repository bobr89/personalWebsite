var main = function(){

	$(".icon-menu").click(function(){
		$(".menu").animate({
			right: "0px"
		}, 200);
	});

	$(".icon-close").click(function(){
		$(".menu").animate({
			right: "-300px"
		}, 200);
	});

	$(".menu").click(function(){
		$(".menu").animate({
			right: "-300px"
		}, 200);
	});

	$(".button").click(function(){
		$("html body").animate({
			scrollTop: $("#introSection").offset().top
		}, 1000);
	});

	setBindings();

	function setBindings(){
		$("nav a").click(function(e){
			e.preventDefault();
			var sectionID = e.currentTarget.id + "Section";

			$("html body").animate({
				scrollTop: $("#" + sectionID).offset().top
			}, 1000)
		})
	}

	// squaresend global parameters
	sqs_css = ".wrap { font-family:Georgia } "
	sqs_title = "<img src='//i.imgur.com/KkxSdlp.png'>Keep In Touch"
	sqs_label_submit = "Send Message"
	sqs_label_message = "Details"
	sqs_label_subject = "What position are you seeking?"
	sqs_placeholder_name = "Provide your full name"
	sqs_placeholder_message = "A description of your relevant background and interests."

}

$(document).ready(main);