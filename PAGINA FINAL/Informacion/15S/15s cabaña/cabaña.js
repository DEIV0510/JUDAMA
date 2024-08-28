const faqQuestions = document.querySelectorAll('.faq-question');
const faqAnswers = document.querySelectorAll('.faq-answer');

faqQuestions.forEach((question) => {
  question.addEventListener('click', (e) => {
    const target = e.target.getAttribute('data-target');
    const answer = document.querySelector(target);
    answer.classList.toggle('active');
  });
});