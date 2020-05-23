data.map(data => {
  const row = document.createElement("tr");
  const root = document.getElementById("root");
  root.appendChild(row);
  row.innerHTML = `
    <td>${data.name}</td>
    <td>${data.surname}</td>
    <td>${data.age}</td>
  `;
});

var table = document.querySelector(".table"),
  ths = table.querySelectorAll("thead th"),
  trs = table.querySelectorAll("tbody tr"),
  df = document.createDocumentFragment();
let tHead = document.querySelectorAll("th");
let rows = document.querySelectorAll("tbody tr");

const sortBy = e => {
  tHead = Array.from(tHead);
  rows = Array.from(rows);
  let i = e.target.cellIndex;
  rows.sort((a, b) => {
    let tdA = a.children[i].textContent,
      tdB = b.children[i].textContent;
    if (tdA < tdB) {
      return -1;
    } else if (tdA > tdB) {
      return 1;
    } else {
      return 0;
    }
  });

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
