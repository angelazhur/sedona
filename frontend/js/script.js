$(document).ready(function() {
	//   попап форма на главной
	if ($('.user-search').length) {
		let link = $(".btn-open");
		let popup = $(".popup-form");
		let close = popup.find(".modal_content_close");


		link.on("click", function(e) {
			e.preventDefault();
			popup.addClass("modal-show");
		});
		close.on("click", function(e) {
			e.preventDefault();
			popup.removeClass("modal-show");
			popup.removeClass("modal-error");
		});
		$(window).keydown(function(e) {
			if (e.keyCode === 27) {
				popup.removeClass("modal-show");
				popup.removeClass("modal-error");
			}
		});
	}

	// хедер на мобильном
	let menuOpen = $(".mobile-header__btn");
	let menuDropDown = $(".mobile-header__dropdown");
	let menuClose = menuDropDown.find(".mobile-header__close");

	menuOpen.on("click", function(e) {
		e.preventDefault();
		menuDropDown.addClass("menu-open");
	});

	menuClose.on("click", function(e) {
		e.preventDefault();
		menuDropDown.removeClass("menu-open");
	});

	//  обработка кликов вне областей
	$(document).mouseup(function (e){
        let modal = $('.modal-popup');
        let menu = $('.mobile-header__dropdown');

        if (!modal.is(e.target) 
            && modal.has(e.target).length === 0) { 
            modal.parent().removeClass('modal-show');
        }
        if (!menu.is(e.target)
        		&& menu.has(e.target).length === 0) { 
            menu.removeClass('menu-open');
        }
    });

	// обработка счетчика в форме заказа
	$('.minus').click(function () {
		let $input = $(this).parent().find('input');
		let count = parseInt($input.val()) - 1;
		count = count < 0 ? 0 : count;
		$input.val(count);
		$input.change();
		return false;
	});

	$('.plus').click(function () {
		let $input = $(this).parent().find('input');
		$input.val(parseInt($input.val()) + 1);
		$input.change();
		return false;
	});

	// range слайдер для формы выбора отелей
	let range_from = $('.hotels-subtittle.from span').html();
	let range_to = $('.hotels-subtittle.to span').html();

	$('.nativeMultiple').ionRangeSlider({
		type: "double",
		skin: "big",
		min: range_from,
		max: range_to,
		onChange: function (data) {
			let from = data.from,
			to = data.to

			$('.hotels-subtittle.from span').html(from);
			$('.hotels-subtittle.to span').html(to);
		}
	})
});