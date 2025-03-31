document.querySelectorAll('input[name="rating"]').forEach((star) => {
  star.addEventListener('change', function () {
    alert(`Você avaliou com ${this.value} estrela(s)!`);
  });
});



