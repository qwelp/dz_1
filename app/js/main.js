var qwelp = (function(){

	var _footerId = '#mainFooter',
		_mainId = "#main",
		_mainPaddingBottom = 40;

	function init(){
		_footerPosition(_footerId, _mainId, _mainPaddingBottom);
	}

	function _footerPosition(footerId, mainId, mainPaddingBottom){
		$(footerId).css("margin-top", "-" + $(footerId).height() + "px");
		$(mainId).css("margin-bottom", ($(footerId).height()+mainPaddingBottom) + "px");
	}

	return {
		init: init
	};

}());

$(document).ready(function($) {
	/*console.log("jobs!");*/
	qwelp.init();
});