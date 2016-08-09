(function($){
	$.fn.validtion = function() {
		return $(this).on('click', function(){
			var parent = $(this).parent();
			var inputTags = parent.find('input');
			var lengthOfInputTags = parent.find('input').length;

			for(var i=0; i<lengthOfInputTags; i++) {
				var inputType= inputTags.eq(i).attr('type');
				var valuesPush = [];
				if(inputType === 'text') {
					var tagsVal = inputTags.eq(i).val();
					if(!tagsVal) {
						console.log('Empty '+inputTags.eq(i).siblings('label').text());
						inputTags.eq(i).siblings('.error').show();
					} else {
						console.log('DONe '+inputTags.eq(i).siblings('label').text());
						inputTags.eq(i).siblings('.error').hide();   
					}
					valuesPush.push(tagsVal);
				}
				if(inputType === 'email') {
					var tagsVal = inputTags.eq(i).val();
					if(!tagsVal) {
						console.log('Empty '+inputTags.eq(i).siblings('label').text());
						inputTags.eq(i).siblings('.error').show();
					} else {
						console.log('DONE '+inputTags.eq(i).siblings('label').text());
						inputTags.eq(i).siblings('.error').hide();
					}
					valuesPush.push(tagsVal);
				}
				console.log(valuesPush);

			}

			//Name
			// var fields = parent.find('input');
			// if(!firstName.val()) {
			// 	firstName.siblings('.error').show();
			// } else {
			// 	firstName.siblings('.error').hide();
			// }

			// //Email ID
			// var emailID = parent.find('input[type="email"]');
			// if(!emailID.val()) {
			// 	emailID.siblings('.error').show();
			// } else {
			// 	emailID.siblings('.error').hide();
			// }

		});
	}


}(jQuery));