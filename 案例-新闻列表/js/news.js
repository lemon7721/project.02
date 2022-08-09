$(function(){
  function getNewsList(){
$.get('http://www.liulongbin.top:3006//api/news',function(res){
  if(res.status !== 200){
    console.log(res.status )
    return alert('获取数据失败')
  }
  var htmlStr = template('tpl-news',res);
  var tplNews = document.querySelector('#tpl-news');
  tplNews.innerHTML = htmlStr;
  for (var i=0; i<res.data.length;i++){
    res.data[i].tags = res.data[i].tags.split(',')
}})}
getNewsList()
})