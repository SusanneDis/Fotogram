
let mclarenImgs = [

  "1-mclaren-765-lt-spider-orange-front-wing-doors.jpg",
  "2-mclaren-765-lt-spider-orange-front-wing-doors2.jpg",
  "3-mclaren-765-lt-spider-orange-exhaust-2.jpg",
  "4-mclaren-765-lt-spider-orange-long-shot-side.jpg",
  "5-mclaren-765-lt-spider-orange-rear-3.jpg",
  "6-mclaren-765-lt-spider-orange-steering-wheel.jpg",
  "7-mclaren-765-lt-spider-orange-wheel-rim.jpg",
  "8-mclaren-765-lt-spider-orange-front-headlights.jpg",
  "9-mclaren-765-lt-spider-orange-front.jpg",
  "10-mclaren-765-lt-spider-orange-interior.jpg",
  "11-mclaren-765-lt-spider-orange-wing-door.jpg",
  "12-mclaren-765-lt-spider-orange-detail-brand.jpg",
  "13-mclaren-765-lt-spider-orange-detail-rear.jpg",
  "14-mclaren-765-lt-spider-orange-front-shot.jpg",
  "15-mclaren-765-lt-spider-orange-front-brand.jpg",
  "16-mclaren-765-lt-spider-orange-long-shot-2.jpg",
  "17-mclaren-765-lt-spider-orange-steering-wheel-detail.jpg",
  "18-mclaren-765-lt-spider-orange-wheel-rim-detail.jpg",
  "19-mclaren-765-lt-spider-orange-rear.jpg",
  "20-mclaren-765-lt-spider-orange-rear-2.jpg",
  "21-mclaren-765-lt-spider-orange-side-wing-doors.jpg",
];

/* Variablen und Referenzen*/

let openDialogRef = document.getElementById("openDialogRef");
let imageRef = document.getElementById("imageRef");
let currentIndex = 0;
let closeDialogBtn = document.getElementById('closeDialogRef');

/* Caroussel-Index*/

function showImage(index) {
  if (index < 0) {
    currentIndex = mclarenImgs.length - 1;
  } else if (index >= mclarenImgs.length) {
    currentIndex = 0;
  } else {
    currentIndex = index;
  }

  imageRef.innerHTML = renderCarouselHTML(currentIndex);
}

function renderCarouselHTML(index) {
  return `
    <img src="./img/${mclarenImgs[index]}" 
         alt="McLaren 765 LT Spider ${index + 1}" 
         class="dialog-img">
  `;
}

/* Öffnen des Dialogs*/

function openDialog(index) {
  showImage(index);
  openDialogRef.showModal();
}

/*Klicken ausserhalb des Dialogs -> Dialog schliessen*/

openDialogRef.addEventListener("click", (e) => {
  if (e.target === openDialogRef) {
    openDialogRef.close();
  }
});

/* Schliessen des Dialogs über HTML Entity: X*/

function closeDialog() {
  openDialogRef.close();
}




