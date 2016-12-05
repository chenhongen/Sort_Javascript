  /*
  * id: 容器ID
  * index: 数组下标/ID标识
  * val: 值
  * max: 最大值（默认为10）
  */
  function createProgress(id, index, val, max) {
		$('<progress>').attr({
			value: val,
			max: max==null?10:max,
			id: 'p_'+index
		}).css({
			//position: 'absolute',
			height: '20px',
			width: '80%',
			//top: 100 + index*20 + 'px',
			//left: '-100px',
		}).addClass('progress-sel').appendTo('#'+id);
	}



  /**
  * def:
  * index: 数组下标/ID标识
  * array: 数组
  * val: 值
  */
	function assignByVal(def, index, array, val) {
		//console.log(def);
		var progress_a = $("#p_" + index),
			progress_a_val =  progress_a.val(),
			symbol = 1;

		// 颜色标识
		progress_a.removeClass('progress-sel');

		// 差值计算，确定正负
		var difference = val - array[index];
		var diff_abs = Math.abs(difference);

		if(difference == 0) {
			def.resolve();
			return;
		} else if(difference < 0) {
			symbol = -1;
		}

		// 实际数交换
		array[index] = val;

		// 渐变显示值交换
		var interval_id = setInterval(function(){
			if(0 < diff_abs) {
				progress_a_val = progress_a_val + symbol;
				progress_a.val(progress_a_val);
				diff_abs--;
			} else {
				progress_a.addClass('progress-sel');
				clearInterval(interval_id);
				def.resolve();
			}
		},30);
	}

	/** 交换
	* a：下标
	* b：下标
	*/
	function swap(def, a, b) {
		var progress_a = $("#p_" + a),
			progress_a_val =  progress_a.val(),
			progress_b = $("#p_" + b),
			progress_b_val = progress_b.val(),
			temp,
			symbol = 1;

		// 颜色标识
		//progress_a.removeClass('progress-sel');
		//progress_b.removeClass('progress-sel');

		// 差值计算，确定正负
		var difference = array[a] - array[b];
		var diff_abs = Math.abs(difference);

		if(difference == 0) {
			return;
		} else if(difference < 0) {
			symbol = -1;
		}

		// 实际数交换
		temp = array[a];
		array[a] = array[b];
		array[b] = temp;
		
		// 渐变显示值交换
		var interval_id = setInterval(function(){
			if(0 < diff_abs) {
				progress_a_val = progress_a_val - symbol;
				progress_a.val(progress_a_val);
				progress_b_val = progress_b_val + symbol;
				progress_b.val(progress_b_val);
				diff_abs--;
			} else {
				//progress_a.addClass('progress-sel');
				//progress_b.addClass('progress-sel');
				clearInterval(interval_id);
				def.resolve();
			}
		},100);
	}

	// 输出对象键值对
	function po(obj){
		var temp = "";
		for(var i in obj){//用javascript的for/in循环遍历对象的属性
			temp += i+":"+obj[i]+"\n";
		}
		alert(temp);
	}
