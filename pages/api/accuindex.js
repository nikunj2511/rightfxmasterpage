const { uploadInMemory } = require('./file-handler');

// import nextConnect from 'next-connect';
// import multer from 'multer';

// const upload = multer({
//     storage: multer.diskStorage({
//       destination: './public/uploads',
//       filename: (req, file, cb) => cb(null, file.originalname),
//     }),
//   });
//   const uploadMiddleware = upload.array('theFiles');
  
//   const apiRoute = nextConnect({
//     onError(error, req, res) {
//         res.status(501).json({ error: `Sorry something Happened! ${error.message}` });
//       },
//       // Handle any other HTTP method
//       onNoMatch(req, res) {
//           res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
//         },
//     });
    
//     apiRoute.use(uploadMiddleware);
// // Process a POST request
// apiRoute.post((req, res) => {
//     res.status(200).json({ data: 'success' });
//   });

//   export default apiRoute;
//   export const config = {
//     api: {
//       bodyParser: false, // Disallow body parsing, consume as stream
//     },
//   };

// var storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//       console.log(req.body.internalUserID) // YAY, IT'S POPULATED
//       cb(null, 'listing-pics/')
//     },                    
//     filename: function (req, file, cb) {
//       cb(null, file.fieldname + '-' + Date.now())
//     }                     
//   }); 
// export default function handler(req, res) {
//     console.log(req)
//     const {file} = req;
//     console.log(file);
//     //  let getFIle = uploadInMemory.single('file');
//     // const { file } = req;
//     // console.log(file);
//     // console.log(getFIle);
//     // let data = req.body.postData;
//     // if (data.form === 'careers') {
//     //     console.log('careers hit');
//     //      //console.log(req['body'] +'raza');
//     //     // if(body.form =='careers'){
//     //     // }
//     //   // Process a POST request
//     // } else {
//     //   // Handle any other HTTP method
//     // }
//   }