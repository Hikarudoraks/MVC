(function($, URL, Helpers){

	var submitContact = function(){

		$('body').on('click', '#btnSubmitContact', function(){

			var name = $('input[name="name"]').val();
			var email = $('input[name="email"]').val();
			var phone = $('input[name="phone"]').val();
			var message = $('textarea[name="message"]').val();

			if(name == ''){
				swal({
					title:'Erro!',
					text: 'Preencha seu nome!',
					type: 'error'
				});
				return false;
			}
		});

	}

	$( document ).ready(function(){
		submitContact();
	});
})($, URL, Helpers)