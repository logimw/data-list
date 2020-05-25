const render = array => {
  const root = document.getElementById("root");
  root.innerHTML = "";
  array.map(array => {
    const row = document.createElement("tr");
    // print data from array into dom
    root.appendChild(row);
    row.innerHTML = `
      <td>${array.name}</td>
      <td>${array.surname}</td>
      <td>${array.age}</td>
    `;
  });
};

render(data);

let table = document.querySelector(".table"),
  ths = table.querySelectorAll("thead th"),
  trs = table.querySelectorAll("tbody tr"),
  df = document.createDocumentFragment(),
  tHead = document.querySelectorAll("th"),
  rows = document.querySelectorAll("tbody tr");

// removing class standing for signal to sort
const clearClass = nodeList =>
  nodeList.forEach(nodeElement => {
    nodeElement.className = "";
  });

const sortBy = e => {
  // convert node lists into array for iterating methods
  tHead = Array.from(tHead);
  rows = Array.from(rows);
  let i = e.target.cellIndex,
    order =
      e.target.className === "" || e.target.className === "desc"
        ? "asc"
        : "desc";

  clearClass(tHead);

  rows.sort((a, b) => {
    let tdA = a.children[i].textContent,
      tdB = b.children[i].textContent;
    // sorting
    if (tdA < tdB) {
      return order === "asc" ? -1 : 1;
    } else if (tdA > tdB) {
      return order === "asc" ? 1 : -1;
    } else {
      return 0;
    }
  });
  // set class
  e.target.className = "order";

  // "render" sorted list
  rows.forEach(function(tr) {
    df.appendChild(tr);
  });
  table.querySelector("tbody").appendChild(df);

  // rows.forEach(row => {
  //   document.createDocumentFragment().appendChild(row);
  // });
  // root.appendChild(document.createDocumentFragment());
};

tHead.forEach(head => {
  head.addEventListener("click", sortBy);
});

const form = document.getElementById("addUser");
const sendBtn = document.getElementById("sendBtn");

sendBtn.addEventListener("click", e => {
  //e.preventDefault();
});

form.addEventListener("submit", e => {
  let formInputs = document.querySelectorAll("#name, #surname, #age");
  e.preventDefault();
  console.log(formInputs);
  let formData = {};
  Array.from(formInputs);
  formInputs.forEach(input => {
    if (input.name === "age") {
      let age = parseInt(input.value);
      formData[input.name] = age;
    } else {
      formData[input.name] = input.value;
    }
    console.log(`${input.name}: ${input.value}`);
    // input.name === "age" ? parseInt(input.value) : input.name;
  });
  console.log(formData);
  data.push(formData);
  render(data);
});
