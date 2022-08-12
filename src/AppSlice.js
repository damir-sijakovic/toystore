import { createSlice } from "@reduxjs/toolkit";



const initialState = {
  locale: localStorage.getItem('stateLocale') ?? 'en', // en | hr 
  cookieConsent: localStorage.getItem('cookieConsent') ?? null, // not null | null 
  introModal: localStorage.getItem('introModal') ?? null, // not null | null 
  workspaceSize: {height: window.innerHeight, width: window.innerWidth },
  currentPage: 'home',
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
	  
    setLocale: (state, action) => {
      state.locale = action.payload;
      localStorage.setItem('stateLocale', state.locale); 
    },
    
    skipCookieConsent: (state) => { 
      state.cookieConsent = 'SKIP'; 
      localStorage.setItem('cookieConsent', 'SKIP');            
    },
    
    skipIntroModal: (state) => { 
      state.introModal = 'SKIP'; 
      localStorage.setItem('introModal', 'SKIP');            
    },
        
    setWorkspaceSize: (state, action) => {
      state.workspaceSize = action.payload; 
    },
    
    setCurrentpage: (state, action) => {
      state.currentPage = action.payload; 
    },
    

  },
});

export const { setLocale, setWorkspaceSize, skipCookieConsent, skipIntroModal, setCurrentpage } = appSlice.actions;
export default appSlice.reducer;
