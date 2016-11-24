
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
            nome:{required: "Informe o seu nome", 
                  minlength:"Nome curto demais"},
            nome:{required: "Informe o seu nome", 
                  minlength:"Nome curto demais"},
			nome:{required: "Informe o seu nome", 
                  minlength:"Nome curto demais"},
			nome:{required: "Informe o seu nome", 
                  minlength:"Nome curto demais"},
			nome:{required: "Informe o seu nome", 
                  minlength:"Nome curto demais"},	  
			nome:{required: "Informe o seu nome", 
                  minlength:"Nome curto demais"},	  
			nome:{required: "Informe o seu nome", 
                  minlength:"Nome curto demais"},	  
			nome:{required: "Informe o seu nome", 
                  minlength:"Nome curto demais"},	  
			nome:{required: "Informe o seu nome", 
                  minlength:"Nome curto demais"},
			nome:{required: "Informe o seu nome", 
                  minlength:"Nome curto demais"},
				  
				  
        },
    
        //Monta a mensagem em uma caixa separada
        errorLabelContainer: $("#bbugs"), // Ta errado propositalmente pra msg aparecer em baixo da caixa
        errorElement: "li"
    });
 
});