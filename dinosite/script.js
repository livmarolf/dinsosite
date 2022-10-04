function handleSubmit(e) {
  e.preventDefault();
  const formData = new FormData(e.target);

  fetch("https://httpbin.org/post", {
    method: "POST",
    body: formData,
  })
    .then((res) => res.json())
    .then(console.log)
    .catch(console.error);
}
