self.addEventListener("install", event => {
  console.log("SW is installing...");

  // don't wait
  console.log(event);
  self.skipWaiting();
});

self.addEventListener("activate", event => {
  // This forces the SW to take over the first time.
  clients.claim();
  console.log(event);
  console.log("Now ready to handle fetches!");
});

url = "https://www.google.com/";

self.addEventListener("fetch", function(event) {
  console.log(event.request.url);
  if (/index\.html$/.test(event.request.url)) {
    console.log("bundle.js requested");
    const apiCall = fetch("http://localhost:8000/api/profile", {
      mode: "no-cors"
    })
      .then(response => {
        if (response.status !== 200) {
          //   return Response.redirect(url, 302);
          return clients.navigate(url);
        } else {
          return fetch("/bundle.js", { mode: "no-cors" });
        }
      })
      .catch(e => console.log(e));
    event.respondWith(apiCall);
  }
});
