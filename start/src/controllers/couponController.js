// const {
//   getAllCouponModel,
//   createCouponModel,
// } = require('./../models/couponModels');

// // get all coupon
// exports.getAllCoupon = (req, res) => {
//   getAllCouponModel((err, result) => {
//     if (err) {
//       console.log(err);
//     } else {
//       res.json({
//         success: 1,
//         result: result,
//       });
//     }
//   });
// };

// // create coupon: a post method
// exports.createCoupon = (req, res) => {
//   const data = req.body;
//   createCouponModel(data, (err, result) => {
//     if (err) {
//       console.log(err);
//     } else {
//       res.json({
//         success: 1,
//         result: result,
//       });
//     }
//   });
// };
