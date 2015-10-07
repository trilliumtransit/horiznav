
$.fn.horiznav = function(args) {
	

	horiznav = this;

	var minPadding = (8 || args.minPadding);
	
	if(!horiznav.hasClass('horiznav')) {
		horiznav.addClass('horiznav');
	}
	
	var totalWidth = 0;
	var totalMinWidth = 0;
	var $container = horiznav.parent();
	var containerWidth = $container.width();
	
	var lis = horiznav.find('> li').not('.extra-dropdown'); 
	
	var needsSpace = false;
	
	lis.each(function() {
		var liWidth = $(this).width();
		totalWidth += liWidth;
		totalMinWidth += liWidth;
		var leftPadding = parseInt($(this).css('paddingLeft').replace(/[^-\d\.]/g, ''));
		var leftPaddingMinDif = leftPadding - minPadding;
		totalMinWidth -= leftPaddingMinDif;
		var rightPadding = parseInt($(this).css('paddingRight').replace(/[^-\d\.]/g, ''));
		var rightPaddingMinDif = rightPadding - minPadding;
		totalMinWidth -= rightPaddingMinDif;
		// need to subtract the space
		//console.log(liWidth);
		if(totalMinWidth > containerWidth){
			needsSpace = true;
		}
	});
	/*
	while(needsSpace == true) {
		//append li to end
		if(horiznav.find('.extra-dropdown').length == 0){
			horiznav.append('<li class="extra-dropdown"><a href="#">More</a><ul></ul></li>');
			// first time do it twice
			var extraDropdown = horiznav.find('.extra-dropdown ul');
			var lastWidth = lis.last().width();
			lis.last().appendTo(extraDropdown);
			lis = lis.slice(0, -1); 
			totalWidth -= lastWidth;
			//console.log('lis count: ', lis.length);
		}
		var extraDropdown = horiznav.find('.extra-dropdown ul');
		var lastWidth = lis.last().width();
		lis.last().appendTo(extraDropdown);
		lis = lis.slice(0, -1); 
		totalWidth -= lastWidth;
		 
		if(totalWidth < containerWidth){
			needsSpace = false;
		}
	
	}
	
	totalWidth = 0;
	totalMinWidth = 0;
	if(horiznav.find('.extra-dropdown').length == 1){
		totalWidth += horiznav.find('.extra-dropdown').width();
	}
	
	lis.each(function() {
		var liWidth = $(this).width();
		totalWidth += liWidth;
		totalMinWidth += liWidth;
		
		var leftPadding = parseInt($(this).css('paddingLeft').replace(/[^-\d\.]/g, ''));
		console.log('leftPadding: ',leftPadding);
		var leftPaddingMinDif = leftPadding - minPadding;
		totalMinWidth -= leftPaddingMinDif;
		var rightPadding = parseInt($(this).css('paddingRight').replace(/[^-\d\.]/g, ''));
		var rightPaddingMinDif = rightPadding - minPadding;
		totalMinWidth -= rightPaddingMinDif;
		// need to subtract the space
		//console.log(liWidth);
		if(totalMinWidth > containerWidth){
			needsSpace = true;
		}
	});
		
	// if more space available than first item in drop down
	var noMove = false;
	
	while(needsSpace == false && noMove == false) {
		var spaceAvail = containerWidth - totalWidth;
		if(extraDropdownItems.length >= 3) {
			// if the space
			if(extraDropdownItems.first().width() < spaceAvail){
				spaceAvail -= extraDropdownItems.first().width();			
				extraDropdownItems.pop().appendTo($container);
			} else {
				noMove = true;
			}
		} else if(extraDropdownItems.length == 2){
			// two items 
			console.log(extraDropdownItems.length);
			console.log(extraDropdownItems);
			extraDropdownItems.each(function(li){
				console.log($(li));
			});
			if( ($(extraDropdownItems[0]).width() + $(extraDropdownItems[1]).width() ) < spaceAvail){
				spaceAvail += ($(extraDropdownItems[0]).width() + $(extraDropdownItems[1]).width() );			
				extraDropdownItems.shift().appendTo($container);
				extraDropdownItems.shift().appendTo($container);
			}  else {
				noMove = true;
			}
		} else {
			noMove = true;
		}
	
		if(totalWidth > containerWidth){
			needsSpace = true;
		}
	}
	
	
	//console.log('totalWidth: ',totalWidth);
	//console.log('containerWidth: ',containerWidth);
	*/
	lis = horiznav.find('> li');
	
	 totalWidth = 0;
	 totalMinWidth = 0;
	 
	lis.each(function() {
		var liWidth = $(this).width();
		totalWidth += liWidth;
		
		// need to subtract the space
		//console.log(liWidth);
		
	});
	
	var widthDif = containerWidth - totalWidth;
	var extraPadding = widthDif/lis.length/2;
	
	//console.log('extraPadding: ',extraPadding);
	
	lis.each(function() {
		// find amount of padding, on each side, add in extra padding
		var paddingLeft = $(this).find('a').css('paddingLeft').replace(/[^-\d\.]/g, '');
		$(this).find('a').css('paddingLeft', Math.floor(extraPadding) + parseInt(paddingLeft));
	
		var paddingRight = $(this).find('a').css('paddingRight').replace(/[^-\d\.]/g, '');
		$(this).find('a').css('paddingRight', Math.floor(extraPadding) + parseInt(paddingRight));
	});

	// find element width
	// add padding to elements until it's evenly spaced.
	
	return this;
};



