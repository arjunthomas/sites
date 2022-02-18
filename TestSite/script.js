var pause = document.querySelector(".pause");
var audio = document.querySelector(".audio");

function togglePlay() {
	if (audio.paused) {
		audio.play();
		
	} else {
		audio.pause();
		pause.innerHTML = "Story";
	}
}