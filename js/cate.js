new Vue({
	el: '#app',
	data: function() {
		return {
			visible: false,
			title: 'test',
			selectOption: [
				{
					img: './image/Gunkan.PNG',
					title: 'GUNKAN',
					price: 2,
					desc: 'Sushi rice and seafood,etc.rolled in dried seaweed sheets.There are countless varieties of sushi rolls differing in ingredients and thickness.Sushi rolls prepared "inside out"are very popular outside of Japan,but rarely found in Japan.'
				},
				{
					img: './image/Inari.PNG',
					title: 'INARI',
					price: 1,
					desc: 'Inari test data.There are countless varieties of sushi rolls differing in ingredients and thickness.Sushi rolls prepared "inside out"are very popular outside of Japan,but rarely found in Japan.'
				},
				{
					img: './image/Nigiri.PNG',
					title: 'Nigiri',
					price: 3,
					desc: 'Nigiri test data.There are countless varieties of sushi rolls differing in ingredients and thickness.Sushi rolls prepared "inside out"are very popular outside of Japan,but rarely found in Japan.'
				},
				{
					img: './image/Norimaki.PNG',
					title: 'Norimaki',
					price: 4,
					desc: 'Norimaki test data.There are countless varieties of sushi rolls differing in ingredients and thickness.Sushi rolls prepared "inside out"are very popular outside of Japan,but rarely found in Japan.'
				},
				{
					img: './image/Oshizushi.PNG',
					title: 'Oshizushi',
					price: 5,
					desc: 'Oshizushi test data.There are countless varieties of sushi rolls differing in ingredients and thickness.Sushi rolls prepared "inside out"are very popular outside of Japan,but rarely found in Japan.'
				},
				{
					img: './image/Temaki.PNG',
					title: 'Temaki',
					price: 6,
					desc: 'Temaki test data.There are countless varieties of sushi rolls differing in ingredients and thickness.Sushi rolls prepared "inside out"are very popular outside of Japan,but rarely found in Japan.'
				}
			],
			selectIndex: 0
		}
	},
	mounted() {
		this.$message.success('测试ui组件')
	}
})
