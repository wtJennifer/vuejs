var Util = require('../../utils/util');
module.exports = Vue.extend({
	template: '#regin',
	data: function(){
		return{
			timer:'',
			num: ''
		}
	},
	methods: {
		jiaoyan: function(){
			var me = this;
				me.num = 60
				timer = setInterval(function() {
					me.num--
					if(me.num < 0){
						me.num = 0
						clearInterval(timer)
					}
				}, 1000)
			}
		}
	})
