function caricaSezione() {
    let url_str = window.location.href;
    // Controlla se nell'url c'e' la stringa "s1", o "s2", ...
    for (let i = 1; i < 10; i++) {
      if (url_str.includes("#s" + i)) {
        caricaImg(i);
        return;
      }
    }
    alert("Selezionare una sezione valida.");
  }

  function caricaImg(sezione) {
    for (let i = 1; i < 10; i++) {
      let elem_div = document.getElementById("s" + i + "_div");
      if (i === sezione) {
        elem_div.style.display = "block";
      }
      else {
        elem_div.setAttribute("style", "display: none");
      }
    }
  }