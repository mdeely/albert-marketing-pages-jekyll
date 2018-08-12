$( document ).ready(function() {

	// define elements to bind click event to
	var anchor = ".tabBar__anchor"
	$(anchor).on('click', updateDisplay);

	function updateDisplay(anchor) {
		// variablize clicked anchor
		var anchor = $(anchor.target);

		// if anchor is already active, do nothing else
		if ( $(anchor).hasClass('active') ) {
			return false;
		};

		// prevent default actions
        event.stopImmediatePropagation();
		event.preventDefault();

		// find object's scope
		var anchorParent = $(anchor).parents("section");
		// get that object's href
		var anchorHref = $(anchor).attr("href");
		// find any additional targets	
		var additionalTargets = $("[data-additional-target='"+anchorHref+"']");

		// remove .active class from everyting in the parent
		$(anchorParent).find('.active').removeClass('active');

		// make anchor active
		$(anchor).addClass('active');
		// make target active
		$(anchorHref).addClass("active");
		// make additional targets active
		$(additionalTargets).addClass("active");
	}

	// SLIDESHOW

	// define and collect slideshow
	var slideshowClass = $(".slideshow");

	var timeInterval = 3000;

	// set interval on each instance of the slideshow
	$.each(slideshowClass, function( index, value ) {

  		console.log( index + ": " + $(value) );

	});

	// define time interval between slides
	// run slideshow on the element(s)

	// TABBAR, COMICSTRIP, and SLIDESHOW
	
	// Link classes that require this behavior
	var links = "slideshow__anchor";
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
});