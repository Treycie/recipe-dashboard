const allSideMenu = document.querySelectorAll('#sidebar .side-menu.top li a');

allSideMenu.forEach(item=> {
	const li = item.parentElement;

	item.addEventListener('click', function () {
		allSideMenu.forEach(i=> {
			i.parentElement.classList.remove('active');
		})
		li.classList.add('active');
	})
});




// TOGGLE SIDEBAR
const menuBar = document.querySelector('#content nav .bx.bx-menu');
const sidebar = document.getElementById('sidebar');

menuBar.addEventListener('click', function () {
	sidebar.classList.toggle('hide');
})







const searchButton = document.querySelector('#content nav form .form-input button');
const searchButtonIcon = document.querySelector('#content nav form .form-input button .bx');
const searchForm = document.querySelector('#content nav form');

searchButton.addEventListener('click', function (e) {
	if(window.innerWidth < 576) {
		e.preventDefault();
		searchForm.classList.toggle('show');
		if(searchForm.classList.contains('show')) {
			searchButtonIcon.classList.replace('bx-search', 'bx-x');
		} else {
			searchButtonIcon.classList.replace('bx-x', 'bx-search');
		}
	}
})





if(window.innerWidth < 768) {
	sidebar.classList.add('hide');
} else if(window.innerWidth > 576) {
	searchButtonIcon.classList.replace('bx-x', 'bx-search');
	searchForm.classList.remove('show');
}


window.addEventListener('resize', function () {
	if(this.innerWidth > 576) {
		searchButtonIcon.classList.replace('bx-x', 'bx-search');
		searchForm.classList.remove('show');
	}
})



const switchMode = document.getElementById('switch-mode');

switchMode.addEventListener('change', function () {
	if(this.checked) {
		document.body.classList.add('dark');
	} else {
		document.body.classList.remove('dark');
	}
})

// Function to handle the click event for the "Remove" button
function handleRemoveButtonClick(event) {
	// Get the parent element of the button (recipe-card)
	var recipeCard = event.target.closest('.recipe-card');
	
	// Check if the recipeCard element exists
	if (recipeCard) {
	  // Remove the recipe-card from the DOM
	  recipeCard.remove();
	}
  }
  
  // Function to handle the click event for the "Save" button
  function handleSaveButtonClick(event) {
	// Get the parent element of the button (recipe-card)
	var recipeCard = event.target.closest('.recipe-card');
	
	// Check if the recipeCard element exists
	if (recipeCard) {
	  // Perform the save operation (e.g., send a request to the server, update the database, etc.)
	  // You can add your own logic here
	  
	  // Add a visual indication that the recipe is saved (e.g., change the button text, add a class, etc.)
	  event.target.textContent = 'Saved'; // Example: Change the button text to "Saved"
	  event.target.disabled = true; // Example: Disable the button after it's clicked
	}
  }
  
  // Add click event listeners to the "Remove" buttons
  var removeButtons = document.querySelectorAll('.remove-btn');
  removeButtons.forEach(function(button) {
	button.addEventListener('click', handleRemoveButtonClick);
  });
  
  // Add click event listeners to the "Save" buttons
  var saveButtons = document.querySelectorAll('.save-btn');
  saveButtons.forEach(function(button) {
	button.addEventListener('click', handleSaveButtonClick);
  });