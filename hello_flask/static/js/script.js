users = [
    {'first_name' : 'Michael', 'last_name' : 'Choi'},
    {'first_name' : 'John', 'last_name' : 'Supsupin'},
    {'first_name' : 'Mark', 'last_name' : 'Guillen'},
    {'first_name' : 'KB', 'last_name' : 'Tonel'}
 ]

 var ul = document.getElementById('the_users');
 for(var i = 0; i < users.length; i++){
    var li = document.createElement('li');
    li.textContent = users[i];
    ul.appendChild(li);
}

 
 