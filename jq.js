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
				alert("Registed Successfully!!");
			},error: function(jqXHR, textStatus, errorThrown){
            console.log(" The following error occured: "+ textStatus, errorThrown);
          }

		});
	});


	 $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});