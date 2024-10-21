			// Get the modal
			var modal = document.getElementById("productModal");

			// Get the button that opens the modal
			var btns = document.querySelectorAll(".product--details");

			// Get the <span> element that closes the modal
			var span = document.getElementsByClassName("close")[0];

			// When the user clicks the button, open the modal
			btns.forEach(btn => {
			  btn.onclick = function() {
			    modal.style.display = "block";
			    // Populate modal content based on the product details
			    var product = btn.closest(".product");
			    document.getElementById("modalProductImage").src = product.querySelector(".product--image").src;
			    document.getElementById("modalProductDescription").innerText = product.querySelector(".product--description").innerText;
			    document.getElementById("modalProductPrice").innerText = product.querySelector(".product--price").innerText;
			  };
			});

			// When the user clicks on <span> (x), close the modal
			span.onclick = function() {
			  modal.style.display = "none";
			};

			// When the user clicks anywhere outside of the modal, close it
			window.onclick = function(event) {
			  if (event.target == modal) {
			    modal.style.display = "none";
			  }
			};
		