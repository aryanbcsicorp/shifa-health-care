function navigate() {
    var selectElement = document.getElementById("pageSelect");
    var selectedPage = selectElement.options[selectElement.selectedIndex].value;
    if (selectedPage) {
      window.location.href = selectedPage;
    }
  }



  function service_navigate() {
    var selectElement = document.getElementById("pageSelect-service");
    var selectedPage = selectElement.options[selectElement.selectedIndex].value;
    if (selectedPage) {
      window.location.href = selectedPage;
    }
  }



  function segment_navigate() {
    var selectElement = document.getElementById("pageSelect-segment");
    var selectedPage = selectElement.options[selectElement.selectedIndex].value;
    if (selectedPage) {
      window.location.href = selectedPage;
    }
  }