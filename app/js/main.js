var qwelp = (function(){

	var _footerId = '#mainFooter',
		_mainId = "#main",
		_mainPaddingBottom = 0; /*отступ снизу от main в px*/

	function init(){
		_footerPosition(_footerId, _mainId, _mainPaddingBottom);

		$(window).resize(function(e) {
			_sledMenu();
		});
		$("body").on("click", "#mobMenu", function(e) {
			e.preventDefault();
			_showMenu(".menuVert");
		});
	}

	/*Позиция Footer в зависимости от высоты*/
	function _footerPosition(footer, main, paddingBottom) {
		$(footer).css("margin-top", "-" + $(footer).height() + "px");
		$(main).css("padding-bottom", ($(footer).height()+paddingBottom) + "px");
	}
	function _sledMenu() {
		if ($('body').width() > 960) {
			$(".menuVert").show();
		} else {
			$(".menuVert").hide();
		}
	}
	function _showMenu(element) {
		$(element).toggle();

	}

	return {
		init: init
	};

}());

$(document).ready(function($) {
	/*console.log("jobs!");*/
	qwelp.init();

	if (!Modernizr.input.placeholder){
		$('input, textarea').placeholder();
	}
});