function updateCountdown() {
  const now = new Date();
  
  const christmas = new Date(now.getFullYear(), 11, 25); // 25 diciembre
  const newYear = new Date(now.getFullYear() + 1, 0, 1); // 1 enero siguiente
  
  // Si ya pasó Navidad este año
  if (now > christmas) {
    christmas.setFullYear(christmas.getFullYear() + 1);
  }

  // Calcular diferencia
  function getTimeRemaining(targetDate) {
    const diff = targetDate - now;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);
    return `${days} días, ${hours} horas, ${minutes} minutos y ${seconds} segundos`;
  }

  document.getElementById('christmas').textContent = getTimeRemaining(christmas);
  document.getElementById('newyear').textContent = getTimeRemaining(newYear);
}

updateCountdown();
setInterval(updateCountdown, 1000);
