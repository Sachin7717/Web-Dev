let listitem = document.querySelectorAll("li");
console.log("js is linked")


console.log(typeof(listitem))
listitem.forEach(item => {
    item.addEventListener('click',()=>{
        document.querySelector(".active").classList.remove("active");
        item.classList.add("active");
        
        console.log("something is clicked")
    })
});