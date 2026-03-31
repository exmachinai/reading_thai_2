/**
 * Thai Language Course App - Core Logic
 * Handles: XP System, Badges, Levels, Streaks, and localStorage Management
 */

// ============================================================================
// CONFIGURATION & CONSTANTS
// ============================================================================

const XP_REWARDS = {
  FLASHCARD_VIEWED: 5,
  VOCAB_MCQ_CORRECT: 10,
  READING_TEXT_COMPLETE: 20,
  CHAPTER_QUIZ_PASSED: 50,
  CHAPTER_QUIZ_PERFECT: 100,
  DAILY_STREAK_BONUS: 25
};

const LEVELS = [
  { level: 1, name: 'Anfänger', minXP: 0, maxXP: 200, emoji: '🌱' },
  { level: 2, name: 'Schüler', minXP: 201, maxXP: 500, emoji: '📚' },
  { level: 3, name: 'Leser', minXP: 501, maxXP: 1000, emoji: '📖' },
  { level: 4, name: 'Sprecher', minXP: 1001, maxXP: 2000, emoji: '🗣️' },
  { level: 5, name: 'Experte', minXP: 2001, maxXP: Infinity, emoji: '🏆' }
];

const BADGE_EMOJIS = {
  ch01: '👨‍👩‍👧',
  ch02: '🎮',
  ch03: '💼',
  ch04: '📅',
  ch05: '🛒',
  ch06: '📦',
  ch07: '🚇',
  ch08: '🛕',
  ch09: '🐱',
  ch10: '🏘️',
  ch11: '🏢',
  ch12: '🙏',
  ch13: '🎉',
  ch14: '🛍️',
  ch15: '🏮',
  ch16: '👃',
  ch17: '☀️',
  ch18: '🦷',
  ch19: '✈️',
  ch20: '🔒'
};

// ============================================================================
// LOCALSTORAGE WRAPPER WITH ERROR HANDLING
// ============================================================================

/**
 * Safely get value from localStorage
 * @param {string} key
 * @param {*} defaultValue
 * @returns {*}
 */
function getFromStorage(key, defaultValue = null) {
  try {
    const item = localStorage.getItem(key);
    return item !== null ? item : defaultValue;
  } catch (error) {
    console.warn(`Error reading from localStorage (${key}):`, error);
    return defaultValue;
  }
}

/**
 * Safely set value in localStorage
 * @param {string} key
 * @param {*} value
 * @returns {boolean} Success status
 */
function setToStorage(key, value) {
  try {
    localStorage.setItem(key, String(value));
    return true;
  } catch (error) {
    console.warn(`Error writing to localStorage (${key}):`, error);
    return false;
  }
}

/**
 * Safely remove value from localStorage
 * @param {string} key
 * @returns {boolean} Success status
 */
function removeFromStorage(key) {
  try {
    localStorage.removeItem(key);
    return true;
  } catch (error) {
    console.warn(`Error removing from localStorage (${key}):`, error);
    return false;
  }
}

// ============================================================================
// XP SYSTEM
// ============================================================================

/**
 * Get total XP earned by user
 * @returns {number}
 */
function getXP() {
  return parseInt(getFromStorage('totalXP', 0));
}

/**
 * Add XP to user account (with duplication prevention)
 * @param {number} amount
 * @param {string} flagKey - Optional unique key to prevent double-counting
 * @returns {number} New total XP
 */
function addXP(amount, flagKey = null) {
  // Prevent double-counting if flagKey provided
  if (flagKey) {
    const alreadyCounted = getFromStorage(`xp_${flagKey}`, false);
    if (alreadyCounted === 'true') {
      console.log(`XP already awarded for: ${flagKey}`);
      return getXP();
    }
    setToStorage(`xp_${flagKey}`, 'true');
  }

  const currentXP = getXP();
  const newXP = currentXP + amount;
  setToStorage('totalXP', newXP);

  // Dispatch event for UI updates
  window.dispatchEvent(new CustomEvent('xpChanged', { detail: { xp: newXP, gained: amount } }));

  return newXP;
}

/**
 * Award XP for flashcard viewed
 * @param {string} cardId - Unique card identifier
 * @returns {number} XP awarded (0 if already counted)
 */
function awardFlashcardXP(cardId) {
  const flagKey = `xp_flashcard_${cardId}`;
  const alreadyCounted = getFromStorage(flagKey, false);

  if (alreadyCounted === 'true') return 0;

  return addXP(XP_REWARDS.FLASHCARD_VIEWED, flagKey);
}

/**
 * Award XP for vocabulary MCQ answered correctly
 * @param {string} questionId - Unique question identifier
 * @returns {number} New total XP
 */
function awardVocabMCQXP(questionId) {
  const flagKey = `xp_vocab_${questionId}`;
  return addXP(XP_REWARDS.VOCAB_MCQ_CORRECT, flagKey);
}

/**
 * Award XP for reading text fully read
 * @param {string} textId - Unique text identifier
 * @returns {number} New total XP
 */
function awardReadingXP(textId) {
  const flagKey = `xp_read_${textId}`;
  return addXP(XP_REWARDS.READING_TEXT_COMPLETE, flagKey);
}

/**
 * Award XP for chapter quiz completion
 * @param {string} chapterId - Chapter identifier (e.g., 'ch01')
 * @param {number} percentage - Quiz score percentage
 * @returns {number} New total XP
 */
function awardChapterQuizXP(chapterId, percentage) {
  const flagKey = `xp_quiz_${chapterId}`;
  const alreadyCounted = getFromStorage(flagKey, false);

  if (alreadyCounted === 'true') {
    console.log(`Quiz XP already awarded for: ${chapterId}`);
    return getXP();
  }

  let xpAwarded = 0;
  if (percentage === 100) {
    xpAwarded = XP_REWARDS.CHAPTER_QUIZ_PERFECT;
  } else if (percentage >= 70) {
    xpAwarded = XP_REWARDS.CHAPTER_QUIZ_PASSED;
  } else {
    console.log(`Quiz failed (${percentage}%), no XP awarded`);
    return getXP();
  }

  setToStorage(`xp_${flagKey}`, 'true');
  const newXP = getXP() + xpAwarded;
  setToStorage('totalXP', newXP);
  window.dispatchEvent(new CustomEvent('xpChanged', { detail: { xp: newXP, gained: xpAwarded } }));

  return newXP;
}

// ============================================================================
// LEVEL SYSTEM
// ============================================================================

/**
 * Get current user level info
 * @returns {Object} { level, name, minXP, maxXP, emoji, progress, nextLevelXP }
 */
function getLevel() {
  const totalXP = getXP();

  for (let i = LEVELS.length - 1; i >= 0; i--) {
    if (totalXP >= LEVELS[i].minXP) {
      const currentLevel = LEVELS[i];
      const nextLevel = i < LEVELS.length - 1 ? LEVELS[i + 1] : null;
      const xpInCurrentLevel = totalXP - currentLevel.minXP;
      const xpNeededForLevel = currentLevel.maxXP - currentLevel.minXP;
      const progress = Math.min(100, (xpInCurrentLevel / xpNeededForLevel) * 100);

      return {
        level: currentLevel.level,
        name: currentLevel.name,
        emoji: currentLevel.emoji,
        minXP: currentLevel.minXP,
        maxXP: currentLevel.maxXP,
        progress: Math.round(progress),
        nextLevelXP: nextLevel ? nextLevel.minXP : null,
        xpInCurrentLevel: xpInCurrentLevel,
        xpNeededForLevel: xpNeededForLevel
      };
    }
  }

  return {
    level: 1,
    name: 'Anfänger',
    emoji: '🌱',
    minXP: 0,
    maxXP: 200,
    progress: 0,
    nextLevelXP: 201,
    xpInCurrentLevel: 0,
    xpNeededForLevel: 200
  };
}

// ============================================================================
// STREAK SYSTEM
// ============================================================================

/**
 * Get current streak count
 * @returns {number}
 */
function getStreak() {
  return parseInt(getFromStorage('streak', 0));
}

/**
 * Update streak based on learning activity
 * Awards 25 XP bonus if streak increases
 */
function updateStreak() {
  try {
    const today = new Date().toDateString();
    const lastLearnDate = getFromStorage('lastLearnDate', null);
    const currentStreak = getStreak();

    // Already learned today, don't update
    if (lastLearnDate === today) {
      return currentStreak;
    }

    const yesterday = new Date(Date.now() - 86400000).toDateString();

    if (lastLearnDate === yesterday) {
      // Streak continues
      const newStreak = currentStreak + 1;
      setToStorage('streak', newStreak);
      setToStorage('lastLearnDate', today);
      addXP(XP_REWARDS.DAILY_STREAK_BONUS, `xp_streak_${today}`);
      window.dispatchEvent(new CustomEvent('streakChanged', { detail: { streak: newStreak } }));
      return newStreak;
    } else {
      // Streak broken, restart
      setToStorage('streak', 1);
      setToStorage('lastLearnDate', today);
      window.dispatchEvent(new CustomEvent('streakChanged', { detail: { streak: 1 } }));
      return 1;
    }
  } catch (error) {
    console.warn('Error updating streak:', error);
    return getStreak();
  }
}

/**
 * Reset streak manually (e.g., for testing or user request)
 */
function resetStreak() {
  setToStorage('streak', 0);
  removeFromStorage('lastLearnDate');
  window.dispatchEvent(new CustomEvent('streakChanged', { detail: { streak: 0 } }));
}

// ============================================================================
// BADGE SYSTEM
// ============================================================================

/**
 * Get all earned badges
 * @returns {Array} Array of chapter IDs with earned badges (e.g., ['ch01', 'ch03'])
 */
function getBadges() {
  const badgesStr = getFromStorage('badges', '');
  return badgesStr ? badgesStr.split(',') : [];
}

/**
 * Check if user has earned a specific badge
 * @param {string} chapterId - Chapter identifier (e.g., 'ch01')
 * @returns {boolean}
 */
function hasBadge(chapterId) {
  return getBadges().includes(chapterId);
}

/**
 * Award badge for chapter completion
 * @param {string} chapterId - Chapter identifier (e.g., 'ch01')
 * @returns {boolean} Success status
 */
function awardBadge(chapterId) {
  if (hasBadge(chapterId)) {
    console.log(`Badge already earned for: ${chapterId}`);
    return false;
  }

  const badges = getBadges();
  badges.push(chapterId);
  setToStorage('badges', badges.join(','));
  window.dispatchEvent(new CustomEvent('badgeEarned', { detail: { chapterId, emoji: BADGE_EMOJIS[chapterId] } }));

  return true;
}

/**
 * Get emoji for a chapter badge
 * @param {string} chapterId
 * @returns {string|null}
 */
function getBadgeEmoji(chapterId) {
  return BADGE_EMOJIS[chapterId] || null;
}

// ============================================================================
// CHAPTER PROGRESS TRACKING
// ============================================================================

/**
 * Get progress for a specific chapter
 * @param {string} chapterId - Chapter identifier (e.g., 'ch01')
 * @returns {Object} Progress data for chapter
 */
function getChapterProgress(chapterId) {
  const progressStr = getFromStorage(`progress_${chapterId}`, '{}');
  try {
    return JSON.parse(progressStr);
  } catch (error) {
    console.warn(`Error parsing chapter progress for ${chapterId}:`, error);
    return {};
  }
}

/**
 * Set progress for a chapter section
 * @param {string} chapterId - Chapter identifier
 * @param {string} section - Section name (e.g., 'flashcards', 'vocabulary', 'reading', 'quiz')
 * @param {*} value - Progress value (boolean, percentage, etc.)
 */
function setChapterProgress(chapterId, section, value) {
  try {
    const progress = getChapterProgress(chapterId);
    progress[section] = value;
    setToStorage(`progress_${chapterId}`, JSON.stringify(progress));
    window.dispatchEvent(new CustomEvent('progressChanged', { detail: { chapterId, section, value } }));
  } catch (error) {
    console.warn(`Error setting chapter progress for ${chapterId}:`, error);
  }
}

/**
 * Check if all sections of a chapter are completed
 * @param {string} chapterId
 * @returns {boolean}
 */
function isChapterComplete(chapterId) {
  const progress = getChapterProgress(chapterId);
  return progress.flashcards === true &&
         progress.vocabulary === true &&
         progress.reading === true &&
         progress.quiz === true;
}

/**
 * Mark a chapter as completed
 * @param {string} chapterId
 */
function completeChapter(chapterId) {
  setChapterProgress(chapterId, 'completed', true);
  awardBadge(chapterId);
}

// ============================================================================
// VOCABULARY TRACKING
// ============================================================================

/**
 * Get count of vocabulary words learned
 * @returns {number}
 */
function getVocabLearned() {
  const vocabStr = getFromStorage('vocabLearned', '');
  return vocabStr ? vocabStr.split(',').length : 0;
}

/**
 * Mark a vocabulary word as learned
 * @param {string} word - The Thai word
 * @param {string} definition - Word definition
 */
function markVocabLearned(word, definition = '') {
  try {
    const learned = getFromStorage('vocabLearned', '');
    const wordList = learned ? learned.split(',') : [];

    if (!wordList.includes(word)) {
      wordList.push(word);
      setToStorage('vocabLearned', wordList.join(','));
      window.dispatchEvent(new CustomEvent('vocabLearned', { detail: { word, definition } }));
    }
  } catch (error) {
    console.warn('Error marking vocabulary as learned:', error);
  }
}

/**
 * Get all learned vocabulary
 * @returns {Array}
 */
function getLearnedVocabulary() {
  const vocabStr = getFromStorage('vocabLearned', '');
  return vocabStr ? vocabStr.split(',').filter(w => w.length > 0) : [];
}

// ============================================================================
// ACHIEVEMENT CHECKS
// ============================================================================

/**
 * Check if all chapters have been passed
 * @returns {boolean}
 */
function isAllChaptersPassed() {
  const chapters = ['ch01', 'ch02', 'ch03', 'ch04', 'ch05', 'ch06', 'ch07', 'ch08', 'ch09', 'ch10',
                    'ch11', 'ch12', 'ch13', 'ch14', 'ch15', 'ch16', 'ch17', 'ch18', 'ch19', 'ch20'];

  return chapters.every(chapterId => isChapterComplete(chapterId));
}

/**
 * Get completion percentage across all chapters
 * @returns {number} 0-100
 */
function getOverallProgress() {
  const chapters = ['ch01', 'ch02', 'ch03', 'ch04', 'ch05', 'ch06', 'ch07', 'ch08', 'ch09', 'ch10',
                    'ch11', 'ch12', 'ch13', 'ch14', 'ch15', 'ch16', 'ch17', 'ch18', 'ch19', 'ch20'];

  const completedCount = chapters.filter(chId => isChapterComplete(chId)).length;
  return Math.round((completedCount / chapters.length) * 100);
}

// ============================================================================
// TEXT-TO-SPEECH
// ============================================================================

/**
 * Speak Thai text using Web Speech API
 * @param {string} text - Thai text to speak
 * @param {Object} options - Optional configuration
 */
function speak(text, options = {}) {
  try {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = options.lang || 'th-TH';
    utterance.rate = options.rate || 0.8;
    utterance.pitch = options.pitch || 1.0;
    utterance.volume = options.volume || 1.0;

    window.speechSynthesis.speak(utterance);
  } catch (error) {
    console.warn('Error with text-to-speech:', error);
  }
}

/**
 * Stop current speech
 */
function stopSpeech() {
  try {
    window.speechSynthesis.cancel();
  } catch (error) {
    console.warn('Error stopping speech:', error);
  }
}

// ============================================================================
// DASHBOARD & UI UPDATES
// ============================================================================

/**
 * Get comprehensive dashboard stats
 * @returns {Object} All user stats for dashboard
 */
function getDashboardStats() {
  const xp = getXP();
  const level = getLevel();
  const streak = getStreak();
  const badges = getBadges();
  const vocabLearned = getVocabLearned();
  const overallProgress = getOverallProgress();

  return {
    xp,
    level,
    streak,
    badgesEarned: badges.length,
    badges,
    vocabLearned,
    overallProgress,
    isMaxLevel: level.level === 5,
    nextLevelXP: level.nextLevelXP,
    xpToNextLevel: level.nextLevelXP ? level.nextLevelXP - xp : null
  };
}

/**
 * Update all dashboard elements with current stats
 */
function updateDashboard() {
  const stats = getDashboardStats();

  // Update XP display
  const xpElement = document.getElementById('userXP');
  if (xpElement) xpElement.textContent = stats.xp;

  // Update Level display
  const levelElement = document.getElementById('userLevel');
  if (levelElement) {
    levelElement.innerHTML = `${stats.level.emoji} ${stats.level.name}`;
  }

  // Update Streak display
  const streakElement = document.getElementById('userStreak');
  if (streakElement) streakElement.textContent = stats.streak;

  // Update Progress bar
  const progressBar = document.getElementById('levelProgressBar');
  if (progressBar) {
    progressBar.style.width = `${stats.level.progress}%`;
    progressBar.setAttribute('aria-valuenow', stats.level.progress);
  }

  // Update Progress text
  const progressText = document.getElementById('levelProgressText');
  if (progressText) {
    progressText.textContent = `${stats.level.xpInCurrentLevel} / ${stats.level.xpNeededForLevel} XP`;
  }

  // Update Badges display
  const badgesContainer = document.getElementById('userBadges');
  if (badgesContainer) {
    badgesContainer.innerHTML = stats.badges
      .map(badgeId => `<span title="${badgeId}">${getBadgeEmoji(badgeId)}</span>`)
      .join('');
  }

  // Update Vocabulary count
  const vocabElement = document.getElementById('vocabCount');
  if (vocabElement) vocabElement.textContent = stats.vocabLearned;

  // Update Overall progress
  const overallElement = document.getElementById('overallProgress');
  if (overallElement) overallElement.textContent = `${stats.overallProgress}%`;
}

/**
 * Listen for app events and update dashboard automatically
 */
function initializeDashboardListeners() {
  window.addEventListener('xpChanged', updateDashboard);
  window.addEventListener('streakChanged', updateDashboard);
  window.addEventListener('badgeEarned', updateDashboard);
  window.addEventListener('vocabLearned', updateDashboard);
  window.addEventListener('progressChanged', updateDashboard);
}

// ============================================================================
// INITIALIZATION
// ============================================================================

/**
 * Initialize app on page load
 */
function initializeApp() {
  try {
    // Check streak on app start
    updateStreak();

    // Update dashboard
    updateDashboard();

    // Setup event listeners
    initializeDashboardListeners();

    console.log('App initialized successfully');
  } catch (error) {
    console.error('Error initializing app:', error);
  }
}

// Auto-initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeApp);
} else {
  initializeApp();
}

// ============================================================================
// DATA MANAGEMENT / DEBUGGING
// ============================================================================

/**
 * Export user data for backup
 * @returns {Object}
 */
function exportUserData() {
  return {
    totalXP: getXP(),
    level: getLevel(),
    streak: getStreak(),
    badges: getBadges(),
    vocabLearned: getLearnedVocabulary(),
    exportDate: new Date().toISOString()
  };
}

/**
 * Clear all user data (DESTRUCTIVE - requires confirmation)
 */
function clearAllUserData() {
  if (confirm('Are you sure? This will delete all your progress.')) {
    try {
      localStorage.clear();
      window.dispatchEvent(new CustomEvent('dataCleared'));
      updateDashboard();
      console.log('All user data cleared');
      return true;
    } catch (error) {
      console.warn('Error clearing user data:', error);
      return false;
    }
  }
  return false;
}

/**
 * Get app stats for debugging
 * @returns {Object}
 */
function getAppStats() {
  return {
    totalXP: getXP(),
    currentLevel: getLevel(),
    currentStreak: getStreak(),
    badgesCount: getBadges().length,
    vocabCount: getVocabLearned(),
    storageSize: JSON.stringify(localStorage).length,
    timestamp: new Date().toISOString()
  };
}
