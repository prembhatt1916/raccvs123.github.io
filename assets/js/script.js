const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')
const rotaryInput = document.getElementById('rotary_id')
//const nameInput = document.getElementById('name')
//const eventInput = document.getElementById('event')
//const dateInput = document.getElementById('date')
const downloadBtn = document.getElementById('download-btn')

const image = new Image()
image.src = 'assets/img/pass.png'
image.onload = function () {
	drawImage()
}

function draw1Image() {
	// ctx.clearRect(0, 0, canvas.width, canvas.height)
	ctx.drawImage(image, 0, 0, canvas.width, canvas.height)
	ctx.font = '40px monotype corsiva'
	ctx.fillStyle = '#ffffff'
	ctx.fillText(rotaryInput.value, 220, 500)
}

function drawImage() {
	// ctx.clearRect(0, 0, canvas.width, canvas.height)
	ctx.drawImage(image, 0, 0, canvas.width, canvas.height)
	ctx.font = '40px monotype corsiva'
	ctx.fillStyle = '#ffffff'
	ctx.fillText(rotaryInput.value, 220, 500)
}

//Rotary ID
rotaryInput.addEventListener('input', function () {
	drawImage()
})

//Name
//nameInput.addEventListener('input', function () {
	//drawImage()
//})

downloadBtn.addEventListener('click', function () {
	downloadBtn.href = canvas.toDataURL('image/jpg')
	downloadBtn.download = 'Certificate - ' + rotaryInput.value 
})
