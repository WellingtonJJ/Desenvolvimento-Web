$(function() {
    
    
  
    
    /*Regras de validação dos campos do form - biblioteca JQUERY VALIDATION*/
    $("#idform").validate({
        rules: {
            nome:{required: true, minlength: 5},
			idade:{required: true},
			telpf:{required: true},
            email:{required: true},
            telpj:{required: true},
            instituicao:{required: true},
            sigla:{required:true},
            fechamento:{required:true},
            abertura:{required:true},
            referencia:{required:false},
            endereco:{required:true},
			cidade:{required:true}
        },
    
        messages: {
            nome:{required: "Informe o nome", 
                  minlength:"Informe ao menos 5 caracteres"},
            email:{required: "Informe o email", email:"Email inválido"},
            telpf:{required: "Informe o telefone pessoal"},
			telpj:{required: "Informe o telefone da instituicao"},
            dtnasc:{required: "Informe a data de nascimento"},
            idade:{required: "Informe a idade"},
            instituicao:{required: "Informe a instituicao"},
            sigla:{required: "Informe A sigla"},
            cidade:{required: "Informe a cidade"},
            estado:{required: "Informe a UF"},
            abertura:{required: "Informe o horario de abertura"},
			fechamento:{required: "Informe o horario de fechamento"}
        },
    
        //Monta a mensagem em uma caixa separada
        errorLabelContainer: $("#bugs"),
        errorElement: "li"
    });
 
});