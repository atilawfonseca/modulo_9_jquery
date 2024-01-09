$(document).ready(function(){
    
    function inserirTarefaLista(){
        const nome_tarefa = $('#nome_tarefa').val();
        $(`<li>${nome_tarefa}</li>`).appendTo('ul');
        $('#nome_tarefa').val('');
    }
    function tarefaExecutada(){
        $('ul li').click( function(){
            $(this).css("text-decoration","line-through");
        });
    }
    
    $('form').on('submit', function(e){
        e.preventDefault();
        inserirTarefaLista();
        tarefaExecutada();
        
    });
    
});
