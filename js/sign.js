var Shaker = (function() {
	var self = {},
		config = {
			animationClass: 'default-class',
			form: '.default-form'
		};

	setOptions = function() {
		if (typeof options === 'object' &&
			Object.keys(options).length > 0)
		{
			for (var property in options)
			{
				if (typeof config[property] !== undefined)
				{
					config[property] = options[property];
				}
			}
		}
	}
	isEmail = function(email) {
		var re = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/

		return re.test(email);
	}
	self.init = function(opts) {
		options = opts || {};

		setOptions();

		execute();
	}
	execute = function() {
		forms = Array.from(document.querySelectorAll(config.form));

		forms.forEach(function(form) {
			form.addEventListener('submit', function(e) {
				e.preventDefault();

				fields = Array.from(this.querySelectorAll('input, textarea'));

				errors = [];
				fields.forEach(function(field) {
					if (field.value.length <= 0 ||
						field.type == 'email' && !isEmail(field.value))
					{
						field.classList.add(config.animationClass);

						field.addEventListener('animationend', function() {
							this.classList.remove(config.animationClass);
						});

						errors.push(true);
					}
				});
				if (errors.indexOf(true) === -1)
				{
					alert('Succès !');
					this.submit();
				}
			});
		});
	}

	return self;
})();
