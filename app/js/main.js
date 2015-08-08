var qwelp = (function(){

	var _footerId = '#mainFooter',
		_mainId = "#main",
		_mainPaddingBottom = 0; /*отступ снизу от main в px*/

	function init(){
		_footerPosition(_footerId, _mainId, _mainPaddingBottom);
		$(window).resize(function(e) {
			_sledMenu(e);
		});
		$("body").on("click", "#mobMenu", function(e) {
			e.preventDefault();
			_showMenu(".menuVert");
		});
		_pageActive();
	}

	/*Позиция Footer в зависимости от высоты*/
	function _footerPosition(footer, main, paddingBottom) {
		$(footer).css("margin-top", "-" + $(footer).height() + "px");
		$(main).css("padding-bottom", ($(footer).height()+paddingBottom) + "px");
	}
	function _sledMenu(e) {
		e.preventDefault();
		if ($('body').width() > 1024) {
			$(".menuVert").show();
		} else {
			$(".menuVert").hide();
		}
	}
	function _showMenu(element) {
		$(element).toggle();
	}
	function _pageActive() {
		var url = window.location.pathname;
		$(".menuVertList li").removeClass("active");
		$(".menuVertList li a").each(function(index, el) {
			var $this = $(this);
			if("/" + $this.attr("href") === url)
			{
				$this.parent().addClass('active');
			}
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

	$("body").on('click', '.addWorkLink', function(e) {
		e.preventDefault();
		$('#addProject').bPopup({
			easing: 'easeOutBack', //uses jQuery easing plugin
			speed: 450,
			modalColor:"#58697a",
			opacity:.75,
			closeClass:"formClose",
			transition: 'slideDown'
		});
	});
	$(".form input[type=file]").change(function() {
		var $this = $(this),
			fileName = $this.val(),
			fileArray = fileName.split('\\'),
			msg = $this.parents("div").find(".formLabelUpload");

		if(fileArray[fileArray.length-1].length === 0)
		{
			msg.text(msg.data("placeholder"));
		} else {
			msg.text(fileArray[fileArray.length-1]);
		}
	});

});