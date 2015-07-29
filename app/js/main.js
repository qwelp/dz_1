var qwelp = (function(){

	var _footerId = '#mainFooter',
		_mainId = "#main";
		_mainPaddingBottom = 40; /*отступ снизу от main в px*/

	function init(){
		_footerPosition(_footerId, _mainId, _mainPaddingBottom);
		_alignVertical();
		_alignCenter();
	}

	/*Позиция Footer в зависимости от высоты*/
	function _footerPosition(footer, main, paddingBottom) {
		$(footer).css("margin-top", "-" + $(footer).height() + "px");
		$(main).css("padding-bottom", ($(footer).height()+paddingBottom) + "px");
	}

	/*Высчитавает половину у высоты класса .posVert для выравнивания по вертикали*/
	function _alignVertical() {
		$(".posVert").each(function(){
			var $this = $(this);
			$this.css("margin-top", "-" + ($this.height()/2) + "px");
		});
	}

	/*Высчитавает половину у ширины класса .posCenter для выравнивания по горизонтали*/
	function _alignCenter() {
		$(".posCenter").each(function(){
			var $this = $(this);
			$this.css("margin-left", "-" + ($this.width()/2) + "px");
		});
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