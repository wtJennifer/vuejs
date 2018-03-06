var Util = require('../../utils/util')
module.exports = Vue.extend({
	template: '#tpl_home',
	data: function(){
		return {
			icons:[
				{id: '1', img: '01.png', title: '美食'},
				{id: '2', img: '02.png', title: '电影'},
				{id: '3', img: '03.png', title: '休闲'},
				{id: '4', img: '04.png', title: '酒店'},
				{id: '5', img: '05.png', title: '外卖'},
				{id: '6', img: '06.png', title: 'ktv'},
				{id: '7', img: '07.png', title: '周边游'},
				{id: '8', img: '08.png', title: '丽人'},
				{id: '9', img: '09.png', title: '小吃'},
				{id: '10', img: '10.png', title: '火车票'}
			],
		  	items:[ 
			     {name:"马克龙访华一天发推31条"},
			     {name:"重磅财经数据公布重磅财经数据公布"},
			     {name:"科技奖3项授予水稻科学家"},
			     {name:"新华社记者暗访新华社记者暗访"}
	   		],
	   		animate:false,
			ad: [],
			list: []
			}
		},
	mounted: function(){
		var me = this;
		Util.ajax('data/home.json', function(res){
			if(res && res.errno === 0){
				me.ad = res.data.ad
				me.list = res.data.list
			}
		})
		setInterval(this.scroll,2000)
	},
	methods: {
	  scroll: function($events, style){
	   	con1 = this.$refs.con1;
	    con1.style.marginTop='-30px';
	    this.animate=!this.animate;
	    var that = this; 
	    setTimeout(function(){
	        that.items.push(that.items[0]);
	        that.items.shift();
	        con1.style.marginTop='0px';
	        that.animate=!that.animate;  
	    }, 500)
	  }
	}	
})
