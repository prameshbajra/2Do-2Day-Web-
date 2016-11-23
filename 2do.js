var checklist = document.getElementById('checklist');
var items = checklist.querySelectorAll("li");
//      console.log(items);
var itemsInput = checklist.querySelectorAll("input");
var itemsSpan = checklist.querySelectorAll("span");

for (var i = 0; i < items.length; i++) {
    items[i].addEventListener("click", editItem);
    itemsInput[i].addEventListener("blur", enterItem);
    itemsInput[i].addEventListener("keypress", keyEdit);
}

function editItem() {
    //    console.log(this);
    this.className = "edit";
    var input = this.querySelector("input");
    input.focus();
    input.setSelectionRange(0, input.value.length);
}

function enterItem() {
    //    console.log(this.value);
    localStorage.setItem('newItem', this.value);
    var newItem = localStorage.getItem('newItem');
    this.previousElementSibling.innerHTML = newItem;
    this.parentNode.className = "";
}

function keyEdit(event) {
    if (event.which === 13) {
        enterItem.call(this);
    }
}
