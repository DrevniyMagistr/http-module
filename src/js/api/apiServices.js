export const apiServices = (url, options) => {
  return fetch(url, options).then(res => {
    if (!res.ok) {
      return res.json().then(error => Promise.reject(error));
    }
    res.json();
  })
}