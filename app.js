const linkReciever = "https://jsonplaceholder.typicode.com/users"
const newData = document.getElementById("showResult")
const input = document.getElementById("input")

const getData = async()=>{
    const response = await fetch(linkReciever);
    const responseData = await response.json();
    return responseData;
}

const display = async()=>{
    const showData = await getData();
    let inputValue = input.value;

    const mappingData = showData.filter((eventData)=>{
        if (inputValue === "") {
            return eventData;
        }
        else if (eventData.name.toLowerCase().includes(inputValue.toLowerCase())) {
            return eventData;
        }
        else if (eventData.username.toLowerCase().includes(inputValue.toLowerCase())) {
            return eventData;
        }
        else if (eventData.email.toLowerCase().includes(inputValue.toLowerCase())) {
            return eventData;
        }
        else if (eventData.id===(Number(inputValue))) {
            return eventData;
        }
    
    }).map((element)=>{
        const {name, id, username,phone,email,address,website,company}= element;
        const {street, zipcode, geo} = address;
        const {lat , lng}= geo;
        const{catchPhrase,bs}= company;        

        return`
          <div>
        <p>${id}</p>
        <p>${name}</p>
        <p>${username}</p>
        <p>${phone}</p>
        <p>${email}</p>
        <p>${street} , ${zipcode}</p>
        <p>${lat} , ${lng}</p>
        <p>${website}</p>
        <p>${catchPhrase} , ${bs}</p>


        </div>
        <br>
        `
    }).join("");
    newData.innerHTML = mappingData;
}

display();

input.addEventListener("input", ()=>{
    display();
})

