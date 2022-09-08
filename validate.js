const { options, argv } = require("yargs")

options ={
    validate: false,
    stats: false
}
let validate = (newPath, ...options) => {
options = argv[3];
if(options.validate === '--validate'){

}else if(options.stats === '--stats'){

}else if(options.validate === '--validate' && options.stats === '--stats' ){

}else {
    console.log('comando incorrecto')
}
}