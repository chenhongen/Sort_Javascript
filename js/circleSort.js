	/*
	* 冒泡排序	
	*/
	function bubbleSort(i) {
		var j = 0,
			dfd = $.Deferred();

		delay(dfd, i, j); // 内层循环

		// 内层循环结束后；递归
		dfd.then(function( i, j ) {
			if(i < len) {
				i++;
				bubbleSort(i); // 外层循环：递归
			} else {
				console.log(numberArr); // 循环结束
				return;
			}
		});
	}

	function delay(dfd, i, j){
		var def = $.Deferred();
		
		if(numberArr[j] < numberArr[j + 1]) {
			tm("► array[" + j + "] 与 array[" + (j+1) + "]");
			swap(def, j, j + 1);
		} else {
			def.resolve();
		}

		def.then(function() {
			j++;
			if(j < len - i - 1) {
				delay(dfd, i, j);
			} else {
				dfd.resolve(i, j);
			}
		});
	}





















	
	// 弹幕
	function tm(text) {
		var temp =  $("<span class=\"tm\">"+text+"</span>").appendTo($("body"));
		temp.css({
			'color': colorArr[parseInt(10*Math.random())][0],
			'top': 100*Math.random()*Math.random() + '%'
		}).animate({'left':'-30%'},10000,function () {
			temp.fadeOut(500);
			//$('#tm_01').css('left','100%');
		});
	}
