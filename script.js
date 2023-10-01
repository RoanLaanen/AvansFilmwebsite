document.addEventListener("DOMContentLoaded", function () {
  var movies = [];
  var i = 0;
  movies[0] = "https://kinepolis.nl/sites/kinepolis.nl/files/960x280.jpg";
  movies[1] =
    "https://preview.redd.it/y9ocptgp6zc91.jpg?width=1500&format=pjpg&auto=webp&s=2fe63d41e73ec1edb82e147bd6d2feebdf6b386b";
  movies[2] = "https://s39940.pcdn.co/wp-content/uploads/2023/04/1500x500.jpg";
  movies[3] =
    "https://www.thenun-movie.com/assets/images/ipadbannerportrait.jpg";
  movies[4] =
    "https://novouae.gumlet.io/Files//Movie/997x498/retribution-144-new.jpg?w=480&dpr=2.6";
  movies[5] =
    "https://scontent-ams4-1.xx.fbcdn.net/v/t39.30808-6/365296911_1007439317264493_6187480062842902548_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=52f669&_nc_ohc=NFAdz4POdo0AX8GCOxh&_nc_ht=scontent-ams4-1.xx&oh=00_AfD3yVgCYdT5E21qEo6C-_X3l4Jm1TXU0HS6WKGy1nrOTg&oe=651FD4C7";
  setInterval(() => {
    const parent = document.getElementsByClassName("grid-caroussel");
    document.getElementById("carousselImg").style.opacity = 0;

    setTimeout(() => {
      document.getElementById("carousselImg").remove();
      const newImg = document.createElement("img");
      newImg.id = "carousselImg";
      newImg.src = movies[i];
      newImg.style.opacity = 0;
      parent[0].appendChild(newImg);
      setTimeout(() => {
        document.getElementById("carousselImg").style.opacity = 1;
      }, 250);
    }, 250);

    if (i == movies.length - 1) {
      i = 0;
    } else {
      i++;
    }
  }, 5000);
});
