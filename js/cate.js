new Vue({
	el: '#app',
	data: function() {
		return {
			visible: false,
			title: 'test'
		}
	},
	mounted() {
		this.$message.success('测试ui组件')
	}
})
