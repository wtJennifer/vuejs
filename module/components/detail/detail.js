var Util = require('../../utils/util')
	module.exports = Vue.extend({
	template: '#tpl_detail',
	data: function(){
		return {
			data: {}
		}
	},
	mounted: function(){
		var me = this;
		console.log(this.$parent.route)
		Util.ajax('data/product.json?id=' + this.$parent.route[0],function(res){
			if (res && res.errno === 0) {
				me.data = res.data
			}
		})
	}
})
