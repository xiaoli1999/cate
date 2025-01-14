new Vue({
	el: '#app', /* 挂载app节点 */
	data: function() {
		return {
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
			selectIndex: 0,
			showComment: false,
			/* comment card list */
			cardList: [
				{
					img: './image/Gunkan.PNG',
					tag: ['fish roe', 'sea weed', 'rice'],
					comment: 'The delicate seaweed wrap embraces a generous mound of sushi rice, crowned with a burst of flavorsome toppings. Each bite is a harmonious fusion of textures and tastes, leaving me craving for more. It\'s a truly exquisite culinary experience.',
					star: 4,
					date: '2023-05-31 22:16:12',
					show: false
				},
				{
					img: './image/Gunkan.PNG',
					tag: ['fish roe', 'sea weed', 'rice'],
					comment: 'I can\'t resist the delicate and flavorful goodness of inari. These sweet and savory pouches of seasoned rice wrapped in sweet tofu skin are simply irresistible. The combination of tender rice and the subtle sweetness of the tofu creates a culinary experience that always',
					star: 5,
					date: '2023-05-31 21:50:02',
					show: false
				},
				{
					img: './image/Nigiri.PNG',
					tag: ['fish roe', 'sea weed', 'rice'],
					comment: 'The delicate slice of fresh fish, gently draped over a small mound of perfectly seasoned rice, creates a harmonious symphony of flavors and textures in each bite. It\'s a humble yet exquisite culinary experience that transports me to the heart of Japan.',
					star: 4.5,
					date: '2023-05-31 21:44:28',
					show: false
				},
				{
					img: './image/Nigiri.PNG',
					tag: ['fish roe', 'sea weed', 'rice'],
					comment: 'The delicate slice of fresh fish, gently draped over a small mound of perfectly seasoned rice, creates a harmonious symphony of flavors and textures in each bite. It\'s a humble yet exquisite culinary experience that transports me to the heart of Japan.',
					star: 4.5,
					date: '2023-05-31 21:44:28',
					show: false
				}
			],
			/* comment form */
			commentForm: {
				img: '',
				tag: ['rice', 'cucumber'],
				comment: '',
				star: 0,
				date: ''
			},
			inputVisible: false,
			inputValue: '',
			/* show avatar popup */
			showSelectAvatar: false,
			star: 0,
			date: ''
		}
	},
	methods: {
		/* show tag input */
		showInput() {
			this.inputVisible = true;
			this.$nextTick(_ => {
				this.$refs.saveTagInput.$refs.input.focus();
			});
		},
		/* add tag */
		handleInputConfirm() {
			let inputValue = this.inputValue;
			if (inputValue) {
				this.commentForm.tag.push(inputValue);
			}
			this.inputVisible = false;
			this.inputValue = '';
		},
		/* select avatar */
		selectAvatar (url) {
			this.commentForm.img = url
			this.showSelectAvatar = false
		},
		/* save comment info */
		save () {
			if (!this.commentForm.img) return this.$message.error('please choose avatar')
			if (!this.commentForm.comment) return this.$message.error('please comment')

			this.cardList.unshift({ ...this.commentForm, show: false })
			this.resetForm()
		},
		/* reset comment form */
		resetForm() {
			this.commentForm = {
				img: '',
				tag: ['rice', 'cucumber'],
				desc: '',
				star: 0,
				date: ''
			}
		},
		/* save date and star */
		saveDate (i) {
			this.cardList[i].star = this.star
			this.cardList[i].date = this.date
			this.resetDate(i)
		},
		/* reset date and star */
		resetDate (i) {
			this.cardList[i].show = false
			this.star = 0
			this.date = ''
		}
	}
})
