// js for clock and time fucntionality
function updateClock() {
    const now = new Date();
    const options = {
      year: 'numeric',
      month: 'long',    // "April"
      day: 'numeric',   // "6"
      hour: 'numeric',  // "2"
      minute: '2-digit',
      hour12: true      // "pm"
    };
    const formatted = now.toLocaleString('en-US', options);
    document.getElementById('clock').textContent = formatted;
  }

  updateClock();
  setInterval(updateClock, 1000);

  // // loading screen script
  window.onload = function() {
    // Only when everything is actually loaded
    document.getElementById('loading_screen').style.display = 'none';
    document.getElementById('main-content').style.display = 'block';
  };
  

  // theree bar funcntionality script
  threebar.onclick = function() {
    if(threebar.classList.contains('fa-bars')) {
      threebar.classList.remove('fa-bars');
      threebar.classList.add('fa-xmark');
    }
    else {
      threebar.classList.remove('fa-xmark');
      threebar.classList.add('fa-bars');
    }
  
  
  }




  threebar.addEventListener("click", () => {
 
    menu_and_adresss.classList.toggle("menu_and_adress2");
    menuu.classList.toggle("menu2");
   
  });



  // script for typing text in main screen
   const items = [
      "Computers.",
      "CCTV.",
      "Mobile CCTV.",
      "Aerial Cameras.",
      "GPS.",
      "Epabax.",
      "Networking Wireless.",
      "Networking Wired.",
      "Electric items.",
      "PRI Solutions.",
      "UPS.",
      "P.A Equipments.",
      "Batteries.",
      "Gym Equipment’s.",
      "Sports Items.",
      "Stationery.",
      "Inverters.",
      "Paints.",
      "Hardware.",
      "Interiors.",
      "Furniture.",
      "Construction."
    ];

    let i = 0;
    let j = 0;
    let isDeleting = false;
    const speed = 80;
    const pause = 1000;
    const typedText = document.getElementById('typed-text');

    function typeLoop() {
      const current = items[i];
      if (isDeleting) {
        typedText.textContent = current.substring(0, j--);
      } else {
        typedText.textContent = current.substring(0, j++);
      }

      if (!isDeleting && j === current.length) {
        isDeleting = true;
        setTimeout(typeLoop, pause);
      } else if (isDeleting && j === 0) {
        isDeleting = false;
        i = (i + 1) % items.length;
        setTimeout(typeLoop, 300);
      } else {
        setTimeout(typeLoop, isDeleting ? speed / 2 : speed);
      }
    }

    document.addEventListener('DOMContentLoaded', typeLoop);



    // seemore script
    seemore.addEventListener("click", () => {
      
        qualified_boxes_seemore1.classList.toggle("seemoredisplay2");
        qualified_boxes_seemore2.classList.toggle("seemoredisplay2");
        qualified_boxes_seemore3.classList.toggle("seemoredisplay2");
        qualified_boxes_seemore4.classList.toggle("seemoredisplay2");
        qualified_boxes_seemore5.classList.toggle("seemoredisplay2");
        qualified_boxes_seemore6.classList.toggle("seemoredisplay2");
        qualified_boxes_seemore7.classList.toggle("seemoredisplay2");
        qualified_boxes_seemore8.classList.toggle("seemoredisplay2");
        qualified_boxes_seemore9.classList.toggle("seemoredisplay2");
        qualified_boxes_seemore10.classList.toggle("seemoredisplay2");
        qualified_boxes_seemore11.classList.toggle("seemoredisplay2");
        qualified_boxes_seemore12.classList.toggle("seemoredisplay2");
        qualified_boxes_seemore13.classList.toggle("seemoredisplay2");
        qualified_boxes_seemore14.classList.toggle("seemoredisplay2");
        qualified_boxes_seemore15.classList.toggle("seemoredisplay2");
        qualified_boxes_seemore16.classList.toggle("seemoredisplay2");
        qualified_boxes_seemore17.classList.toggle("seemoredisplay2");
        qualified_boxes_seemore18.classList.toggle("seemoredisplay2");
       if (seemore.innerHTML.includes("See more")) {
      seemore.innerHTML = `See less <i class="fa-solid fa-arrow-up" style="color: #394054;"></i>`;
    } else {
      seemore.innerHTML = `See more <i class="fa-solid fa-arrow-right-long" style="color: #394054;"></i>`;
    }


        
      
 
      
     
  });