---
title: "TOPT TEST"
published: 2025-03-06 16:02:47
updated: 2025-03-06 16:02:47
description: "README"
image: ""
tags: ["TOTP"]
category: TOTP
draft: true
lang: 'zh_CN'
pinned: true
---

<div id="totp-container" style="max-width: 400px; margin: 2rem auto; font-family: 'Segoe UI', system-ui; padding: 20px;">
  <div id="verification-section" style="background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%); 
            border-radius: 12px; 
            padding: 2rem;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            transition: transform 0.3s ease;">
    <h2 style="color: #2b2d42; margin-bottom: 1.5rem; text-align: center; font-weight: 600;">
      🔒 内容验证
    </h2>
    
  <div style="position: relative; margin-bottom: 1.5rem;">
  <input type="text" id="totp-input" placeholder="请输入6位验证码" maxlength="6"style="width: 100%;padding: 12px 16px;border: 2px solid #dee2e6;border-radius: 8px;font-size: 1.1rem;transition: all 0.3s ease;letter-spacing: 0.2em;"onkeyup="this.value = this.value.replace(/[^0-9]/g, '')">
  <div style="position: absolute; right: 10px; top: 50%; transform: translateY(-50%);color: #adb5bd;">
        ⌨️
      </div>
    </div>

  <button onclick="verifyTOTP()" style="width: 100%;padding: 12px;background: linear-gradient(135deg, #3a86ff 0%, #3f37c9 100%);color: white;border: none;border-radius: 8px;font-size: 1rem;font-weight: 500;cursor: pointer;transition: all 0.3s ease;transform-origin: center;box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);">
      验证身份
</button>
<div id="error-message" style="color: #e63946; text-align: center;margin-top: 1rem;opacity: 0;transition: opacity 0.3s ease;"></div>
  </div>

  <div id="content-section" 
       style="background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
              border-radius: 12px;
              padding: 2rem;
              box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
              opacity: 0;
              transform: translateY(20px);
              transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);">
    <!-- 这里放置需要保护的内容 -->
    <h2 style="color: #2b2d42; margin-bottom: 1rem; text-align: center;">🎉 验证成功！</h2>
    <div style="color: #4a4e69; line-height: 1.6;">
      这里是受保护的内容，只有通过TOTP验证后才能看到。
    </div>
  </div>
</div>

<script>
const secretKey = 'JBSWY3DPEHPK3PXP';
let verificationSection = document.getElementById('verification-section');
let contentSection = document.getElementById('content-section');
let errorMessage = document.getElementById('error-message');

async function verifyTOTP() {
    try {
        const input = document.getElementById('totp-input').value.trim();
        
        // 添加按钮点击动画
        verificationSection.style.transform = "scale(0.98)";
        await new Promise(r => setTimeout(r, 100));
        
        if (input.length !== 6) {
            showError('请输入6位验证码');
            return;
        }

        const totp = new jsOTP.totp();
        const currentCode = totp.getOtp(secretKey);
        
        if (input === currentCode) {
            // 成功动画
            verificationSection.style.opacity = 0;
            verificationSection.style.transform = "translateY(-20px)";
            
            // 显示内容动画
            setTimeout(() => {
                verificationSection.style.display = 'none';
                contentSection.style.display = 'block';
                setTimeout(() => {
                    contentSection.style.opacity = 1;
                    contentSection.style.transform = "translateY(0)";
                }, 50);
            }, 300);
        } else {
            // 错误震动动画
            showError('验证码错误，请重试');
            verificationSection.style.animation = 'shake 0.4s ease';
            setTimeout(() => verificationSection.style.animation = '', 400);
        }
    } finally {
        verificationSection.style.transform = "scale(1)";
    }
}

function showError(message) {
    errorMessage.textContent = message;
    errorMessage.style.opacity = 1;
    setTimeout(() => errorMessage.style.opacity = 0, 2000);
}

// 添加震动动画
const style = document.createElement('style');
style.textContent = `
@keyframes shake {
    0% { transform: translateX(0); }
    25% { transform: translateX(8px); }
    50% { transform: translateX(-8px); }
    75% { transform: translateX(8px); }
    100% { transform: translateX(0); }
}
`;
document.head.appendChild(style);
</script>

<!-- 引入jsOTP库 -->
<script src="https://cdn.jsdelivr.net/gh/jiangts/JS-OTP@master/dist/jsOTP.min.js"></script>