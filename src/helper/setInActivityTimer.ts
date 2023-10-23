export const setInActivityTimer = () => {
    let inactivityTimer;

    function resetInactivityTimer() {
      clearTimeout(inactivityTimer);
      inactivityTimer = setTimeout(redirectOnInactivity, 10000); 
    }
    
    function redirectOnInactivity() {   
      window.location.pathname = '/'; 
    }
       
    window.addEventListener('mousemove', resetInactivityTimer);
    window.addEventListener('keydown', resetInactivityTimer);

    resetInactivityTimer();
}