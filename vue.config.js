// module.exports = {
//     devServer: {
//         host: 'localhost'
//     }
// };

module.exports = {
    devServer: {
        host: 'dobbyvue.s3.ap-northeast-2.amazonaws.com'
    }
};

// module.exports = {
//     devServer: {
//         host: 'ec2-13-125-131-254.ap-northeast-2.compute.amazonaws.com'
//     }
// };

// module.exports = {
//     devServer: {
//         proxy: {
//             target: 'http://ec2-13-125-131-254.ap-northeast-2.compute.amazonaws.com',
//             changeOrigin: true
//         }
//     }
// };

// module.exports = {
//     proxy: {
//         target: 'http://ec2-13-125-131-254.ap-northeast-2.compute.amazonaws.com:8081/',
//         changeOrigin: true
//     }
// };

// const cors = require('cors');
// let corsOption = {
//     origin: 'http://ec2-13-125-131-254.ap-northeast-2.compute.amazonaws.com80',    // 허용 주소
//     credentials: true                   // true시 설정 내용을 응답헤더에 추가해 줌
// }
// app.use(cors(corsOption));              // CORS 미들웨어 추가