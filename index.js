const changeElement = (event) => {
	let btnClick = event.target
	let size = event.target.style.font.fontSize
	btnClick.innerHTML = "Click again"
	btnClick.style.font.fontSize *= 1.25
}

