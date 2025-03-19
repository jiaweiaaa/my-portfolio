const express = require('express');
const router = express.Router();
const cors = require('cors');
const nodeMailer = require('nodemailer');
require('dotenv').config(); 

//server used to send emails
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // 解析application/json
app.use('/', router);
app.listen(5000, () => console.log('Server Running'));


const contactEmail = nodeMailer.createTransport({
    host: 'smtp.qq.com',
    port: 465,
    secure: true, // 使用SSL
    auth: {
        user: process.env.EMAIL_USER ||"", 
        pass: process.env.EMAIL_PASS || "" 
    },
});


const validateContactData = (data) => {
  const { firstName, lastName, email, message } = data;
  const errors = [];
  
  if (!firstName || !lastName) {
      errors.push('姓名必填');
  }
  
  if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      errors.push('邮箱格式不正确');
  }
  
  if (!message) {
      errors.push('消息内容必填');
  }
  
  return errors;
};

const safeValue = (value, defaultValue = '未提供') => {
  // 检查值是否为undefined、null、NaN或空字符串
  if (value === undefined || value === null || value === '' || (typeof value === 'number' && isNaN(value))) {
      return defaultValue;
  }
  return value;
};

router.post("/contact", (req, res) => {

  
  // 安全地获取表单字段，提供默认值
  const firstName = safeValue(req.body.firstName, '');
  const lastName = safeValue(req.body.lastName, '');
  const email = safeValue(req.body.email);
  const message = safeValue(req.body.message);
  const phone = safeValue(req.body.phone);
  const name = firstName || lastName ? `${firstName} ${lastName}`.trim() : '未提供姓名';
    
    // 确保主题是一个固定字符串，不依赖于任何可能为NaN的值
    const subject = "My portfolio contact form submission";
    

    const mail = {
      from: `"${name}" <${process.env.EMAIL_USER}>`,
      to: process.env.RECIPIENT_EMAIL,
      subject: subject,
      html: `<p>Name: ${name}</p>
             <p>Email: ${email}</p>
             <p>Phone: ${phone}</p>
             <p>Message: ${message}</p>`,
    };
    contactEmail.sendMail(mail, (error) => {
      if (error) {
        console.error('发送邮件失败:', error);
            return res.status(500).json({ 
                code: 500, 
                status: "Error", 
                message: "发送邮件时出错" 
            });
      } else {
        res.json({ code: 200, status: "Message Sent" });
      }
    });
  });


  // 测试路由
router.get("/test", (req, res) => {
  res.json({ 
      status: "OK",
      message: "服务器正常运行"
  });
});

// 错误处理中间件
app.use((err, req, res, next) => {
  console.error('服务器错误:', err);
  res.status(500).json({ 
      code: 500, 
      status: "Error", 
      message: "服务器内部错误" 
  });
});