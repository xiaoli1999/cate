// searchable dom
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
	// Initial page load Load history
	createHistory()

	// Listen to the search input text box
	document.querySelector("#searchInput").addEventListener("input", (e) => {

		// filter
		const res = searchDom.filter((v) => {
			return v.title.includes(e.target.value)
		})
		CreateSearchResult(res)
	})



	// Monitor calculation input text box
	document.querySelector("#calcInput").addEventListener("input", (e) => {
		const value = parseInt(e.target.value)
		const value2 = parseInt(document.querySelector("#calcSelect").value)
		document.querySelector("#calcResult").innerHTML = isNaN(value * value2) ? "" : value * value2
	})

	// Monitor calculation Select the input box
	document.querySelector("#calcSelect").addEventListener("change", (e) => {
		const value = parseInt(e.target.value)
		const value2 = parseInt(document.querySelector("#calcInput").value)
		document.querySelector("#calcResult").innerHTML = isNaN(value * value2) ? "" : value * value2
	})

	// Listening to compute button clicks
	document.querySelector("#calcClick").addEventListener("click", () => {
		const n = getNowTime()
		const value = selectArr[document.querySelector("#calcSelect").value - 1]
		const value2 = document.querySelector("#calcResult").innerHTML

		storeHistory({ day: n, type: value, calc: value2 })
	})
})



// create a search result
function CreateSearchResult(res) {

	const searchUl = document.querySelector("#searchUL")
	searchUl.innerHTML = ""

	res.forEach(element => {
		// Create an img tag
		const img = document.createElement("img")
		img.src = element.img
		// Create h3 tags
		const h3 = document.createElement("h3")
		h3.innerHTML = element.title
		// create a p
		const p = document.createElement("p")
		p.innerHTML = element.price

		// creart a li
		const li = document.createElement('li')
		li.appendChild(img)
		li.appendChild(h3)
		li.appendChild(p)

		searchUl.appendChild(li)
	});

}


// get current time
function getNowTime() {
	const d = new Date()
	const y = d.getFullYear()
	const m = d.getMonth() + 1
	const day = d.getDate()

	return `${day}/${m}/${y}`
}

// save records
function storeHistory(obj) {
	let h = localStorage.getItem("history")
	// Determine whether there is a history
	if (h == null) {
		// equal to empty creates new array
		h = []
	} else {
		h = JSON.parse(h)
	}

	h.unshift(obj)

	// Pop if the length is greater than 7
	if (h.length > 7) {
		h.pop()
	}

	localStorage.setItem("history", JSON.stringify(h))


	// refresh
	createHistory()
}

// create history
function createHistory() {
	const list = document.querySelectorAll(".historyList")

	let h = localStorage.getItem("history")
	// Determine whether there is a history
	if (h == null) {
		// quit
		return
	} else {
		h = JSON.parse(h)
	}
	list.forEach((v, i) => {

		// prevent array out of bounds
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