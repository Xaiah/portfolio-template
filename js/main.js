window.onload = function(){

	//initialize portfolio
	var myApp = new portfolio_app('developer');
	myApp.initialize();

}

/* Main Portfolio App  ---------------------------------------------------------------------------------*/
var portfolio_app = function(mode){

	
	var mode = mode; //developer or designer
	var body = document.getElementsByClassName('body-container')[0]; //main

	//INITIALIZE PORTFOLIO APP
	function initialize(){

		//sets all needed components, listeners, etc
		formatBodyPages();
		setBodyTransitions();

	}

	/*----------------------------------------------------------------------
	// fomartBodyPages: sets basic structure for all body pages
	/---------------------------------------------------------------------*/
	function formatBodyPages(){
		//applies upper frame
		var topframe = "<div class='page-frame'></div>";
		$('.body-page').prepend(topframe);
		
		$(document.getElementsByClassName('body-page')[0]).addClass('page-active');
	}


	/*----------------------------------------------------------------------
	// setBodyTransitions: Set event listeners for nav
	/---------------------------------------------------------------------*/
	function setBodyTransitions(){

		var main_nav_links = $('.body-main-header').find('.nav-links li a');

		//listener for nav click
		$(main_nav_links).on('click', function(e){

			var filter_href = e.target.getAttribute('href').split('#'); //filterhref of link by splitting at every #
			var id_string = filter_href[filter_href.length-1]; //gets page's raw id and creates page-id
			var page_id = "#page-" + id_string;

			var destination = $(body).find('.body-slider').find(page_id);

			//if destination exists
			if(destination.length > 0){
				//on click, distance of page is found and applied to body slider to move to page
				document.getElementsByClassName('body-slider')[0].style.left =  "-" + $(destination).css('left');
				setTimeout(function(){
					var current = $('.page-active').attr('id');
					$(destination).addClass('page-active');
					$(document.getElementById(current)).delay(1000).removeClass('page-active');
				},300);
			}
		});


	}

	return{
		initialize: initialize,
	}

};