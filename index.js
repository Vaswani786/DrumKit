var btnArr = document.querySelectorAll("button");

for(let i = 0; i < btnArr.length; i++)
{
    btnArr[i].addEventListener("click",function() {
        var num = i.toString();
        // console.log(num);
        document.getElementById(num).play();
    });
}