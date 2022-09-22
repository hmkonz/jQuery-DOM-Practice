$(document).ready(function () {
  $("button").on("click", function () {
    let movie = $("#title").val();
    let rating = $("#rating").val();
    $("<button>");
    // $("button").attr("id", "removeBtn");
    // $("button").text("Remove");

    $("span").append(
      $("<div>").append(
        "   " + movie + " " + rating + "  ",
        $('<button id="removeBtn">Remove</button>')
      )
    );

    $("span").on("click", "#removeBtn", function () {
      $(this).parent().remove();
    });
  });
});

// $(document).ready(function () {
//   $("button").on("click", function () {
//     let movie = $("#title").val();
//     let rating = $("#rating").val();

//     $("span").append(
//       $("<div>").append([
//         " " + movie + " " + rating,
//         $('<button id="removeBtn">Remove</button>'),
//       ])
//     );
//   });

//   $("span").on("click", "#removeBtn", function () {
//     $(this).parent().remove();
//   });
// });
