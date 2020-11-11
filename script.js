$(document).ready(function(){
        $("#submit").click(function(e){
            e.preventDefault()
            let text=$("#text").val()
            let list=$("#list")
            list.append(`<span><li>${text} <button class="del" onclick="deleteItem(this)" >Delete</button></li> </span>`)
        })

       
    }
)

function deleteItem(e){
    e.parentElement.remove()
}