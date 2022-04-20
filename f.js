// const fs=require('fs').promises
// const R_OK=require('fs').constants.R_OK
// const fp='a.txt'
// async function test(){
//     try{
//         // await fs.access(fp,R_OK)
//         await fs.stat(fp)
//         var rt=fs.readFile(fp)
//         console.log(rt)
//     }
//     catch(err){
//         console.log(err);
//     }
//     finally{
//         console.log('finally')
//     }
// }
// test()

module.exports={ f1(){
		console.log('f.js')
		obj.f='f'
	}
}
