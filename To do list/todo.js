//  getandupdate
function getandupdate(){
    console.log("Updating List...");
    tit = document.getElementById('Title').value;
    desc = document.getElementById('description').value;
    if (localStorage.getItem('itemsJson') == null) {
        itemJsonArray = [];
        itemJsonArray.push([tit, desc]);
        localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray))
    }
    else {
        itemJsonArrayStr = localStorage.getItem('itemsJson')
        itemJsonArray = JSON.parse(itemJsonArrayStr);
        itemJsonArray.push([tit, desc]);
        localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray))
    }
    update();
}

//update function

function update(){
    if (localStorage.getItem('itemsJson') == null) {
        itemJsonArray = [];
        localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray))
    }
    else {
        itemJsonArrayStr = localStorage.getItem('itemsJson')
        itemJsonArray = JSON.parse(itemJsonArrayStr);
    }
    //populste the table//

    tablebody = document.getElementById("tablebody")
    let str = "";
    itemJsonArray.forEach((element, index) => {
    str += `
    <tr>
    <th scope="row">${index + 1}</th>
    <td>${element[0]}</td>
    <td>${element[1]}</td>
    <td><button class="btn btn-sm btn-primary" onclick="deleted(${index})">Delete</button></td>
    </tr>`;
    });
    tablebody.innerHTML = str;
}

    add = document.getElementById("add");
    add.addEventListener("click", getandupdate);
    update();
        
//Delete function.
        
function deleted(itemindex){
    console.log("Delete",itemindex);
    itemJsonArrayStr = localStorage.getItem('itemsJson')
    itemJsonArray = JSON.parse(itemJsonArrayStr);

//Delete index item element from arrray.

    itemJsonArray.splice(itemindex, 1);
    localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray));
    update();
}

//clear all tasks.

function clearall(){
    if(confirm("Warning:This will clear your entire list!!")){
    console.log("clearing...")
    localStorage.clear();
    update()
    }
}