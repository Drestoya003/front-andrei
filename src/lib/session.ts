export const clearSession = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
  
  document.cookie.split(";").forEach((c) => {
    const eqPos = c.indexOf("=");
    const name = eqPos > -1 ? c.substr(0, eqPos) : c;
    document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/";
  });
  

  sessionStorage.clear();
  
  if (typeof window !== 'undefined') {
    window.history.replaceState(null, '', '/login');
  }
};