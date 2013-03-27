bind('sender', function() {
  print this.innerHTML;
  var nick = this.innerHTML.replace(':', '');
  var url = "http://dgo.to/@" + nick;
  this.innerHTML = '<a href="' + url + '">' + nick + '</a>';
});
