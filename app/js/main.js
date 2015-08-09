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
		$(element).toggle("slow");
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
			transition: 'slideDown',
			onClose: function() {
				$('#addProject [qtip-position], #addProject .formFieldUpload').removeClass('has-error').trigger('hideTooltip');
			}
		});
	});
	if($('#formAut').length > 0)
	{
		$('#formAut').bPopup({
			modalColor: false,
			modalClose: false,
		});
	}
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
		$this.parents(".formFieldUpload").removeClass('has-error').end().trigger('hideTooltip');;
	});



	$("body").on("submit", ".form", function(e) {
		e.preventDefault();
		var $this = $(this),
			elementLength = 0;

		$("[qtip-position]", this).each(function(i){
			var element = $(this),
				pos = element.attr('qtip-position');
				if($(window).width() < 730)
				{
					pos = element.attr('qtip-position-mobile');
				}

			if(element.val().length === 0) {
				element.addClass('has-error');
				if(element.attr("type") === "file") {
					element.parents(".formFieldUpload").addClass('has-error');
				}
				createQtip(element, pos);
				elementLength = elementLength+1;
			}
		});
		if(elementLength === 0) {
			$this.parentsUntil("form").find(".error").show();
		}
	});
	$("body").on('click', '.errorClose', function(e) {
		e.preventDefault();
		$(this).parent("div").hide();
	});
	$("body").on("reset", function() {
		var $this = $(this);
		$this.parentsUntil("form").find(".error").hide();
		$this.parentsUntil("form").find("[qtip-position]").each(function(i){
			$(this).removeClass('has-error').trigger('hideTooltip');
		});
	});
	$("body").on("keyup", "[qtip-position]", function(e) {
		$(this).removeClass('has-error');
	});
	function createQtip(el, position){
		if (position === 'right') {
			position = {
				my: 'left center',
				at: 'right center'
			};
		}
		else if(position === 'bottom') {
			position = {
				my: 'bottom center',
				at: 'top center'
			};
		}
		else {
			position = {
				my: 'right center',
				at: 'left center'
			};
		}

		el.qtip({
			content: {
				text: function(){
					return $(this).attr('qtipcontent')
				}
			},
			show: {
				event: 'show'
			},
			hide: {
				event: 'keydown hideTooltip'
			},
			position: position,
			style: {
				classes: 'qtip-red qtip-rounded'
			}
		}).trigger('show');
	};

	$(".imgWorkList li").hover(function() {
		$(".imgWorkListActiveName", this).show();
	}, function() {
		$(".imgWorkListActiveName", this).hide();
	});


});