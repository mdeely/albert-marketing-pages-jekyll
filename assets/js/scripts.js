$( document ).ready(function() {

	///////////////////////
	// For fade in effect//
	///////////////////////

	$(function() {
	    $('body').removeClass('fade-out');
	});



	//////////////////////
	// Gather elements //
	/////////////////////

	var navSubmenu = ".nav__dropdown";
	var $directional_arrow_scroll = $(".directionalArrow.scrollTo");
	var anchor_tabs = ".tabBar__anchor[href*='#']";
	var anchor_form = "[href*='form'][href*='#']";
	var section_form = "section.leadGen";
	var mainNav = $(".mainNav");
	var navHeight = $(".mainNav").outerHeight();
	var $slide = $(".slide__link");
	var $mobileNavMenu = $(".mainNav__mobile-toggle");



	////////////////////
	// Bind to events //
	////////////////////

	$directional_arrow_scroll.on('click mouseover', goToNextSection);
	$slide.on('click', updateSlideshowDisplay);
	$mobileNavMenu.on('click', updateMobileNavMenu);
	$(anchor_tabs).on('click', handleAnchorClick);
	$(anchor_form).on('click', handleAnchorFormClick);
	$(section_form).on('click', closeSectionForm);

	$(navSubmenu).on('click', updateSubmenuDisplay);



	///////////////////////////////////
	// For 'scroll to' arrow on hero //
	///////////////////////////////////

	setTimeout(
	  function() 
	  {
		if ( $(window).scrollTop() < 140 ) {
        	$directional_arrow_scroll.addClass("active");
		}
	  }, 4000);

    $(window).scroll(function(){
        if ($(window).scrollTop() < 140){
        	$directional_arrow_scroll.addClass("active");
        }
        else {
        	$directional_arrow_scroll.removeClass("active");
        }
    });



	///////////////////////////////////////////////////////////////////
	// The following will wrap all restricted marks with a <sup> tag //
	///////////////////////////////////////////////////////////////////
	$('body :not(script)').contents().filter(function() {
	    return this.nodeType === 3;
	}).replaceWith(function() {
	    return this.nodeValue.replace(/[™®©]/g, '<sup>$&</sup>');
	});



	/////////////////////////////////////////////////////////////
	// Hide nav when user scroll up, show when user scroll down//
	/////////////////////////////////////////////////////////////

	var prevScrollpos = window.pageYOffset;
	window.onscroll = function() {
	  var currentScrollPos = window.pageYOffset;
	  if (prevScrollpos > currentScrollPos) {
	   		$(mainNav).css("top", 0);
	  } else if ( currentScrollPos < 200 ) {
	   		$(mainNav).css("top", 0);
	  }
 		else {
	   		$(mainNav).css("top", -navHeight);
	  }
	  prevScrollpos = currentScrollPos;
	}



	/////////////////////////////////////////////////////////////////////////////////
	// The following will highlight comic panels as they come in to view on mobile //
	/////////////////////////////////////////////////////////////////////////////////

	if ( $("section.comicStrip").length > 0 ) {	

		$('.comicPanel__item').appear();

		$(document.body).on('appear', '.comicPanel__item', function(e, $affected) {
		$affected.each(function() {
		$(this).removeClass("active");
		})

		$(this).addClass("active");
		});

		$(document.body).on('disappear', '.comicPanel__item', function(e, $affected) {
		$affected.each(function() {
		  $(this).removeClass('active');
		})

		$(this).removeClass("active");
		});
	}



	///////////////
	// Functions //
	///////////////

	function closeSectionForm(event) {
		var $leadGen = $(event.target);

		if ( $leadGen.hasClass("modal") ) {
			$leadGen.removeClass("active");
			$('body').removeClass("no-scroll");
		};
	}

	function handleAnchorFormClick(form_anchor) {
        form_anchor.stopImmediatePropagation();
		form_anchor.preventDefault();
		
		var $form_anchor = $(form_anchor.target);

		var form_id = $form_anchor.attr('href').replace('#','');

		$('section[id='+form_id+']').addClass('active');
		$('body').addClass("no-scroll");
	}

	function goToNextSection(event) {
		event.preventDefault();

		console.log("going to next section which is");

	    var $this = $(event.target);
	        $next = $this.parent().next();

		console.log($this);
		console.log($next);

        $('html,body').animate({
          scrollTop: $next.offset().top - navHeight
        }, 500);
	};

	function handleAnchorClick(anchor) {
        anchor.stopImmediatePropagation();
		anchor.preventDefault();
		
		var anchor = $(anchor.target);

		if ( $(anchor).hasClass('active') ) {
			return false;
		};

		updateDisplay(anchor);
	}

	function updateDisplay(anchor) {
		var anchorParent = $(anchor).parents("section");
		var parentList = $(anchor).parents(".tabBar__list");
		var anchorHref = $(anchor).attr("href");
		var additionalTargets = $("[data-additional-target='"+anchorHref+"']");
		var myScrollPos = $(anchor).offset().left + $(anchor).outerWidth(true)/2 + $(parentList).scrollLeft() - $(parentList).width()/2;

		$(parentList).animate({scrollLeft: myScrollPos}, 300);
		$(anchorParent).find('.active').removeClass('active');
		$(anchor).addClass('active');
		$(anchorHref).addClass("active");
		$(additionalTargets).addClass("active");
	}

	function updateSlideshowDisplay(event) {
		event.preventDefault();

		var $link = $(event.target);

		if ( $link.hasClass("active") ) {
			return;
		}

		var $parent = $link.parents("section.slideshow");

		if ( $link.hasClass("next") ) {
			var $activeElement = $parent.find($(".slide__link.active"));

			if ( $activeElement.next().is(".next") ) {
				var $nextElement = $parent.find(".slide__link:first");
				var $link = $nextElement;
				var $activeElements = $parent.find($(".slide__link.active, .slide.active"));

				var id = $link.attr('href');

				$parent.find($activeElements).removeClass('active');
				$parent.find($link).addClass('active');
				$parent.find(id).addClass('active');
				return;
			}

			var $nextElement = $activeElement.next(":not(.next)");
			var $link = $nextElement;
		}

		var $activeElements = $parent.find($(".slide__link.active, .slide.active"));

		var id = $link.attr('href');

		$parent.find($activeElements).removeClass('active');
		$parent.find($link).addClass('active');
		$parent.find(id).addClass('active');
	}

	function updateMobileNavMenu(event) {
		var $mainNav = $('.mainNav');
		var $toggleOpen = $('.toggle--open');
		var $toggleClose = $('.toggle--close');

		if ( $(event.target).hasClass("toggle--open") ) {
			$mainNav.addClass('mobile--open');
			$mainNav.find('nav').addClass("active");
			$toggleOpen.removeClass("active");
			$toggleClose.addClass("active");
		}
		else {
			$mainNav.removeClass('mobile--open');
			$mainNav.find('nav').removeClass("active");
			$toggleOpen.addClass("active");
			$toggleClose.removeClass("active");
		}
	}


	function updateLinkDisplay(event) {
		if ( $(event.target).hasClass('active') ) {
			return false;
		}
		
        event.stopImmediatePropagation();
		event.preventDefault();

		var linkTarget = event.target;
		var linkClassString = $(linkTarget).attr('class').replace("active", "");
		var linkClass = "."+linkClassString
		var linkParentElement = $(linkTarget).parents("section");

		$(linkParentElement).find(linkClass).removeClass('active');
		$(linkTarget).addClass('active');

		var linkTargetHref = $(linkTarget).attr('href');
		setLinkFromHref(linkTargetHref);
	};

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

	function updateSubmenuDisplay(event) {

		var linkTarget = event.target;

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