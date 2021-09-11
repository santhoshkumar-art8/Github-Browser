

const sub=document.getElementById('ben');

sub.addEventListener("click",function(e){
  e.preventDefault();
uservalue=document.getElementById("user").value;

  
 





 var request=new XMLHttpRequest();





request.open('GET',"https://api.github.com/users/"+uservalue+"/repos",true);

request.onload=function (){
  var data = JSON.parse(this.response);

  var statusHTML = '';
  $.each(data, function(i, status) {
    statusHTML += '<tr>';
    statusHTML += '<td>' + status.id + '</td>';
    statusHTML += '<td>' + status.name + '</td>';
    statusHTML += '<td><a  href=" + status.html_url + ">'+status.html_url+'</a></td>';
    statusHTML += '<td>' + status.language + '</td>';
    statusHTML += '</tr>';
  });
  $('tbody').html(statusHTML);
}

request.send();


});




