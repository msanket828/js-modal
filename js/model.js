var btn=document.getElementById("btn"),
		model=document.querySelector(".modal-outer"),
		actualModel=document.querySelector(".modal-main"),
		cancel=document.querySelector(".close"),
		body=document.querySelector("body");
// to open model after click on button
btn.addEventListener('click',function() {		
	if(model.classList.contains("hide-modal")) {
		model.classList.remove("hide-modal");
		body.classList.add("overflow");			
	}
});
//to exit from the model if user click outside the model
model.addEventListener('click',function(e) {
	console.log(e.target);
	if(e.target!=model) {
		return false;			
	} else {
			model.classList.add("hide-modal");
			body.classList.remove("overflow");
		}
});
//for cancel btn functionality
cancel.addEventListener('click',function() {
	model.classList.add("hide-modal");
	body.classList.remove("overflow");
});