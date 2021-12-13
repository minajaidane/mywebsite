(() => {
  const app = {
    initialize () {
      this.cacheElements();
      this.hamburgerToggle();
      this.registerEventListeners();
      this.typer();
      this.backToTop();
    },
    cacheElements () {
      this.btnToTopElement = document.querySelector('.btn-to-top');
      this.navbar= document.querySelector('.nav__list');
      this.hamburger = document.querySelector('.hamburger')
      this.$scrolltotop = document.querySelector ("#scrollToTop")


    },
    hamburgerToggle () {
      if (this.hamburger !== null) {
          this.hamburger.addEventListener('click', (ev) => {
            this.hamburger.classList.toggle("on");
            this.navbar.classList.toggle("on");
          
        });
      }
    },
    registerEventListeners () {
      if (this.btnToTopElement !== null) {
        this.btnToTopElement.addEventListener('click', (ev) => {
          window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
          });
        });
      }
    },

    


     typer () {
      const words = ['Mina Jaidane.', 'Digital Marketeer.', 'UI-UX Designer.','Eventmanager'];
      let counter = 0;
      let index = 0;
      let currentWord = '';
      let letter = '';
  
      function delay(n) {
          return new Promise(function (resolve) {
              setTimeout(resolve, n * 1000);
          })
      }
  
      (async function type() {
          if (counter === words.length) {
              counter = 0;
          };
          currentWord = words[counter];
          letter = currentWord.slice(0, ++index);
          const typerContainer = document.querySelector('.typer');
          typerContainer.innerHTML = letter;
          if (letter.length === currentWord.length) {
              counter++;
              index = 0;
              await delay(0.2);
          };
          setTimeout(type, 150);
      }());
  },


  backToTop (){
    this.$scrolltotop.addEventListener('click',(evt)=> {
      window.scrollTo({
        top:0,
        left:0,
        behavior: "smooth"
      });
    })
  },
  };
  app.initialize();
})();
