document.getElementById("submit-btn").addEventListener("click", evaluateQuiz);

function evaluateQuiz() {
  let score = 0;

  const correctAnswers = {
    q1: "Mars",
    q2: "Tokyo",
  };

  const quizForm = document.getElementById("quiz-form");
  for (let question in correctAnswers) {
    const userAnswer = quizForm[question].value;
    if (userAnswer === correctAnswers[question]) {
      score++;
    }
  }

  alert(`You scored ${score}/${Object.keys(correctAnswers).length}!`);
}

//color change project


//shopping cart project
document.addEventListener('DOMContentLoaded', () => {
    const cartItems = document.querySelectorAll('.card'); // All product cards
    const totalPriceElement = document.querySelector('.total'); // Total price display
  
    // Update the total price
    function updateTotalPrice() {
      let total = 0;
  
      cartItems.forEach(item => {
        const price = parseFloat(item.querySelector('.unit-price').textContent.replace('$', '').trim());
        const quantity = parseInt(item.querySelector('.quantity').textContent.trim());
  
        total += price * quantity;
      });
  
      totalPriceElement.textContent = `${total.toFixed(2)} $`;
    }
  
    // Loop through all products to attach event listeners
    cartItems.forEach(item => {
      const quantityDisplay = item.querySelector('.quantity');
      const plusButton = item.querySelector('.fa-plus-circle');
      const minusButton = item.querySelector('.fa-minus-circle');
      const deleteButton = item.querySelector('.fa-trash-alt');
      const likeButton = item.querySelector('.fa-heart');
      const unitPrice = item.querySelector('.unit-price').textContent.trim();
  
      // Handle the + button
      plusButton.addEventListener('click', () => {
        let currentQuantity = parseInt(quantityDisplay.textContent);
        quantityDisplay.textContent = currentQuantity + 1;
        updateTotalPrice();
      });
  
      // Handle the - button
      minusButton.addEventListener('click', () => {
        let currentQuantity = parseInt(quantityDisplay.textContent);
        if (currentQuantity > 0) {
          quantityDisplay.textContent = currentQuantity - 1;
          updateTotalPrice();
        }
      });
  
      // Handle the delete button (trash)
      deleteButton.addEventListener('click', () => {
        item.remove();
        updateTotalPrice();
      });
  
      // Handle the like button (heart)
      likeButton.addEventListener('click', () => {
        if (likeButton.classList.contains('liked')) {
          likeButton.classList.remove('liked');
          likeButton.style.color = 'black'; // Reset heart color
        } else {
          likeButton.classList.add('liked');
          likeButton.style.color = 'red'; // Change heart color to red
        }
      });
    });
  
    // Initialize the total price when the page loads
    updateTotalPrice();
  });
  