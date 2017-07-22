var nodemailer = require('nodemailer');
var token      = require('../../authorization/XOAuth2');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    secure: false,
    port: 25,
    auth: {
        user: token.user,
        pass: token.pass
    },
    tls: {
        rejecUnauthorized: false
    }
});

var homeController = {
    index: function (req, res) {
        res.render('home/index', {
        });
    },

    sendEmailToMe: function(req, res) {
        var full_name = req.body.full_name;
        var email = req.body.email;
        var subject = req.body.subject;
        var message = req.body.message;

        console.log('name: ' + full_name, ' email: ' + email, ' subject: ' + subject, ' message: ' + message);
        
        var mailOptions = {
            from: full_name + '<' + email + '>',
            to: 'thangpham.it92@gmail.com',
            subject: 'Email to Thang Pham',
            html: 'Hello, <b>Thang Pham</b>' + 
                '<br>'+
                'Full name: ' + full_name + 
                '<br><b>Email: </b>' + email +
                '<br><b>Subject: </b>' + subject +
                '<br><b>Message: </b>' + message
        };

        //send mail with defined transport object
        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log('error');
                res.render('home/index', {
                });
                // res.render('modals/lien-he-modal', {
                //     flash: {
                //         type: 'error',
                //         title: 'LIÊN HỆ VỚI TRUNG TÂM THẤT BẠI',
                //         message: 'Bạn vui lòng liên lạc trực tiếp với trung tâm <b>TƯ VẤN DU HỌC ĐẠI HẢI</b>.' +
                //                  '<br>' +
                //                  'Liên hệ và ghi danh tại Văn phòng trụ sở chính: ' +
                //                  '<br>' +
                //                  '<b>18/64A, KDC Đại Hải, Ấp 7, xã Xuân Thới Thượng, huyện Hóc Môn, HCM.</b>' + 
                //                  '<br>' +
                //                  '<b>Số điện thoại</b>: 0862.50.55.22 hoặc 0914.787.008 (Thầy Nam).' + 
                //                  '<br>' +
                //                  '<b>Email</b>: tuvanduhocdaihai@gmail.com'
                //     }
                // });
            } else {
                console.log('success');
                res.render('home/index', {
                });
                // res.render('modals/lien-he-modal', {
                //     flash: {
                //         type: 'success',
                //         title: 'LIÊN HỆ VỚI TRUNG TÂM THÀNH CÔNG',
                //         message: 'Cảm ơn bạn đã liên lạc với trung tâm <b>TƯ VẤN DU HỌC ĐẠI HẢI</b>.' + 
                //                 '<br>' +
                //                 'Chúng tôi sẽ liên lạc với bạn trong thời gian sớm nhất!'
                //     }
                // });
            }
        });
    }
};

module.exports = homeController;