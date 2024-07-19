function filefolderbanao() {
  var fileform = document.querySelector(".fileform");
  var file = document.querySelector(".ri-file-line");
  var folderform = document.querySelector(".folderform");
  var folder = document.querySelector(".ri-folder-add-line");
  var fileevent = 0;
  var folderevent = 0;

  var close = () => {
    document.querySelectorAll(".form").forEach((form) => {
      // console.log(form);
      form.style.display = "none";
    });
  };

  file.addEventListener("click", () => {
    close();

    if (fileevent == 0) {
      fileform.style.display = "initial";

      fileevent = 1;
    } else {
      fileform.style.display = "none";

      fileevent = 0;
    }
  });

  folder.addEventListener("click", () => {
    close();

    if (folderevent == 0) {
      folderform.style.display = "initial";

      folderevent = 1;
    } else {
      folderform.style.display = "none";

      folderevent = 0;
    }
  });
}

filefolderbanao();

var editbutton = document.querySelector(".editbutton");
var popup = document.querySelector(".overlaymain");

editbutton.forEach((button) => {
  button.addEventListener("click", () => {
    popup.style.display = "flex";
    // console.log("Hua");
  });
});
