async function setLocalStorage(city: string) {
  localStorage.setItem('favLocation', city ?? '');
  // this is bullshit, but the icon is not refreshing on a new fav location being set
  await new Promise((resolve) => setTimeout(resolve, 0));
}

export default setLocalStorage;
