let form = document.getElementById("form"); 
let numInput = document.getElementById("numInput");
let textInput = document.getElementById("textInput");
let categoryInput = document.getElementById("categoryInput");
let msg = document.getElementById("msg");
let print = document.getElementById("print");



//Eventlistner
form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("submited")
    formvalidate()
});

let formvalidate = () => {
    if(numInput.value === '' || textInput.value === ''){
        // console.log("didnt Entered amount")
        msg.innerHTML = "Please enter all details";
    }
    else{
        // console.log("entered")
        msg.innerHTML = '';
        acceptData()
    }
}


let data = {}
let acceptData = ()=>{
    //data is object and amount is key
    data["amount"] = numInput.value
    data["discription"] = textInput.value
    data["categorey"] = categoryInput.value

    // console.log(data);
    DisplayScreen()
};

// data is object and amount is key
let DisplayScreen = ()=>{
    print.innerHTML +=`
    <div>
        <ul>
            <li>${data.amount} - ${data.discription} - ${data.categorey}  <button onclick="deleteItem(this)">Delete Expense</button> <button onclick="editItem('this')">Edit Expense</button><br></li>
         </ul>
    <div>
    `
}

let deleteItem = (e)=>{
    e.parentElement.remove();

}

let editItem = (e)=>{
    if (!data) {
        return;
    }

    const numInput = prompt('Enter New Amount:', numInput.amount);
    const textInput = prompt('Enter New Description:', textInput.desc);
    const categoryInput = prompt('Enter New Category:', categoryInput.cat);
}