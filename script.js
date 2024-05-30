// $(document).ready(function () {
//     var trigger = $('.hamburger'),
//         overlay = $('.overlay'),
//        isClosed = false;
  
//       trigger.click(function () {
//         hamburger_cross();      
//       });
  
//       function hamburger_cross() {
  
//         if (isClosed == true) {          
//           overlay.hide();
//           trigger.removeClass('is-open');
//           trigger.addClass('is-closed');
//           isClosed = false;
//         } else {   
//           overlay.show();
//           trigger.removeClass('is-closed');
//           trigger.addClass('is-open');
//           isClosed = true;
//         }
//     }
    
//     $('[data-toggle="offcanvas"]').click(function () {
//           $('#wrapper').toggleClass('toggled');
//     });  
//   });

const accordionItemHeaders = document.querySelectorAll(
	".accordion-item-header",
);

accordionItemHeaders.forEach((accordionItemHeader) => {
	accordionItemHeader.addEventListener("click", (event) => {
		accordionItemHeader.classList.toggle("active");
		const accordionItemBody = accordionItemHeader.nextElementSibling;
		if (accordionItemHeader.classList.contains("active")) {
			accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
		} else {
			accordionItemBody.style.maxHeight = 0;
		}
	});
});