const eduData = [
  { logo: "image\icon\binus.png", name: "Binus University", major: "Computer Science major" },
  { logo: "image\icon\mgs.png", name: "SMA Mahatma Gading", major: "Science Major" },
  { logo: "image\icon\mgs.png", name: "SMP Mahatma Gading", major: "Junior High School" }
];

let currentEdu = 0;

function updateEdu() {
  const eduLogo = document.querySelector(".edu-logo");
  const eduName = document.querySelector(".edu-text h3");
  const eduMajor = document.querySelector(".edu-text p");

  eduLogo.src = eduData[currentEdu].logo;
  eduName.textContent = eduData[currentEdu].name;
  eduMajor.textContent = eduData[currentEdu].major;
}

function nextEdu() {
  currentEdu = (currentEdu + 1) % eduData.length;
  updateEdu();
}

function prevEdu() {
  currentEdu = (currentEdu - 1 + eduData.length) % eduData.length;
  updateEdu();
}

// init pas pertama kali load
updateEdu();

