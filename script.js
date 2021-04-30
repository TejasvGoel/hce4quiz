const startButton = document.getElementById('start-btn')
const explain1 = document.getElementById('answer1')
const endButton = document.getElementById('end-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const endContainerElement = document.getElementById('end-container')
const answerContainerElement = document.getElementById('answer-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
const backgroundBodyElement =document.getElementById('bgbody')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
endButton.addEventListener('click', () => {
  window.open('https://www.hce4.com/subscribers', '_blank')
})
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
  /*console.log(shuffledQuestions[currentQuestionIndex].urls)*/
  backgroundBodyElement.style.backgroundImage = "url('" + shuffledQuestions[currentQuestionIndex].urls + "')"
  })


function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - 0)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
  backgroundBodyElement.style.backgroundImage = "url('" + shuffledQuestions[0].urls + "')"
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
     

}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  explain1.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })

  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
    explain1.innerText = shuffledQuestions[currentQuestionIndex].explanation
    explain1.classList.remove('hide')
    
  } else {
    endButton.innerText = 'Thank you for taking our quiz\nSubscribe to our Newsletter'
    endButton.classList.remove('hide')
    explain1.innerText = shuffledQuestions[currentQuestionIndex].explanation
    explain1.classList.remove('hide')
    
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

/*const urls = [
  "https://images.pexels.com/photos/5740845/pexels-photo-5740845.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  "https://images.pexels.com/photos/5704788/pexels-photo-5704788.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  "https://images.pexels.com/photos/2698539/pexels-photo-2698539.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  "https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
] */

const questions = [
  {
    question: 'What do you think you should put at the heart of your business in the 4th Industrial Revolution?',
    answers: [
      { text: 'Profits', correct: false },
      { text: 'New Technologies', correct: false },
      { text: 'Human Connection', correct: true},
      { text: 'Natural Resources', correct: false}
    ],
    explanation : "Human Connection is essential. At the heart of your company the human connection represents the fourth level of Maslow’s Hierarchy of needs, Esteem. It goes hand in hand with the New Technologies 4.0",
    urls : "https://images.unsplash.com/photo-1556484687-30636164638b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80"
  },
  {
    question: 'Where are the HCE 4 services available?',
    answers: [
      { text: 'Europe', correct: false },
      { text: 'North America', correct: false },
      { text: 'Asia', correct: false },
      { text: 'Everywhere', correct: true }
    ],
    explanation : "The 4th Industrial Revolution does not know borders and neither do we. As an international business, we provide services that reach all over the world",
    urls : "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1633&q=80"
  },
  {
    question: 'What do you think are the new Technologies?',
    answers: [
      { text: 'Biotechnology', correct: false },
      { text: 'Humanoid Robots', correct: false },
      { text: 'Atrificial Intelligence', correct: false },
      { text: 'All of the above', correct: true }
    ],
    explanation : "The Fourth Industrial Revolution is based on New Technologies 4.0, such as Artificial Intelligence, Biotechnologies, Humanoid Robots, etc",
    urls : "https://images.unsplash.com/photo-1535378620166-273708d44e4c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1166&q=80"

    /* robot playing piano - https://images.unsplash.com/photo-1516110833967-0b5716ca1387?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80*/
  },
   {
    question: 'Are you ready for the 4th industrial revolution?',
    answers: [
      { text: 'Yes', correct: true },
      { text: 'Absolutely Yes', correct: true },
      { text: '100% Yes', correct: true },
      { text: 'I am ready', correct: true }
    ],
    explanation : "Even if you do not feel ready yet, we are ready to guide you into the 4th Industrial Revolution",
    urls : "https://images.pexels.com/photos/327540/pexels-photo-327540.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
  }
  
]
