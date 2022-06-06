document.querySelector("button").addEventListener("click", function () {
  const name = document.querySelector(".list").value;
  fetch(`http://localhost:3000/api/${name}`)
    .then((res) => res.json())
    .then((data) => {
      document.querySelector(".result").innerHTML = "";
      console.log(data);
      let details = document.createElement("p");
      for (const prop in data) {
        let str = `${prop}: ${data[prop]} || `;
        details.innerHTML += str;
      }
      document.querySelector(".result").append(details);
    })
    .catch((error) => console.error(error));
});
