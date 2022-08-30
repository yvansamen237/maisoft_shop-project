// const db = require('./../config/db');
// const { v4: uuidv4 } = require('uuid');

// // get all coupon
// exports.getAllCouponModel = (callback) => {
//   db.query('SELECT * FROM coupon', (err, res) => {
//     if (err) {
//       callback(err, null);
//     } else {
//       callback(null, res);
//     }
//   });
// };

// // create coupon
// exports.createCouponModel = (data, callback) => {
//   db.query(
//     'INSERT INTO coupon (id,code, amount,status ,count ,createdAt ,updateAt , expireAt,customerId) VALUES (?,?,?,?,?,?,?,?,?)',
//     [
//       uuidv4(),
//       data.code,
//       data.amount,
//       data.status,
//       data.count,
//       new Date(),
//       new Date(),
//       new Date(),
//       uuidv4(),
//     ],
//     (err, res) => {
//       if (err) {
//         callback(err, null);
//       } else {
//         callback(null, res);
//       }
//     }
//   );
// };
