
const getToken = () => {
  return sessionStorage.getItem('token')
}

const setUserSession = (token) => {
  sessionStorage.setItem('token', token);
}

const resetUserSession = () => {
  sessionStorage.removeItem('token')
}

export {getToken, setUserSession, resetUserSession}
