let nombre= document.querySelector("#nombre");
let apellido= document.querySelector("#apellido");
let mail= document.querySelector("#Email");
let dni= document.querySelector("#dni");
let tel= document.querySelector("#tel");





function chequear(){
	if(nombre.value==="" || nombre.value===" "){
		
		nombre.style.border=" 2px solid red"
	}
	if(apellido.value==="" || apellido.value===" "){
		
		apellido.style.border=" 2px solid red"
	}
	if(mail.value==="" || mail.value===" "){
		
		mail.style.border=" 2px solid red"
	}
	if(dni.value==="" || dni.value===" "){
		
		dni.style.border=" 2px solid red"
	}
	if(tel.value==="" || tel.value===" "){
		
		tel.style.border=" 2px solid red"
	}

}


















