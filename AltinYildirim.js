$(document).ready(function () {
  $("#nav_list a").on("click", function (event) {
    event.preventDefault();

    const title = $(this).attr("title");
    const path = `json_files/${title}.json`;

    $.getJSON(path)
      .done(function (response) {
        displaySpeakers(response.speakers);
      })
      .fail(function () {
        alert("Speaker information could not be loaded.");
      });
  });

  function displaySpeakers(speakers) {
    const $main = $("main");
    $main.empty();

    speakers.forEach(function (speaker) {
      const $h1 = $("<h1>").text(speaker.title);
      const $img = $("<img>").attr({
        src: speaker.image,
        alt: speaker.speaker,
      });
      const $h2 = $("<h2>").html(`${speaker.month}<br>${speaker.speaker}`);
      const $p = $("<p>").text(speaker.text);

      $main.append($h1, $img, $h2, $p);
    });
  }
});
