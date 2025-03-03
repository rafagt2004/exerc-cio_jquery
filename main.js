$(document).ready(function(){
    $('form').submit(function(e){
        e.preventDefault();

        const tarefa = $('#input-tarefa').val();
        console.log(tarefa)
        const adicionaTarefa = $('<li></li>');
        $(`<img src="./images/check.svg" alt="check">
            <span>${tarefa}</span>`).appendTo(adicionaTarefa);
        $(adicionaTarefa).appendTo('ul');

        $('#input-tarefa').val('')
    })
    
})