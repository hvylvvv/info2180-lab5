document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("lookupbtn").addEventListener("click", function () {
      var country = encodeURIComponent(document.getElementById("country").value);

      fetch("world.php?country=" + country)
        .then((response) => {
          return response.json();
        })
        .then((res) => {
          document.getElementById("results").innerHTML = res;
        })
        .catch((error) => {
          console.error(error);
        });
    });
  });