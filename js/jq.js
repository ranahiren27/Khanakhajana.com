$(document).ready(function(){
	$("#other_food_category_name").hide(); 
	$("#food_category").change(function(){
		var other_text = $("#food_category").val(); 
		//alert(other_text);
		if(other_text == "other"){
			$("#other_food_category_name").show();
		}else{
			$("#other_food_category_name").hide();
		}
	});


		$(document).on('click', 'a', function(event){
		    event.preventDefault();

		    $('html, body').animate({
		        scrollTop: $( $.attr(this, 'href') ).offset().top
		    }, 500);
		});

		$("#o_sing").click(function () {
			option = "<center><select id='sing_selector' class='inpts'> <option id='h'>For Hotel</option> <option id='r'>For Restaurant</option> <option id='t'>For Tiffinwala</option> <option id='d'>For Dinighall</option> </select><br><div id='Choose' class='inpts btn_inpts' style='width:13%'>Choose</div></center>";
			$("#wall").html(option);
			$("#fotter").hide();
		});

		$(document).on('click','#Choose',function () {
			option = document.getElementById('sing_selector').value;
			//alert(option);
			frm_path = "";
			if(option == "For Hotel")
				frm_path = "html/hotelsForms.html";
			else if(option == "For Restaurant")
				frm_path = "html/restaurantForm.html";
			else if(option == "For Tiffinwala")
				frm_path = "html/tiffinalaForm.html";
			else if(option == "For Dinighall")
				frm_path = "html/dininghall_reg.html";
			else{
				alert("plaesh select one option!!");
				return false;
			}
			$.ajax(
				{
				url:frm_path,
				success: function (result) {
					$("#wall").html("<center><div class='position'>"+result+"</div><center>");
				}

			});
		});	

		$(document).on('click','.logo',function () {
				$.ajax({
				url:"home_page.html",
				success:function (page) {
					$('body').html(page);
				}
			});
		})
});

