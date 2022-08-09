$(function(){
  $('#btnSend').on('click',function(){
    var text = $('#ipt').val().trim()
    if(text.length<=0){
      return $('#ipt').val('');
    }
    $('#talk_list').append('<li class="right_word"><img src="img/person02.png" /> <span>'+text+'</span></li>')
    $('#ipt').val('');
    resetui();
    getMsg(text);
  })
  function getMsg(text) {
    $.ajax({
      type: 'get',
      url :'http://www.liulongbin.top:3006/api/robot',
      data: {
        spoken:text
      },
      success:function(res){
      if(res.message == 'success'){
        var msg = res.data.info.text
          $('#talk_list').append('<li class="left_word"><img src="img/person01.png" /> <span>' + msg + '</span></li>')
          resetui();
          getVoice(msg);
      }
      }
  })
  }
  $('#ipt').on('keyup', function (e) {
    // console.log(e.keyCode)
    if (e.key === 'Enter') {
      // console.log('用户弹起了回车键')
      $('#btnSend').click()
    }
  })
})