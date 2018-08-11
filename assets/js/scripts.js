$( document ).ready(function() {

	// TABBAR, COMICSTRIP, and SLIDESHOW
	
	// Link classes that require this behavior
	var links = ".tabBar__anchor, .slideshow__anchor";
	var slideshowDisplayItem = ".slideshow__display-item";

	// Bind link classes to click event
	$(links).on('click', updateLinkDisplay);

	// Slideshow
	var timeInterval = 3000;

	var slideshowContainer = $(".slideshow");
	var slideshowList = $(".slideshow__display-list");
	var slideshowItemsCount = $(".slideShow__nav-list").children(".slideshow__nav-item").length;

	var timeRun = 0
	var interval = setInterval(function(){
	    timeRun += 1;
	    if(timeRun === slideshowItemsCount){
		    $(slideshowList).css({
		    	"left": "0%"
		    });

	    	var activeSlide = slideshowDisplayItem+":first";
	    	var activeSlideId = $(activeSlide).attr("id");

			setLinkFromId(activeSlideId);

		    timeRun = 0;
		    return
	    }

	    var activeSlide = slideshowDisplayItem+":nth-of-type("+(timeRun + 1)+")";
	    var activeSlideId = $(activeSlide).attr("id");

		setLinkFromId(activeSlideId);

		setSlideshowPosition(timeRun);

	}, timeInterval);


	// MOBILE NAV
	$(".mainNav__mobile-toggle").click(function() {
		console.log("mobile nav clicked");
		$(".toggle--open").toggle();
		$(".toggle--close").toggle();

		$('.mainNav nav').toggle();
	});


	function updateLinkDisplay(event) {

		// If the target is already active, do nothing else. 
		if ( $(event.target).hasClass('active') ) {
			return false;
		}
		
		// Prevent default actions. Prevent adding hash to urll;
        event.stopImmediatePropagation();
		event.preventDefault();

		var linkTarget = event.target;
		var linkClassString = $(linkTarget).attr('class').replace("active", "");
		var linkClass = "."+linkClassString
		var linkParentElement = $(linkTarget).parents("section");

		// Remove .active from all anchor items _within their target's parent_
		$(linkParentElement).find(linkClass).removeClass('active');

		// Add .active to target
		$(linkTarget).addClass('active');

		if ( $(event.target).hasClass("slideshow__anchor") ) {
	        clearInterval(interval);

 			var index = $( ".slideshow__anchor" ).index( this );

	        setSlideshowPosition(index);
		}

		// Grab href to find the matching element with that id
		var linkTargetHref = $(linkTarget).attr('href');

		setLinkFromHref(linkTargetHref);
	};

	function setLinkFromId(linkTargetId){
		var targetNav = $('.slideshow__anchor[href="#'+linkTargetId+'"]');

		$('.slideshow__anchor').removeClass('active');
		$(targetNav).addClass('active');
	}

	function setLinkFromHref(linkTargetHref){
		if ( $(linkTargetHref).length )  {
			var targetClassString = $(linkTargetHref).attr('class').replace("active", "");
			var targetClass = "."+targetClassString;

			$(targetClass).removeClass('active');
			$(linkTargetHref).addClass('active');

			var additionalTargets = $("[data-additional-target='"+linkTargetHref+"']");

			$(additionalTargets).siblings('.active').removeClass('active');
			$(additionalTargets).addClass('active');
		}
	}

	function setSlideshowPosition(positionNum) {
	    $(slideshowList).css({
	    	"left": "-"+(positionNum * 100)+"%"
	    });
	}

	// function next() {
	// 	// go to next slide
	// }

	// function previous() {
	// 	// go to previous slide
	// }

	// function showSlideFromNavLink() {
	// 	// go to previous slide
	// }
});