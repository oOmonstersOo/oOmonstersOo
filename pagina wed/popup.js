var btnAbrirPopup = document.getElementById('btn-abrir-popup'),
	overlay = document.getElementById('overlay'),
	popup = document.getElementById('popup'),
	btnCerrarPopup = document.getElementById('btn-cerrar-popup');
	
	btnAbrir = document.getElementById('btn-abrir'),
	over = document.getElementById('over'),
	pop = document.getElementById('pop'),
	btnCerrar = document.getElementById('btn-cerrar');

btnAbrirPopup.addEventListener('click', function(){
	overlay.classList.add('active');
	popup.classList.add('active');
});

btnCerrarPopup.addEventListener('click', function(e){
	e.preventDefault();
	overlay.classList.remove('active');
	popup.classList.remove('active');
});

btnAbrir.addEventListener('click', function(){
	over.classList.add('active');
	pop.classList.add('active');
});

btnCerrar.addEventListener('click', function(e){
	e.preventDefault();
	over.classList.remove('active');
	pop.classList.remove('active');
});
