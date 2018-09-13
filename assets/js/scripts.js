$( document ).ready(function() {

	var $directional_arrow = $(".directionalArrow");

	setTimeout(
	  function() 
	  {
		if ( $(window).scrollTop() < 140 ) {
        	$directional_arrow.addClass("active");
		}
	  }, 2000);

    $(window).scroll(function(){
        if ($(window).scrollTop() < 140){
        	$directional_arrow.addClass("active");
        }
        else {
        	$directional_arrow.removeClass("active");
        }
    });

	// define elements to bind click event to
	var anchor = ".tabBar__anchor";

	$(anchor).on('click', updateDisplay);

	// direction arrow for hero section
	$directional_arrow.on('click mouseover', goToNextSection);
	var navHeight = $(".mainNav").outerHeight();

	function goToNextSection(event) {
		event.preventDefault();

	    var $this = $(event.target);
	        $next = $this.parent().next();

        $('html,body').animate({
          scrollTop: $next.offset().top - navHeight
        }, 500);
	};

	function updateDisplay(anchor) {
		// prevent default actions
        anchor.stopImmediatePropagation();
		anchor.preventDefault();
		
		// variablize clicked anchor
		var anchor = $(anchor.target);

		// if anchor is already active, do nothing else
		if ( $(anchor).hasClass('active') ) {
			return false;
		};

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



	// TABBAR, COMICSTRIP, and SLIDESHOW
	
	// Link classes that require this behavior
	var links = "slideshow__anchor";
	var slideshowDisplayItem = ".slideshow__display-item";

	// Bind link classes to click event
	$(links).on('click', updateLinkDisplay);

	// Slideshow
	var timeInterval = 4000;

	var slideshowContainer = $(".slideshow");

	if ( $(slideshowContainer).length > 0 ) {
		var slideshowList = $(".slideshow__display-list");
		var slideshowItemsCount = $(".slideShow__nav-list").children(".slideshow__nav-item").length;

		var timeRun = 0
		var interval = setInterval(function(){
		    timeRun += 1;

		    if (timeRun === slideshowItemsCount) {
			    $(slideshowList).css({
			    	"left": "0%"
			    });

				$(".slideShow__nav-list").animate({ scrollLeft: 0 } ,400);

		    	var activeSlide = slideshowDisplayItem+":first";
		    	var activeSlideId = $(activeSlide).attr("id");

				setLinkFromId(activeSlideId);

			    timeRun = 0;
			    return
			} 
			else if ( timeRun === (slideshowItemsCount - 1) ) { 
				$(".slideShow__nav-list").animate( { scrollLeft: (($(".slideShow__nav-list").width() / 3) * timeRun) } ,400);
		    } else {
		    	console.log( ($(".slideshow__nav-item").outerWidth() * slideshowItemsCount ) );
				$(".slideShow__nav-list").animate( { scrollLeft: (($(".slideShow__nav-list").width() / 3) * timeRun) } ,400);
		    };	


		    var activeSlide = slideshowDisplayItem+":nth-of-type("+(timeRun + 1)+")";
		    var activeSlideId = $(activeSlide).attr("id");

			setLinkFromId(activeSlideId);

			setSlideshowPosition(timeRun);

		}, timeInterval);
	};


	// MOBILE NAV
	$(".mainNav__mobile-toggle").click(function(event) {
		if ( $(event.target).hasClass("toggle--open") ) {
			$('.mainNav').addClass('mobile--open');
			$('.mainNav nav').addClass("active");
			$(".toggle--open").removeClass("active");
			$(".toggle--close").addClass("active");
		}
		else {
			$('.mainNav').removeClass('mobile--open');
			$('.mainNav nav').removeClass("active");
			$(".toggle--open").addClass("active");
			$(".toggle--close").removeClass("active");
		}
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

	// Graphs

	// Find graph elements
	// Get data attribute values on .data__value


	// Nav subitems
	var navSubmenu = ".nav__dropdown";

	// Bind link classes to click event
	$(navSubmenu).on('mouseenter', checkSubmenuDisplay);
	// Bind link classes to click event
	$(navSubmenu).on('click', updateSubmenuDisplay);

	function checkSubmenuDisplay(event) {
		$(navSubmenu).removeClass("active");
	}

	function updateSubmenuDisplay(event) {

		var linkTarget = event.target;

		console.log( event.type );

		if ( $(linkTarget).is("a") ) {
			return
		}

        event.stopImmediatePropagation();
		event.preventDefault();

		if ( $(linkTarget).hasClass("active") ) {
			$(linkTarget).removeClass("active");
			return
		}

		$(navSubmenu).removeClass("active");
		$(linkTarget).addClass("active");

	}
});