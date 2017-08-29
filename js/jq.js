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

	$("#lock").submit(function(){
		var frm = $("#frm");
		$.ajax({
			type: frm.attr('method'),
			url:"dinig_reg.php",
			data:frm.serialize(),
			success: function(data){
				alert("Tanaaa!!");
			},error: function(jqXHR, textStatus, errorThrown){
            console.log(" The following error occured: "+ textStatus, errorThrown);
          }

		});

	});

});