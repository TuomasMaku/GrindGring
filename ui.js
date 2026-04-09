import { DAYS, CHALLENGES, RANKS } from './data.js';

export const ui = {
  setTxt(id,val) { const el=document.getElementById(id); if(el) el.textContent=val; },
  setHTML(id,val) { const el=document.getElementById(id); if(el) el.innerHTML=val; },
  setW(id,val) { const el=document.getElementById(id); if(el) el.style.width=val; },
  
  renderDays(progState) { /* ta fonction build programme + refreshRing */ },
  renderChallenges(dailyState) { /* ta fonction build défi */ },
  renderStats(historyData, streakData) { /* ta fonction renderStats */ },
  renderHome(state) { /* ta fonction updateHome */ },
  updateRank(streak) { /* ta fonction updateRank */ },
  showModal(id) { document.getElementById(id).classList.add('show'); },
  hideModal(id) { document.getElementById(id).classList.remove('show'); }
};
