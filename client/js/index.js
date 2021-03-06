const form = document.querySelector(".form");

const campos = [
  document.querySelector("#data"),
  document.querySelector("#quantidade"),
  document.querySelector("#valor")
];

form.addEventListener("submit", function(event) {
  event.preventDefault();
  
  const tbody = document.querySelector("table tbody");
  const tr = document.createElement("tr");

  campos.forEach(campo => {
    const td = document.createElement("td");
    
    td.textContent = campo.value;
    tr.appendChild(td);
  });

  const tdVolume = document.createElement("td");
  tdVolume.textContent = campos[1].value * campos[2].value;
  tr.appendChild(tdVolume);

  tbody.appendChild(tr);
  
  campos[0].value = ""
  campos[1].value = "1"
  campos[2].value = "0.0"

  campos[0].focus();
})

