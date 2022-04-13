function changeUser(){
    user_name = localStorage.getItem("user_name");
    document.getElementById("hd4").innerHTML = "Hi " + user_name;
}