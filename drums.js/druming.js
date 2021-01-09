

	

function playSound(e){      

	let keyValue;
	if(e.keyCode){
		keyValue=e.keyCode;
	}
	else{
		keyValue=this.dataset.key;
	}

    const audio=document.querySelector(`audio[data-key='${keyValue}']`);
    const key=document.querySelector(`.key[data-key='${keyValue}']`);

    if(!audio) return;
    audio.currentTime=0;
    audio.play();
    key.classList.add('playing');
}
function removeTransition(e){
    if(e.propertyName !== 'transform') return;
    
    this.classList.remove('playing');
}

//Start from here
const keys=document.querySelectorAll('.key');

keys.forEach((key)=>{
	key.addEventListener('transitionend',removeTransition);
});
keys.forEach((key)=>{
	key.addEventListener('click',playSound);

});	

window.addEventListener('keyup',playSound);