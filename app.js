import { storage } from './storage.js';
import { ui } from './ui.js';
import { training } from './training.js';
import { DAYS, CHALLENGES } from './data.js';

// Initialisation
const state = storage.loadAll();
let { progState, cycleStart, cycleOffset, dailyState, streakData, historyData, hardcoreMode, rankState, lastTab } = state;

// Branchements events
document.getElementById('btn-home').addEventListener('click', () => switchTab('home'));
document.getElementById('btn-stats').addEventListener('click', () => switchTab('stats'));

// Fonctions principales
function switchTab(name) {
  ui.hideAllTabs();
  ui.showTab(name);
  storage.save({ lastTab: name });
  if(name==='home') ui.renderHome(state);
  if(name==='stats') ui.renderStats(historyData, streakData);
}

function updateAll() {
  ui.renderDays(progState);
  ui.renderChallenges(dailyState);
  ui.updateRank(streakData.count);
  training.saveToHistory(dailyState, historyData);
  storage.saveAll({ progState, cycleStart, cycleOffset, dailyState, streakData, historyData, hardcoreMode, rankState });
}

// Init
updateAll();
switchTab(lastTab);

