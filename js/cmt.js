
 function getCommentList(){
  $.ajax({
    method:'GET',
    url:'http://www.liulongbin.top:3006/api/cmtlist',
    success:function(res){
      if(res.status !== 200){
        console.log('获取评论失败')
      }
      var rows = [];
      $.each(res.data,function(i,item){
        var str = '<li class="list-group-item"><span class="badge" style="background-color: #F0AD4E;">评论时间：' + item.time + '</span><span class="badge" style="background-color: #5BC0DE;">评论人：' + item.username + '</span>' + item.content + '</li>';
       rows.push(str);
       $('#cmt-list').empty().append(rows.join(''))
      })
    }
  })
 }

getCommentList()
$('#formAddCmt').submit(function postCommentList(e){
  e.prventDefault();
  var data = $(this).serialize()
  $.ajax({
    method:'POST',
    url:'http://www.liulongbin.top:3006/api/addcmt',
    data:data,
    success:function(res){
      if(res.status!==2000){
        console.log('发表评论失败');
      }
      getCommentList();
      $('#formAddCmt')[0].reset()
    }

  })
})