var Util = require('../../utils/util')
	module.exports = Vue.extend({
	props: ['route', 'searchQuery'],
	template: '#tpl_list',
	data: function() {
		return {
			orders: [
				{id: 'price', text: '价格排序'},
				{id: 'sales', text: '销量排序'},
				{ id: 'evaluate', text: '好评排序' },
				{ id: 'discount', text: '优惠排序' }
			],
			list: [],
			others: []
		}
	},
	mounted: function(){
		var me = this;
		console.log(this.$parent.route)
		Util.ajax('data/list.json?id=' + this.$parent.route[1], function(res){
			if(res && res.errno === 0){
				me.list = res.data.slice(0, 3);
				me.others = res.data.slice(3);
			}
		})
	},
	computed: {
		listFilterResult: function(){
			var result = [];
			var query = this.searchQuery;
			this.list.forEach(function(item, index){
				if(item.title.indexOf(query) >= 0){
					result.push(item)
				}
			})
			return result;
		}
	},
	methods:{
		showOthers: function(){
			this.list = this.list.concat(this.others)
			this.others = []
		},
		listOrder: function(id){
			this.list.sort(function(a, b){
				if(id === 'discount'){
					return (b.originPrice - b.price) - (a.originPrice - a.price)
				}
				return a[id] - b[id]

			})
		}
	}
})
