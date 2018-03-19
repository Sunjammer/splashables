const cv = document.getElementById("canvas") as HTMLCanvasElement
const ctx = cv.getContext("2d")
if(ctx){
	requestAnimationFrame((t) => onFrame(t))
}

function onFrame(t:number){
	if(ctx){
	}
	requestAnimationFrame((t) => onFrame(t))
}