//o usuario inseri itens na lista, os itens são adicionados
$("#formLista").on('submit',function(e){
    e.preventDefault();
    var userInput= $("#novo-item").val()
    $("#listContainer").append("<li>"+userInput+ '<input type="button" class="editar" value="Editar">'+ '<input type="button" class=" Excluir" value="Deletar">'+"</li>" )
    $('#novo-item').val('');
    updateListCount();
})
  //quando mudanças são feitas(itens adicionados ou removidos) a quantidade de tarefas é refletida com cada mudança
function updateListCount(){
var count= $("li").length;
$("h3").text("Você tem "+count+ " Tarefa(s)!");
}
  //fazer o botão delete remover o item da lista

$('#listContainer').on('click', '.delete',function(){
$(this).parent().remove();
updateListCount();
});
  //limpa todos o itens da lista
$( "#clearBtn" ).click(function() {
    $( "li" ).remove();
});

  //marca itens da lista como marcado complete
$(document).ready(function(){
    $("ul").on("click" ,"li", function (){
$(this).toggleClass("markComplete");

})
    //mostrar e ocultara os botões anexados
$("ul").on("mouseleave" ,"li", function (){
$(".delete, .edit").hide();
$(".delete, .edit").addClass("novo");
});


    $("ul").on("mouseenter" ,"li", function (){
    $(".delete, .edit").show();
    $(".delete, .edit").addClass("novo");
});

});

  //limpa os itens com a nova classe, mrca como concluido
    $( "#clearDone" ).click(function() {
    $( "li.markComplete" ).remove();
    updateListCount();
});

  //edita a tarefa
  //o usuario clica no botao de edição
        $(document).on("click", '.edit', function () {
      // fazendo o intervalo editavel e foqueo
        $(this).parent().prop("contenteditable", true).focus();
        return false;
});