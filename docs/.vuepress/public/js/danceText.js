const ROOT_URL = "/reco-blog/";
const callback = () => {
  const description = document.querySelector(".hero p.description");
  const tagline = description.innerText;
  const appendElements = tagline
    .split("")
    .map((item, index) => {
      return `<span style="--i:${index + 1}">${item}</span>`;
    })
    .join("");
  console.log(tagline, appendElements);
  description.classList.add("tagline-wrap");
  console.log(tagline, appendElements);
  appendElements && (description.innerHTML = appendElements);
};
const refresh = (event)=>{
  console.log(event)
}
window.addEventListener('hashchange', this.refresh, false);
// window.addEventListener('hashchange',function(event){
//   console.log(event)
//   const pathname = window.location.pathname;
//   if (pathname === ROOT_URL) {
//     callback(pathname);
//   }
// })
console.log('in')
// window.onhashchange = () => {
//   if (pathname === ROOT_URL) {
//     callback(pathname);
//   }
// };
// console.log("in", window.location.pathname);
