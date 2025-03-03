$(document).ready(function(){
    $('form').submit(function(e){
        e.preventDefault();

        const tarefa = $('#input-tarefa').val();
        const adicionaTarefa = $('<li></li>');
        const linkRemover = $('<a href="#"></a>');
        const imgRemover = $('<img src="./images/check.svg" alt="check">');
        
        imgRemover.appendTo(linkRemover);
        linkRemover.appendTo(adicionaTarefa);
        
        $(`<span>${tarefa}</span>`).appendTo(adicionaTarefa);
        $(adicionaTarefa).appendTo('ul');

        $('#input-tarefa').val('');

        linkRemover.click(function() {
            $(this).closest('li').remove();
        });
    });
});
