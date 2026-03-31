/**
 * Quiz Engine for Reading Thai Language Course
 * Handles multiple-choice questions with immediate feedback,
 * XP rewards, and badge system integration
 */

/**
 * Quiz state and configuration
 */
const QuizState = {
  currentChapterId: null,
  questions: [],
  shuffledQuestions: [],
  currentQuestionIndex: 0,
  correctAnswers: 0,
  language: (function() { try { return localStorage.getItem('quizLanguage') || 'de'; } catch(e) { return 'de'; } })(),
  isAnswered: false,
  isTransitioning: false,
};

/**
 * Fisher-Yates shuffle algorithm
 * @param {Array} array - Array to shuffle
 * @returns {Array} Shuffled copy of array
 */
function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

/**
 * Initialize quiz for a given chapter
 * @param {number} chapterId - Chapter ID to load questions from
 */
function initQuiz(chapterId) {
  // Reset quiz state
  QuizState.currentChapterId = chapterId;
  QuizState.currentQuestionIndex = 0;
  QuizState.correctAnswers = 0;
  QuizState.isAnswered = false;
  QuizState.isTransitioning = false;

  // Load questions from COURSE_DATA
  if (!window.COURSE_DATA || !window.COURSE_DATA.chapters) {
    console.error('COURSE_DATA not available');
    return;
  }

  const chapter = window.COURSE_DATA.chapters.find((ch) => ch.id === chapterId);
  if (!chapter || !chapter.quiz) {
    console.error(`No quiz data found for chapter ${chapterId}`);
    return;
  }

  // Get up to 10 questions and shuffle
  QuizState.questions = chapter.quiz.slice(0, 10);
  QuizState.shuffledQuestions = shuffleArray(QuizState.questions);

  // Shuffle answer options for each question
  QuizState.shuffledQuestions.forEach((question) => {
    if (question.options) {
      question.options = shuffleArray(question.options);
    }
  });

  renderQuestion();
}

/**
 * Render current question
 */
function renderQuestion() {
  const container = document.getElementById('quiz-container');
  if (!container) {
    console.error('quiz-container not found');
    return;
  }

  if (QuizState.currentQuestionIndex >= QuizState.shuffledQuestions.length) {
    renderResults();
    return;
  }

  const question = QuizState.shuffledQuestions[QuizState.currentQuestionIndex];
  const questionNumber = QuizState.currentQuestionIndex + 1;
  const totalQuestions = QuizState.shuffledQuestions.length;
  const progressPercent =
    (QuizState.currentQuestionIndex / totalQuestions) * 100;

  // Get question text in current language
  const questionText = getLocalizedText(question, 'question');
  const isGerman = QuizState.language === 'de';

  container.innerHTML = `
    <div class="quiz-wrapper">
      <div class="quiz-header">
        <div class="quiz-progress">
          <span class="quiz-counter">${questionNumber}/${totalQuestions}</span>
          <div class="progress-bar-container">
            <div class="progress-bar" style="width: ${progressPercent}%"></div>
          </div>
        </div>
        <button class="lang-toggle-btn" aria-label="Toggle language">
          ${isGerman ? '🇩🇪 Deutsch' : '🇬🇧 English'}
        </button>
      </div>

      <div class="quiz-content">
        <div class="quiz-question">
          <p class="question-text">${escapeHtml(questionText)}</p>
        </div>

        <div class="quiz-options">
          ${renderAnswerOptions(question)}
        </div>

        <div class="quiz-explanation hidden">
          <p class="explanation-text"></p>
        </div>
      </div>

      <div class="quiz-footer">
        <p class="quiz-hint">Tippe eine Antwort an</p>
      </div>
    </div>
  `;

  // Attach event listeners
  attachQuestionListeners(question);
}

/**
 * Render answer option buttons
 * @param {Object} question - Question object
 * @returns {string} HTML for answer options
 */
function renderAnswerOptions(question) {
  if (!question.options || question.options.length === 0) {
    return '<p>Keine Optionen verfügbar</p>';
  }

  return question.options
    .map((option, index) => {
      const optionText = getLocalizedText(option, 'text');
      return `
        <button
          class="option-button"
          data-index="${index}"
          data-correct="${option.correct || false}"
          aria-label="Option ${String.fromCharCode(65 + index)}: ${optionText}"
        >
          <span class="option-letter">${String.fromCharCode(65 + index)}</span>
          <span class="option-text">${escapeHtml(optionText)}</span>
        </button>
      `;
    })
    .join('');
}

/**
 * Get localized text from object
 * @param {Object} obj - Object with text in multiple languages
 * @param {string} field - Field name (question, text, etc.)
 * @returns {string} Localized text
 */
function getLocalizedText(obj, field) {
  const lang = QuizState.language;

  // Handle nested field access (e.g., "question.de")
  if (obj[`${field}_${lang}`]) {
    return obj[`${field}_${lang}`];
  }

  // Fallback to object with language keys
  if (obj[field]) {
    if (typeof obj[field] === 'object') {
      return obj[field][lang] || obj[field]['de'] || Object.values(obj[field])[0];
    }
    return obj[field];
  }

  return '';
}

/**
 * Escape HTML special characters
 * @param {string} text - Text to escape
 * @returns {string} Escaped text
 */
function escapeHtml(text) {
  if (!text) return '';
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

/**
 * Attach event listeners to question
 * @param {Object} question - Question object
 */
function attachQuestionListeners(question) {
  const optionButtons = document.querySelectorAll('.option-button');

  optionButtons.forEach((button) => {
    button.addEventListener('click', () => handleAnswer(button, question));
  });

  const langToggle = document.querySelector('.lang-toggle-btn');
  if (langToggle) {
    langToggle.addEventListener('click', toggleLanguage);
  }
}

/**
 * Toggle between German and English
 */
function toggleLanguage() {
  QuizState.language = QuizState.language === 'de' ? 'en' : 'de';
  try { localStorage.setItem('quizLanguage', QuizState.language); } catch(e) {}

  // Re-shuffle options with new language (keep same order)
  renderQuestion();
}

/**
 * Handle answer selection
 * @param {HTMLElement} button - Clicked option button
 * @param {Object} question - Question object
 */
function handleAnswer(button, question) {
  if (QuizState.isAnswered || QuizState.isTransitioning) {
    return;
  }

  QuizState.isAnswered = true;
  const isCorrect = button.dataset.correct === 'true';

  if (isCorrect) {
    // Correct answer
    QuizState.correctAnswers++;
    button.classList.add('correct');
    button.insertAdjacentHTML('afterbegin', '✅ ');

    // Award XP
    if (window.addXP) {
      window.addXP(10);
    }

    const hint = document.querySelector('.quiz-hint');
    if (hint) {
      hint.textContent = 'Richtig! 🎉';
    }

    autoAdvance();
  } else {
    // Wrong answer
    button.classList.add('wrong');
    button.insertAdjacentHTML('afterbegin', '❌ ');

    // Show correct answer
    const correctButton = document.querySelector(
      '[data-correct="true"]'
    );
    if (correctButton) {
      correctButton.classList.add('show-correct');
      correctButton.insertAdjacentHTML('afterbegin', '✅ ');
    }

    // Show explanation
    const explanation = question[`explanation_${QuizState.language}`] ||
      question.explanation_de ||
      question.explanation || '';
    const explanationDiv = document.querySelector('.quiz-explanation');
    const explanationText = document.querySelector('.explanation-text');

    if (explanationDiv && explanationText && explanation) {
      explanationText.textContent = explanation;
      explanationDiv.classList.remove('hidden');
    }

    const hint = document.querySelector('.quiz-hint');
    if (hint) {
      hint.textContent = 'Falsch. Tippe zum Fortfahren';
    }

    autoAdvance();
  }

  // Disable all other buttons
  document
    .querySelectorAll('.option-button')
    .forEach((btn) => {
      btn.disabled = true;
    });
}

/**
 * Auto-advance to next question after delay
 */
function autoAdvance() {
  QuizState.isTransitioning = true;

  const nextButton = document.querySelector('.quiz-wrapper');
  if (nextButton) {
    nextButton.style.cursor = 'pointer';
  }

  const advanceFunction = () => {
    QuizState.currentQuestionIndex++;
    QuizState.isAnswered = false;
    QuizState.isTransitioning = false;
    renderQuestion();
  };

  // Allow user to tap to continue immediately
  const container = document.getElementById('quiz-container');
  if (container) {
    container.addEventListener('click', advanceFunction, { once: true });
  }

  // Auto-advance after 1.5 seconds
  setTimeout(() => {
    if (QuizState.isTransitioning) {
      QuizState.isTransitioning = false;
      advanceFunction();
    }
  }, 1500);
}

/**
 * Render results screen
 */
function renderResults() {
  const container = document.getElementById('quiz-container');
  if (!container) return;

  const totalQuestions = QuizState.shuffledQuestions.length;
  const passed = QuizState.correctAnswers >= 7;
  const isPerfect = QuizState.correctAnswers === 10;
  const percentage = Math.round(
    (QuizState.correctAnswers / totalQuestions) * 100
  );

  // Calculate XP rewards
  let xpReward = 0;
  if (passed) {
    xpReward = 50;
    if (isPerfect) {
      xpReward = 100;
    }
  }

  // Award XP
  if (window.addXP && xpReward > 0) {
    window.addXP(xpReward);
  }

  // Determine badge
  let badge = null;
  let badgeEmoji = '';
  if (passed && window.awardBadge) {
    badge = `quiz_chapter_${QuizState.currentChapterId}`;
    if (isPerfect && window.awardBadge) {
      badge = `quiz_perfect_${QuizState.currentChapterId}`;
      badgeEmoji = '🏆';
    } else {
      badgeEmoji = '⭐';
    }
    window.awardBadge(badge);
  }

  const resultHTML = `
    <div class="quiz-results">
      <div class="results-card">
        <div class="results-header">
          <h2 class="results-title">
            ${passed ? 'Bestanden! 🎉' : 'Nicht bestanden 😔'}
          </h2>
        </div>

        <div class="results-score">
          <div class="score-display">
            <span class="score-number">${QuizState.correctAnswers}</span>
            <span class="score-slash">/</span>
            <span class="score-total">${totalQuestions}</span>
          </div>
          <div class="score-percentage">${percentage}%</div>
        </div>

        ${
          passed
            ? `
          <div class="results-badge">
            <span class="badge-emoji">${badgeEmoji}</span>
            <p class="badge-text">
              ${isPerfect ? 'Perfekt!' : 'Gut gemacht!'}
            </p>
          </div>
        `
            : ''
        }

        <div class="results-xp ${xpReward > 0 ? 'earned' : ''}">
          <p class="xp-text">
            ${xpReward > 0 ? `+${xpReward} XP verdient` : 'Versuche es nächstes Mal erneut!'}
          </p>
        </div>

        <div class="results-feedback">
          <p class="feedback-text">
            ${getFeedbackText(QuizState.correctAnswers, totalQuestions)}
          </p>
        </div>

        <div class="results-actions">
          <button class="btn btn-primary" id="retry-quiz-btn">
            Quiz wiederholen
          </button>
          <button class="btn btn-secondary" id="back-to-chapter-btn">
            Zurück zum Kapitel
          </button>
        </div>
      </div>
    </div>
  `;

  container.innerHTML = resultHTML;

  // Attach event listeners
  const retryBtn = document.getElementById('retry-quiz-btn');
  if (retryBtn) {
    retryBtn.addEventListener('click', () => {
      initQuiz(QuizState.currentChapterId);
    });
  }

  const backBtn = document.getElementById('back-to-chapter-btn');
  if (backBtn) {
    backBtn.addEventListener('click', () => {
      // Trigger tab switch or navigate back
      if (window.switchTab) {
        window.switchTab(2); // Or appropriate tab number
      }
    });
  }
}

/**
 * Get feedback text based on score
 * @param {number} correct - Number of correct answers
 * @param {number} total - Total questions
 * @returns {string} Feedback text
 */
function getFeedbackText(correct, total) {
  const percentage = (correct / total) * 100;

  if (percentage === 100) {
    return 'Ausgezeichnet! Du hast alle Fragen richtig beantwortet!';
  } else if (percentage >= 80) {
    return 'Sehr gut! Du hast die meisten Fragen richtig beantwortet.';
  } else if (percentage >= 70) {
    return 'Gut! Du hast die Prüfung bestanden, aber es gibt noch Raum für Verbesserungen.';
  } else if (percentage >= 50) {
    return 'Nicht ganz. Versuche, die Themen erneut zu überprüfen.';
  } else {
    return 'Lass dich nicht entmutigen! Wiederhole das Kapitel und versuche es erneut.';
  }
}

/**
 * Public API for quiz initialization
 * Called when user clicks on Quiz tab
 * @param {number} chapterId - Chapter ID
 */
window.startQuiz = function (chapterId) {
  initQuiz(chapterId);
};

/**
 * Public API to get quiz state
 * @returns {Object} Current quiz state
 */
window.getQuizState = function () {
  return { ...QuizState };
};

// Export for testing (if using modules)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    initQuiz,
    shuffleArray,
    getLocalizedText,
    escapeHtml,
  };
}
