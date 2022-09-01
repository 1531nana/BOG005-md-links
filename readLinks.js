let regExp4 = '((https?:\/\/)([w]){3}|(https?:\/\/))\.?[a-zA-Z0-9-_.]+\/([a-zA-Z0-9-_./?=#]?)+gim'

let readLinks = (newPath, options) =>{
    const html = marked(newPath)
    console.log('soy marked ',html)
  //   const renderer = new Renderer(html)
  //  console.log(renderer)
  //   const dom = new JSDOM(html);
  //   let link = dom.window.document.getElementsByTagName("a");
  //   console.log('JSDOM ',link.length)
  }

  // let readLinks =  (newPath) => {
// new Promise ((resolve, rejects) =>{
//   if(newPath){
//   const html = marked(newPath);
//   console.log('soy html ',html)
//   // const dom = new JSDOM(html);
//   // let link = dom.window.document.getElementsByTagName("a");
//   // console.log('JSDOM ',link.length)
//   resolve(html)
// }
//    })}
  