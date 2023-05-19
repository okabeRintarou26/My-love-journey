window.addEventListener('load', () => {
  const btn = document.querySelector("#btn");
  const img = document.querySelector(".img-con");
  const s = document.querySelector(".stop");
  const stopBtn = document.querySelector("#stopbtn");
  const audio = document.querySelector('#audio');
  const reload = document.querySelector("#reload");
  let count = 0;

  // Confirmation alert
  const q = "Do you want to enter?\n(Press \"Ok\" if you want  \"Cancel\" if you don't)";
  if (confirm(q) == true) {
    // Typing script
    const typed = new Typed(".typing", {
      strings: ["  "],
      typeSpeed: 45,
      backSpeed: 30, 
      startDelay: 17000,
      loop: true
    });
    const typed2 = new Typed(".typing2", {
      strings: ["Hallo sayaangg", "Aku sangat mencintaimu", "Ku harap ini dapat tersampaikan", "Tekan tombol yang bawah ya🥰"],
      typeSpeed: 100,
      backSpeed: 40,
      startDelay: 1000,
      loop: false
    });

    // Image
    const kalog = document.querySelector("#kalog");
    const images = ['kalog/image1.jpeg', 'kalog/image2.jpeg', 'kalog3.jpeg', 'kalog/image4.jpeg', 'kalog/image5.jpeg', 'kalog/image6.jpeg', 'kalog/image7.jpeg', 'kalog/image8.jpeg', 'kalog/image9.jpeg', 'kalog/image10.jpeg', 'kalog/image11.jpeg', 'kalog/image12.jpeg','kalog/image13.jpeg', 'kalog/image14.jpeg','kalog/image15.jpeg', 'kalog/image16.jpeg', 'kalog/image17.jpeg', 'kalog/image18.jpeg', 'kalog/image19.jpeg','kalog/image20.jpeg', 'kalog/image21.jpeg', 'kalog/image22.jpeg', 'kalog/image23.jpeg'];
    const cover = document.querySelector('#cv');

    // Show button
    setTimeout(showBtn, 15000);
    function showBtn() {
      if (btn.classList.contains("hide")) {
        btn.classList.add("show");
        btn.classList.remove("hide");
      } else {
        btn.classList.add("hide");
        btn.classList.remove("show");
      }
    }

    const hiding = {
      getPicShow() {
        if (btn.innerHTML === "Show Message &#9658;") {
          btn.innerHTML = "Hide Message &#9208;";
        } else {
          btn.innerHTML = "Show Message &#9658;";
        }
        if (img.classList.contains("hide")) {
          img.classList.add("show");
          img.classList.remove("hide");
        } else {
          img.classList.add("hide");
          img.classList.remove("show");
        }
      },
      getBtnShow() {
        if (s.classList.contains("hide")) {
          s.classList.add("show");
          s.classList.remove("hide");
        } else {
          s.classList.add("hide");
          s.classList.remove("show");
        }
      },
      getAudio() {
        if (count === 0) {
          count = 1;
          audio.play();
          btn.innerHTML = "Hide Message &#9208;";
        } else {
          count = 0;
          audio.pause();
          btn.innerHTML = "Show Message &#9658;";
        }
      },
    };

    // 1st button
    btn.addEventListener('click', () => {
      hiding.getPicShow();
      hiding.getBtnShow();
      hiding.getAudio();
      setInterval(() => {
        const random = Math.floor(Math.random() * 23);
        const url = images[random];
        if (kalog.src === undefined) {
          kalog.src = "kalog/image1.jpeg";
        } else {
          kalog.src = url;
          cover.style.backgroundImage = `url(${url})`;
        }
      }, 3000);
    });

    // Stop button for audio
    stopBtn.addEventListener('click', () => {
      hiding.getAudio();
      audio.pause();
      audio.currentTime = 0;
      hiding.getPicShow();
      hiding.getBtnShow();
      btn.innerHTML = "Show Message &#9658;";
    });
  } else {
    document.querySelector(".msg").innerHTML = "<h4>Unfortunately, this page was not able to be loaded,<br/>still Thank you for taking the time to visit my simple webpage.</h4><br/><br/><h5>Try to press \"Reload\" and press \"Ok\".</h5>";
    if (reload.classList.contains("hide")) {
      reload.classList.add("show");
      reload.classList.remove("hide");
    } else {
      reload.classList.add("hide");
      reload.classList.remove("show");
    }
    reload.addEventListener('click', () => {
      location.reload();
    });
    return false;
  }
});
