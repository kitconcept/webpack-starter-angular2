// fetch("http://localhost:8000/api/profile")
//   .then(response => {
//     if (response.status !== 200) {
//       import(/* webpackChunkName: "main" */ "./main");
//     }
//     // else {
//     //   window.location.replace("https://google.com");
//     // }
//   })
//   .catch(e => console.log("error!"));

function component() {
  var element = document.createElement("div");
  var button = document.createElement("button");
  var br = document.createElement("br");

  button.innerHTML = "Click me and look at the console!";
  element.innerHTML = "Hello webpack";
  element.appendChild(br);
  element.appendChild(button);

  // Note that because a network request is involved, some indication
  // of loading would need to be shown in a production-level site/app.
  button.onclick = e =>
    import(/* webpackChunkName: "main" */ /* webpackMode: "lazy" */ "./main").then(
      module => {
        console.log("angular app loaded");
      }
    );

  return element;
}

document.body.appendChild(component());
