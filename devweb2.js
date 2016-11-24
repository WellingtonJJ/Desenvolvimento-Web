
$(function() {
    
    
  
    
    /*Regras de validação dos campos do form - biblioteca JQUERY VALIDATION*/
    $("#formajuda").validate({
        rules: {
            nome:{required: true, minlength: 5},
			idade:{required: true},
			telpf:{required: true, minlength: 8},
            email:{required: true, minlength: 9},
			instituicao:{required: true,minlength: 10},
			sigla:{required: true,minlength: 3},
			telpj:{required: true,minlength: 8},
			cidade:{required: true,minlength: 5},
			endereco:{required: true,minlength: 10},
			referencia:{required: false},
			estado:{required: true},
			abertura:{required: true},
			fechamento:{required: true}
			
        },
    
        messages: {
            nome:{required: "Digite o seu nome", 
                  minlength:"Nome invalido"},
			idade:{required: "Digite sua idade"},
			telpf:{required: "Digite seu telefone pessoal", 
                  minlength:"Telefone invalido"},	  
			email:{required: "Digite seu email", 
                  minlength:"Email invalido"},	  
			instituicao:{required: "Digite a instituicao", 
                  minlength:"Instituicao invalida"},	  
			sigla:{required: "Digite a sigla", 
                  minlength:"Sigla invalida"},	  
			telpj:{required: "Digite o telefone da instituicao", 
                  minlength:"Telefone invalido"},	  
			cidade:{required: "Digite a cidade", 
                  minlength:"Cidade invalida"},	  
			endereco:{required: "Digite o endereco", 
                  minlength:"Endereco invalido"},	  
			estado:{required: "Escolha o estado"},	  
			abertura:{required: "Informe o horario de abertura"},	  
			fechamento:{required: "Informe o horario de fechamento"}	  
				  
           
				  
				  
        },
    
        //Monta a mensagem em uma caixa separada
        errorLabelContainer: $("#bbugs"), // Ta errado propositalmente pra msg aparecer em baixo da caixa
        errorElement: "li"
    });
 
});