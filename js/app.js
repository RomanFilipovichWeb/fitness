		/* Modal */

		document.addEventListener('DOMContentLoaded', function() {

		   var modalButtons = document.querySelectorAll('.js-open-modal'),
		       overlay      = document.querySelector('.js-overlay-modal'),
		       closeButtons = document.querySelectorAll('.js-modal-close');


		   modalButtons.forEach(function(item){

		      item.addEventListener('click', function(e) {

		         e.preventDefault();

		         var modalId = this.getAttribute('data-modal'),
		             modalElem = document.querySelector('.modal[data-modal="' + modalId + '"]');

		         modalElem.classList.add('active');
		         overlay.classList.add('active');
		      });

		   });

		   closeButtons.forEach(function(item){

		      item.addEventListener('click', function(e) {
		         var parentModal = this.closest('.modal');

		         parentModal.classList.remove('active');
		         overlay.classList.remove('active');
		      });

		   });

		    document.body.addEventListener('keyup', function (e) {
		        var key = e.keyCode;

		        if (key == 27) {

		            document.querySelector('.modal.active').classList.remove('active');
		            document.querySelector('.overlay').classList.remove('active');
		        };
		    }, false);

		    overlay.addEventListener('click', function() {
		        document.querySelector('.modal.active').classList.remove('active');
		        this.classList.remove('active');
		    });
		})

		/* Navbar*/

		const toggleBurger = document.getElementsByClassName(
			'toggle-button')[0]
			const navbarLinks = document.getElementsByClassName(
				'navbar-link')[0]
		toggleBurger.addEventListener("click", () => {
			toggleBurger.classList.toggle("active");
			navbarLinks.classList.toggle("active");
		})


		/* Scroll Header */

		window.addEventListener("scroll", function() {
			let header = document.querySelector(".header");
			header.classList.toggle("sticky", window.scrollY > 0);
		})

		/* Animation */

		const the_animation = document.querySelectorAll('.animation')

		const observer = new IntersectionObserver((entries) => {
		    entries.forEach((entry) => {
		        if (entry.isIntersecting) {
		            entry.target.classList.add('scroll-animation')
		        }
		        
		    })
		},
		   { threshold: 0.5
		   });
				 
		 for (let i = 0; i < the_animation.length; i++) {
		   const elements = the_animation[i];

		    observer.observe(elements);
		  } 
