let usersBox = document.querySelector(".users");

let resURL = "https://jsonplaceholder.typicode.com/users";
let users = [];
let getUsers = JSON.parse(localStorage.getItem("users"));
let displayUsers = getUsers.map((user) => {
  return `<li>
      <h1>${user.name}</h1>
      <p>${user.email}</p>
    </li>`;
});

usersBox.innerHTML = displayUsers;

// 1. CREATE OUR XHR OBJECT
const xhr = new XMLHttpRequest();

// 2. SET OUR RESPONSE TYPE
xhr.responseType = "json";

// 3. CONFIGURE OUR REQUEST
xhr.open("GET", resURL, true);

// 4. SEND THE REQUEST
xhr.send();

// 5. DECLARE FUNCTIONS BASED ON EVENTS
xhr.onload = () => {
  const data = xhr.response;
  users = data;
  localStorage.setItem("users", JSON.stringify(users));
};

xhr.onprogress = (event) => {
  console.log(`Loaded ${event.loaded} of ${event.total}`);
};

xhr.onerror = () => {
  console.log("Request failed!");
};
