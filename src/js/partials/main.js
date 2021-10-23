$(document).ready(function() {
	let trucks = {
		1: {
			width: 2400,
			height: 13300,
		},
		2: {
			width: 2200,
			height: 5000,
		},
		3: {
			width: 2000,
			height: 3000,
		},
		4: {
			width: 0,
			height: 0,
		}
	}


	let reels = {
		'8': {
			width: 665,
			height: 855,
		},
		'10': {
			width: 640,
			height: 1055,
		},
		'12a': {
			width: 860,
			height: 1275,
		},
		'14': {
			width: 860,
			height: 1455,
		},
		'14g': {
			width: 1050,
			height: 1455,
		},
		'17': {
			width: 900,
			height: 1765,
		},
		'17us': {
			width: 940,
			height: 1765,
		},
		'18a': {
			width: 1310,
			height: 1870,
		},

		'opt8': {
			width: 705,
			height: 855,
		},
		'opt9': {
			width: 520,
			height: 955,
		},
		'opt10': {
			width: 680,
			height: 1055,
		},
		'opt10a': {
			width: 890,
			height: 1055,
		},
		'opt10b': {
			width: 690,
			height: 1055,
		},
		'opt12a': {
			width: 900,
			height: 1275,
		},
		'opt14': {
			width: 900,
			height: 1455,
		},
		'opt14g': {
			width: 1090,
			height: 1455,
		},
		'opt17': {
			width: 950,
			height: 1765,
		},
		'opt18': {
			width: 1170,
			height: 1870,
		},
		'opt18a': {
			width: 1390,
			height: 1870,
		},
		'opt18b': {
			width: 1390,
			height: 1870,
		},
		'opt20': {
			width: 1300,
			height: 2080,
		},
		'opt20a': {
			width: 1360,
			height: 2080,
		},
		'opt25': {
			width: 1680,
			height: 2600,
		},

		'okko1': {
			width: 435,
			height: 490,
		},
		'okko1k': {
			width: 435,
			height: 490,
		},
		'okko2k': {
			width: 435,
			height: 600,
		},
		'okko3': {
			width: 435,
			height: 650,
		},
		'okko3k': {
			width: 435,
			height: 650,
		},
		'okko4': {
			width: 520,
			height: 650,
		},
		'okko6k': {
			width: 608,
			height: 740,
		},
	}



	initSizeReels();
	function initSizeReels(){
		$.each(reels, function(index,value) {
			let width = parseInt(value['width'])/20;
			let height = parseInt(value['height'])/20;
			let reel = $('.reels__item-icon[data-item="'+index+'"]');
			reel.css({'width':width+'px','height':height+'px'}).attr('data-size',parseInt(value['width']));

			reel.parent('.reels__item').append('<div class="reels__item-form"><input type="hidden" name="index" value="'+index+'"><input type="number" min="1" maxlength="3" max="500" value="1" name="count"><button type="button" class="js-add-item" name="plus" title="Добавить">+</button><button type="button" class="js-max-item" name="max" title="Автозаполнение">MAX</button></div>');

			let title = reel.attr('title');
			if (title){
				reel.parent('.reels__item').prepend('<div class="reels__item-title">'+title+'</div>');
			}
		});
	}

	setTuckSize(1);
	function setTuckSize(value,inputChange = false){
		if (value != 4){
			let width = parseInt(trucks[value]['width'])/20;
			let height = parseInt(trucks[value]['height'])/20;
			$('.car__content').css({'width':width+'px','height':height+'px'});

			$('.truck-info__size input[name="truck_width"]').val((trucks[value]['width']/1000).toFixed(1).replace(".",",")).prop('readonly',true);
			$('.truck-info__size input[name="truck_height"]').val((trucks[value]['height']/1000).toFixed(1).replace(".",",")).prop('readonly',true);


			$('.car-info__value--width').html((trucks[value]['width']/1000).toFixed(1).replace(".",",")+ ' м.');
			$('.car-info__value--height').html((trucks[value]['height']/1000).toFixed(1).replace(".",",")+ ' м.');
		} else {
			if (inputChange){
				let width = parseFloat($('.truck-info__size input[name="truck_width"]').val().replace(',', '.'));
				let height = parseFloat($('.truck-info__size input[name="truck_height"]').val().replace(',', '.'));

				$('.car__content').css({'width':width*50+'px','height':height*50+'px'});

				$('.car-info__value--width').html(width.toFixed(1).replace(".",",")+ ' м.');
				$('.car-info__value--height').html(height.toFixed(1).replace(".",",")+ ' м.');
			} else {
				$('.truck-info__size input[name="truck_width"]').prop('readonly',false);
				$('.truck-info__size input[name="truck_height"]').prop('readonly',false);
			}
		}
	}

	$('input[name=tuck_type]').on('change',function (){
		let value = $(this).val();
		setTuckSize(value);
		gridTruck.layout();
	});

	$('.truck-info__size').on('change keyup paste',function (){
		setTuckSize(4,true);
	});



	var gridTruck = new Muuri('.content-grid', {
		items: '.reels__item-icon',
		showDuration: 100,
		showEasing: 'ease',
		hideDuration: 100,
		hideEasing: 'ease',
		layoutDuration: 100,
		layoutEasing: 'cubic-bezier(0.625, 0.225, 0.100, 0.890)',

		// Drag & Drop
		dragEnabled: true,
		dragAxis: 'xy',
		dragSort: true,
		dragPlaceholder: {
			enabled: true,
			createElement(item) {
				return item.getElement().cloneNode(true);
			},
		},
		layout: {
			fillGaps: true,
			rounding: true,
		},
		sortData: {
			size: function (item, element) {
				return parseInt($(element).data('size'));
			}
		}

	});

	gridTruck.on('layoutStart', function (items, isInstant) {
		//console.log(gridTruck);
	});

	gridTruck.on('layoutEnd', function (items) {
		$(items).each(function (){
			isInside(this);
		});
		itemsList(items);

		loadHeight();
	});


	gridTruck.on('dragEnd', function (item, event) {
		let { left, bottom, right, top } = $('.car__content')[0].getBoundingClientRect();
		let windowT = window.scrollX;
		let windowL = window.scrollY;
		let itemX = event.pageX;
		let itemY = event.pageY;
		let itemW = event.target.width;
		let itemH = event.target.height;
		let isReelDraggedOut = itemX+itemW < left+windowL || itemX-10 > right+windowL || itemY-10 > bottom+windowT || itemY+itemH < top+windowT;
		if (isReelDraggedOut) {
			gridTruck.remove([item], { removeElements: true })
		}
	});

	gridTruck.on('add', function (items) {
		//console.log(items);
	});

	gridTruck.on('remove', function (items, indices) {

	});

	function itemsList(items){
		let list = [];
		let listData = [];
		$(items).each(function (){
			list.push($(this['_element']).attr('title'))
			listData.push($(this['_element']).attr('data-item'))
		});
		let result = list.reduce(function(acc, el) {
			acc[el] = (acc[el] || 0) + 1;
			return acc;
		}, {});
		let html = '';
		$.each(result,function (index,value){
			html += '<div class="truck-info__content-item">'+index+': '+value+' шт.</div>';
		});
		$('.truck-info__content').html(html);

		let result2 = listData.reduce(function(acc, el) {
			acc[el] = (acc[el] || 0) + 1;
			return acc;
		}, {});

		let STotal = 0;
		$.each(result2,function (index,value){
			let S = parseInt(reels[index]['width'])* parseInt(reels[index]['height'])*value;
			STotal += S;
		});
		let container = $('.car__content');
		let containerW = container.innerWidth();
		let containerH = container.innerHeight();
		let SContainer = parseFloat(containerW)*parseFloat(containerH)*400;
		let procentTotal = (STotal/SContainer)*100;
		$('.truck-info__load').html('Занятая площадь: '+procentTotal.toFixed(1)+'%');
	}


	function isInside(item) {
		let container = $('.car__content');
		let containerW = container.innerWidth();
		let containerH = container.innerHeight();
		let itemX = item['_tX'];
		let itemY = item['_tY'];
		let itemW = item['_width'];
		let itemH = item['_height'];
		let isInside = itemX+itemW <= containerW && itemY+itemH <= containerH;
		if (!isInside){
			gridTruck.remove([item], { removeElements: true })
		}
	}

	function loadHeight(){
		let height = parseFloat($(gridTruck._element).innerHeight());
		if (parseFloat(height) > 0){
			$('.car-info__value--load').html((height/50).toFixed(1).replace(".",",")+ ' м.').css('top',height/2+'px');
			$('.car-info__line--load-right').css('height',height+'px');
			$('.car-info__line--load-bottom').css('top',height+'px');
			$('.car-info__value--load, .car-info__line--load-right, .car-info__line--load-bottom, .car-info__line--load-top').removeClass('hide');
		} else {
			$('.car-info__value--load, .car-info__line--load-right, .car-info__line--load-bottom, .car-info__line--load-top').addClass('hide');
		}
	}


	function updateLayout() {
		//const { layout } = gridTruck._settings;
		//layout.fillGaps = true;
		gridTruck.sort('size:desc');
		gridTruck.layout();

	}


	$('.js-truck-sort').on('click',function (){
		$(this).prop('disabled', true);
		updateLayout();

		setTimeout(function (){
			$('.js-truck-sort').prop('disabled', false);
		},300);
	});
	$('.js-truck-clear').on('click',function (){
		$(this).prop('disabled', true);
		gridTruck.remove(gridTruck.getItems(), { removeElements: true })

		setTimeout(function (){
			$('.js-truck-clear').prop('disabled', false);
		},300);
	});



	$('.reels > .reels__item').on('click',function (){
		if (!$(this).hasClass('active')){
			$(this).addClass('active').siblings('.reels__item').removeClass('active').find('.reels__item-form').slideUp(100);
			$(this).find('.reels__item-form').slideDown({
				duration: 100,
				start: function () {
					$(this).css({
						display: "flex"
					})
				}
			});
		}
	});

	$('.reels > .reels__item').on('dblclick',function (e){
		if ( $(e.target).closest('.reels__item-form').length ) {
			// клик внутри элемента
			return;
		} else {
			let item = $(this).find('.reels__item-icon').data('item');
			addItem(item);
		}
	});

	$(document).on('click','.js-add-item',function (){
		event.preventDefault();
		let index = $(this).siblings('input[name="index"]').val();
		let count = parseInt($(this).siblings('input[name="count"]').val());
		if (count > 0){
			if (count > 500) count = 500;
			addItem(index,count);
		}
	});

	$(document).on('click','.js-max-item',function (){
		event.preventDefault();
		let index = $(this).siblings('input[name="index"]').val();
		let count = parseInt($(this).siblings('input[name="count"]').val());


	
		count = 500;
		if (count > 0){
			if (count > 500) count = 500;
			addItem(index,count);
		}
	});

	function calcMax(index){
		//gridTruck.getItems()
	}

	function haveSpace(index){
		let container = $('.car__content');
		let containerW = container.innerWidth()*20;
		let containerH = container.innerHeight()*20;
		let reelW = reels[index]['width'];
		let reelH = reels[index]['height'];

		let items = gridTruck.getItems();

		//прходим каждый мм длины грузовика

		let isEnd = false;

		//Y [x]
		let loadedCoords = [];

		for (let y = 0; y < containerH; y++) {
			loadedCoords.push([]);
		}

		let itemsArray = [];

		$.each(items,function (){
			itemsArray.push([position.left*20,position.left*20 + this.getWidth()*20,position.top*20,position.top*20 + this.getHeight()*20])
		});

		for (let y = 0; y < containerH; y++) {
			if (y + reelH <= containerH ){
				for (let x = 0; x < containerW; x++) {
					if (x + reelW <= containerW ){
						$.each(itemsArray,function (){

						});

					} else {
						return false;
					}
				}
			} else {
				return false;
			}
		}


		/*for (let y = 0; y < containerH; y++) {
			if (y + reelH <= containerH ){
				//влез бы по высоте
				//проверям ширину
				let coordY = [y,y+reelH];

				for (let x = 0; x < containerW; x++) {
					if (x + reelW <= containerW ){
						//влез бы по ширине
						let coordX = [x,x+reelW];

						//проверяем персечение с другими элементами
						let isCrossed = false;
						$.each(items,function (){
							let width = this.getWidth()*20;
							let height = this.getHeight()*20;
							let position = this.getPosition();
							let left = position.left*20;
							let top = position.top*20;

							if (coordX.isRangeCrossed([left, left+width],false) && coordY.isRangeCrossed([top, top+height],false)){
								isCrossed = true;
								return true;
							}
						});
						//нет пересечений
						if (!isCrossed){
							isEnd = true;
							return true;
						}
					} else {
						break;
					}
				}
			} else {
				return false;
			}
		}*/
		return false;



		//range2.isRangeCrossed(range1,false);
	}



	function addItem(item,count = null) {
		if (count){
			let elemDom = $('.reels__item-icon[data-item="'+item+'"]')[0];
			let arrayElem = [];
			for (let i = 0; i < count; i++) {
				let elem = elemDom.cloneNode(true);
				arrayElem.push(elem);
			}
			gridTruck.add(arrayElem);
		} else {
			let elemDom = $('.reels__item-icon[data-item="'+item+'"]')[0];
			let elem = elemDom.cloneNode(true);
			gridTruck.add([elem]);
		}

	}


	if (typeof (Number.prototype.isBetween) === "undefined") {
		Number.prototype.isBetween = function (min, max, notBoundaries) {
			var between = false;
			if (notBoundaries) {
				if ((this < max) && (this > min)) between = true;
			} else {
				if ((this <= max) && (this >= min)) between = true;
			}
			return between;
		}
	}

	if (typeof (Array.prototype.isRangeCrossed) === "undefined") {
		Array.prototype.isRangeCrossed = function (target,notBoundaries) {
			var result = false;
			if ((target[0].isBetween(this[0],this[1],notBoundaries) ) || (target[1].isBetween(this[0],this[1],notBoundaries))){
				result = true;
			}
			return result;
		}
	}
})