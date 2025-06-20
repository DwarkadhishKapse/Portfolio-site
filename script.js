
const navLinks = document.querySelectorAll('.nav_list a');

// Add click event listener to each link
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();  // Prevent default anchor behavior

        // Get the target section by its id
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        // Scroll to the target section smoothly
        targetSection.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// toggle operation for dark and light mode
const toggleBtn = document.getElementById('modeToggle');
toggleBtn.addEventListener('click', function(){
  document.body.classList.toggle("dark-mode");

  //* Save mode in localStorage
  if(document.body.classList.contains("dark-mode")){
    localStorage.setItem("mode", "dark")
    toggleBtn.textContent = "🌚";
    toggleBtn.style.backgroundColor = "#333"; // dark background
    toggleBtn.style.color = "#fff";
  }else{
    localStorage.setItem("mode", "light");
    toggleBtn.textContent = "🌝";
    toggleBtn.style.backgroundColor = ""; // reset to default
    toggleBtn.style.color = "";
  }
});

