var form = document.getElementById("addForm");
var itemList = document.getElementById("item-list")
var searchItem = document.getElementById("filter")

//add eventListeners
form.addEventListener("submit", addItem)
// delete event
itemList.addEventListener("click", deleteItem)
// filter event
searchItem.addEventListener('keyup',filterItems)

// Add item
function addItem(e){
    e.preventDefault()
    // console.log(1);
    // get input value
var newItem = document.getElementById("item").value

// create a new li element
var li = document.createElement("li")

// add classlist to the li element
li.className="list-group-item"

// add textnode with input value
li.appendChild(document.createTextNode(newItem))
// console.log(li);

// create delete button
var deltbtn = document.createElement("button")

// add classnames to the deltbtn
deltbtn.className = "btn btn-danger btn-sm float-right"

// add textNode
deltbtn.appendChild(document.createTextNode("X"))

// append delebtn to the li element
li.appendChild(deltbtn)

// append li to the itemList
itemList.appendChild(li)

}

// delete item
function deleteItem(e){
    if (e.target.classList.contains("delete")) {
        if(confirm("Are you sure?")){
            var li = e.target.parentElement
            itemList.removeChild(li)
        }
    }

}

// filter items
function filterItems(e){
    //  convert input to lowecase
    var text = e.target.value.toLowerCase()
    // console.log(text)

    // get li items
    var items = itemList.getElementsByTagName("li")

    //convert to an array
    Array.from(items).forEach(function(element){
        var itemName = element.firstChild.textContent
        // console.log(itemName)
        if(itemName.toLowerCase().indexOf(text) != -1){
            element.style.display = "block"
        
        }else{
            element.style.display ="none";
        }
    }) 
}