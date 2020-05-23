data.map(data => {
  // print data from array into dom
  const row = document.createElement("tr");
  const root = document.getElementById("root");
  root.appendChild(row);
  row.innerHTML = `
    <td>${data.name}</td>
    <td>${data.surname}</td>
    <td>${data.age}</td>
  `;
});

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
