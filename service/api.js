const getData = () => {
  return fetch("./service/testtakers.json")
    .then(response => response.json())
    .catch(error => err);
}

export { getData };
