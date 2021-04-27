
let app = {
	
	inicializar: function(){
		console.log("inicializar: function(){...");
		document.addEventListener('deviceready', meuapp.onDeviceReady, false);
		document.addEventListener('onResume', meuapp.retornoAoPrimeiroPlano, false);
		document.addEventListener('resume', meuapp.retornoAoPrimeiroPlano, false);
		},
		
	onMyDeviceReady: function(){
	
	console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
	document.getElementById("btnSelecionaContato").addEventListener('click', meuapp.selecionarContato);
	},
	
	retornoAoPrimeiroPlano: function(){
		console.log("retornoAoPrimeiroPlano:function(){...");
		},
		
	selecionarContato : function(){
		console.log("selecionarContato : function(){...");
		navigator.contacts.pickContact(function(c){
			console.log(c);
		},function(err){
			console.log("Contato nao selecionado");
			console.log(err);
		});
		

			
		
		

}


 
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    document.getElementById('deviceready').classList.add('ready');
}
