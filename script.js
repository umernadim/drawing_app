let canvas = document.getElementById('drawing-board')
let toolbar = document.getElementById('toolbar')
let ctx = canvas.getContext('2d')

let canvasOffSetX = canvas.offsetLeft
let canvasOffSetY = canvas.offsetTop

canvas.width = window.innerWidth - canvasOffSetX
canvas.height = window.innerHeight - canvasOffSetY

let isPainting = false;
let lineWidth = 5;
let startX;
let startY;

toolbar.addEventListener('click', (e)=>{
    if(e.target.id === 'clear'){
        ctx.clearRect(0,0, canvas.width, canvas.height)
    }
});

toolbar.addEventListener('click',(e)=>{
    if(e.target.id === 'stroke')
        ctx.strokeStyle = e.target.value
})

toolbar.addEventListener('click',(e)=>{
    if(e.target.id === 'lineWidth')
        lineWidth = e.target.value
})

let draw = (e)=>{
    if(!isPainting){ 
        return
    }
    ctx.lineWidth = lineWidth
    ctx.lineCap = 'round'

    ctx.lineTo(e.clientX - canvasOffSetX , e.clientY)
    ctx.stroke()
}

canvas.addEventListener('mousedown',(e)=>{
    isPainting = true;
    startX = e.clientX
    startY = e.clientY
})

canvas.addEventListener('mouseup',(e)=>{
    isPainting = false
    ctx.stroke()
    ctx.beginPath()
})

canvas.addEventListener('mousemove',draw)