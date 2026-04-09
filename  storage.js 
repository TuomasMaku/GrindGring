const store = {
  _m:{}, 
  get(k,d){ try{const v=localStorage.getItem(k);return v!==null?JSON.parse(v):d;}catch{return this._m[k]!==undefined?this._m[k]:d;} },
  set(k,v){ try{localStorage.setItem(k,JSON.stringify(v));}catch{} this._m[k]=v; }
};

export const storage = {
  loadAll() {
    return {
      progState: store.get('progState', {}),
      cycleStart: store.get('cycleStart', null),
      cycleOffset: store.get('cycleOffset', 0),
      dailyState: store.get('dailyState', {date:'', reps:CHALLENGES.map(()=>0)}),
      streakData: store.get('streakData', {count:0, lastDate:'', best:0}),
      historyData: store.get('historyData', []),
      hardcoreMode: store.get('hardcoreMode', false),
      rankState: store.get('rankState', {lastRank:''}),
      lastTab: store.get('lastTab', 'home')
    };
  },
  saveAll(data) { Object.entries(data).forEach(([k,v])=>store.set(k,v)); },
  exportData(data) { /* ta fonction exportData */ },
  importData(file) { /* ta fonction importData */ }
};
