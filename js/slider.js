//	var pics = ['1','2','3','4','5','6','7','8','9','10','11','12','13'];

		var i = 1;
		function show(){
			setInterval(next_pic, 5000);
		}
		function next_pic() {
			i++;
			if(i <= 3){
				var src = "img/"+i+".jpg";
				document.getElementById('pic').src = src;
			}else{
				i = 1;
				var src = "img/"+i+".jpg";
				document.getElementById('pic').src = src;
			}
		}

		function prev_pic() {
			i--;
			if(i > 0){
				var src = "img/"+i+".jpg";
				document.getElementById('pic').src = src;
			}else{
				i = 3;
			}
		}