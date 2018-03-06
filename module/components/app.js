var Home = require('./home/home')
var List = require('./list/list')
var Detail = require('./detail/detail')
var Informat = require('./informat/informat')
var Login = require('./login/login')
var Regin  = require('./regin/regin')
Vue.component('home', Home)
Vue.component('list', List)
Vue.component('detail', Detail)
Vue.component('informat', Informat)
Vue.component('regin', Regin)
Vue.component('login', Login)
var app = new Vue({
	el: '#ickt',
	data:{
		view: 'home',
		route: [],
		query: '',
		searchValue: ''
	},
	methods:{
		showSearchResult: function(){
			this.query = this.searchValue
			this.searchValue = ''
		},
		goBack: function() {
			history.go(-1)
		}
	}
})
module.exports = app
