var atualizaDados = function() {
	var itens = $(".item-total:visible");
	var total = 0;
	for(var i = 0; i < itens.length; i++) {
		var item = $(itens[i]);
		var valor = parseFloat(item.text());
		total += valor;
	} 
	$("#valor-total").text(total);
	$("#quantidade-de-itens").text(itens.length);
}

var removeItem = function(event) {
	event.preventDefault();

	var self = $(this);
	self.closest("tr").hide();

	atualizaDados();
	// var atual = parseInt($("#quantidade-de-itens").text());
	// var novaQuantidade = atual -1;
	// $("#quantidade-de-itens").text(novaQuantidade);

	// var precoAtual = parseFloat($("#valor-total").text());
	// var preco = parseFloat(self.closest("td").find(".item-total").text());
	// var precoFinal = precoAtual - preco;
	// $('#valor-total').text(precoFinal);
}

var undo = function(){
	$("tr:visible").removeClass("recuperado");
	var trs = $("tr:hidden");
	trs.addClass("recuperado");
	trs.show();
}
var aposInicializado = function() {
	atualizaDados();
	$("#undo").click(undo);
	$(".remove-item").click(removeItem);
};	

$(aposInicializado);