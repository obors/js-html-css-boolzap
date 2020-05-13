
// $(".msgtype").dblclick(function (){
// $(".send").hide()
// })
$(".msgtype").click(function (){
  $(".send").show()})
$(".fa-paper-plane").click(function (){
  // var msgInput=$("input.msgtype").val();
  send_msg();

  $(".send").hide();

})


function send_msg(){
  //recupero test messaggio $msgInput
  var msgInput = $(".msgtype").val();

  if(msgInput.trim() != ""){
    var msgTextTo = $(".template .msgtext").clone();
    msgTextTo.find(".textTo").text(msgInput);
    //si aggiung la classe to
    msgTextTo.addClass("to");
    //l'aggiunta del testo inside wbox
    $(".msgbox").append(msgTextTo);
    $(".msgtype").val();
    setTimeout (msgTextTo,1000);
  }

}
// function receive_msg(){
//
//   // while (msgInput).hasClass(to){
//
//
//     var newMsgText = $(".template .msgtext").clone();
//     //si aggiung la classe to
//     newMsgText.addClass("in");
//     //l'aggiunta del testo inside wbox
//     newMsgText.children(".textIn").text("oki");
//     $(".msgbox").append(newMsgText);
//    }









  //intercettare click sul search + input
  // $(".search").click(function (){
  //   //recupreare testo
  //   //verificare il match
  // });
  // $("#searcher .fa-search").click(function (){
  //   var find = $(".search").val().trim().toLowerCase();
  //   console.log(find);
  //   if (search != '')
  //   //si recupera il nome del contatto
  //   $(".nametime").each(function (){
  //     var contName = $(this).find(".name")
  //     console.log(contName);
  //
  //      if(contName.includes(find)) {
  //         $(this).show();
  //         	console.log(cont)
  //      }else
  //        $(this).hide();
  //
  //   });
  // });


  $('.contacts').click(function (){
    console.log('click')
     var matches = $(this).attr('id');

     if (matches == '.own'&& '.adviser'){
       $(".contacts").addClass('hide');
       setTimeout(function () {
         $(this).removeClass('hide')
       });
     }else{
       $(".contacts").addClass('hide');
       setTimeout(function (){
         $('.' + matches).removeClass('hide')
       }, 300);
     }
  });
