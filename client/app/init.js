const fetchAlbums = url => {
  fetch(url)
    .then(res => res.json())
    .then(data => {
      //console.log(data)

      if(data.length > 0) {
        let temp = "";
        // start for loop

        data.forEach((u) => {
          temp += "<tr>";
          temp += "<td>" + u.AlbumId + "</td>";
          temp += "<td>" + u.Title + "</td>";
          temp += "<td>" + u.ArtistId + "</td></tr>";
        })
        // close for loop

        document.getElementById("albumTable").innerHTML = temp;
      }

    })
    .catch(err => console.error(err));
}

fetchAlbums('/api/albums');

