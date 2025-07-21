// console.log("----------CategoryPlugin start----------");
// console.log(content);
// console.log("----------CategoryPlugin end----------");
export default async function CategoryPlugin(context, options) {
  // ...
  return {
    name: 'my-CategoryPlugin',
    async loadContent() {
      /* ... */
    },
    async contentLoaded({content, actions}) {
      /* ... */
    },
    /* other lifecycle API */
  };
}