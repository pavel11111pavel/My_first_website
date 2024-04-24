var count = 0;
document.getElementById("myButton").onclick=function(){
    count++;
    if (count % 2 == 0){
        document.getElementById("demo").innerHTML = "";
    } else {
        var img = document.createElement("img");
        img.src = "https://pernatiki.com/wp-content/uploads/post_5d7bde8a4165b.jpg";
        document.getElementById("demo").appendChild(img);
    }
}