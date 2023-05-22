// 可以搜索的dom
const searchDom = [
	{
		img: "./image/Gunkan.PNG",
		title: "GUNKAN",
		price: "2$"
	},
	{
		img: "./image/Inari.PNG",
		title: "INARI",
		price: "1$"
	},
	{
		img: "./image/Nigiri.PNG",
		title: "NIGIRI",
		price: "3$"
	},
	{
		img: "./image/Temaki.PNG",
		title: "TEMAKI",
		price: "4$"
	},
]

const selectArr = ["GUNKAN", "INARI", "NIGIRI", "TEMAKI"]




window.addEventListener("DOMContentLoaded", () => {
	// 初次加载页面  加载历史记录
	createHistory()

	// 监听搜索输入文本框
	document.querySelector("#searchInput").addEventListener("input", (e) => {

		// 过滤
		const res = searchDom.filter((v) => {
			return v.title.includes(e.target.value)
		})
		CreateSearchResult(res)
	})



	// 监听计算输入文本框
	document.querySelector("#calcInput").addEventListener("input", (e) => {
		const value = parseInt(e.target.value)
		const value2 = parseInt(document.querySelector("#calcSelect").value)
		document.querySelector("#calcResult").innerHTML = isNaN(value * value2) ? "" : value * value2
	})

	// 监听计算 选择输入框
	document.querySelector("#calcSelect").addEventListener("change", (e) => {
		const value = parseInt(e.target.value)
		const value2 = parseInt(document.querySelector("#calcInput").value)
		document.querySelector("#calcResult").innerHTML = isNaN(value * value2) ? "" : value * value2
	})

	// 监听计算点击按钮
	document.querySelector("#calcClick").addEventListener("click", () => {
		const n = getNowTime()
		const value = selectArr[document.querySelector("#calcSelect").value - 1]
		const value2 = document.querySelector("#calcResult").innerHTML

		storeHistory({ day: n, type: value, calc: value2 })
	})
})



// 创建 一个 搜索的结果
function CreateSearchResult(res) {

	const searchUl = document.querySelector("#searchUL")
	searchUl.innerHTML = ""

	res.forEach(element => {
		// 创建一个img标签
		const img = document.createElement("img")
		img.src = element.img
		// 创建h3标签
		const h3 = document.createElement("h3")
		h3.innerHTML = element.title
		// 创建一个p
		const p = document.createElement("p")
		p.innerHTML = element.price

		// 创建一个li
		const li = document.createElement('li')
		li.appendChild(img)
		li.appendChild(h3)
		li.appendChild(p)

		searchUl.appendChild(li)
	});

}


// 获取当前时间
function getNowTime() {
	const d = new Date()
	const y = d.getFullYear()
	const m = d.getMonth() + 1
	const day = d.getDate()

	return `${day}/${m}/${y}`
}

// 储存记录
function storeHistory(obj) {
	let h = localStorage.getItem("history")
	// 判断是否存在历史记录
	if (h == null) {
		// 等于空创建新的数组
		h = []
	} else {
		h = JSON.parse(h)
	}

	h.unshift(obj)

	// 如果长度大于7则出栈
	if (h.length > 7) {
		h.pop()
	}

	localStorage.setItem("history", JSON.stringify(h))


	// 刷新
	createHistory()
}

// 创建历史记录
function createHistory() {
	const list = document.querySelectorAll(".historyList")

	let h = localStorage.getItem("history")
	// 判断是否存在历史记录
	if (h == null) {
		// 退出
		return
	} else {
		h = JSON.parse(h)
	}
	list.forEach((v, i) => {

		// 防止数组越界
		if (i >= h.length) {
			return
		}

		v.innerHTML = `
		<td>${h[i].day}</td>
		<td>${h[i].type}</td>
		<td>${h[i].calc}</td>
		`
	})
}