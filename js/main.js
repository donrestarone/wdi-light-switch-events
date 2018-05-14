var lightStatus = document.querySelector('.status');
var button = document.querySelector('button')
var body = document.querySelector('.light')
//add method
// button.addEventListener('click', function(e){
// 	if(e.target.classList.contains('on')){
// 		e.target.classList.remove("on")
// 		e.target.classList.add("off")
// 	} else if(e.target.classList.contains('off')){
// 		e.target.classList.remove("off")
// 		e.target.classList.add("on")
// 	}
// })

//toggle method
button.addEventListener('click', function(e){
	e.target.classList.toggle('on');
	e.target.classList.toggle('off');
	body.classList.toggle('dark');
	body.classList.toggle('light');
	if(e.target.classList.contains('on')){
		lightStatus.innerText = "It's so bright in here!"
	} else if(e.target.classList.contains('off')){
		lightStatus.innerText = "Who turned off the light?!"
	}
})

// lightStatus.addEventListener('click', function(e){
// 	if(e.target.innerText === 'Who turned off the light?');
// 		e.target.remove 
// })

// button.addEventListener('click', function(e){
// 	lightStatus.innerText = 'Who turned off the light?'
// 	if(e.target.innerText === 'Who turned off the light?'){
// 		e.target.remove 
// 	}
// })

