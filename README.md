# AWS_SecretManager

This code is meant to used for any node.js application that requires secrets. Using this secrets we can get the secrets anywhere, on any platform.

# 🔐 AWS Secret Manager Demo

AWS Secrets Manager’ı kullanarak uygulama sırlarını (DB parolaları, API anahtarları vb.) güvenli bir şekilde yöneten basit bir demo projesidir.

---

## 🚀 Proje Amacı

Bu proje, AWS Secret Manager’ın:

- Nasıl yapılandırıldığını
- Secret’ların nasıl saklandığını ve alındığını
- Uygulamalar ile entegrasyonunu

öğrenmek amacıyla hazırlanmıştır. Özellikle Node.js/Java/Python gibi dillerle runtime sırasında secret alma senaryolarını gösterir.

---

## 🛠️ Kullanılan Teknolojiler

- **AWS Secrets Manager**
- **AWS SDK** (örneğin: JavaScript v3 / Java 2.x / Python)
- (Opsiyonel) Docker ile AWS CLI veya Mock ortam
- (Opsiyonel) Kubernetes, GitHub Actions gibi entegre senaryolar

– AWS Secrets Manager, sırları **KMS ile şifreleyerek saklar** ve sadece uygulama çalışırken TLS üzerinden erişime izin verir :contentReference[oaicite:1]{index=1}  
– SDK’lar üzerinden `GetSecretValue` işlevi ile sırlar elde edilir :contentReference[oaicite:2]{index=2}

---

## 📦 Kurulum & Kullanım

1. Reposu klonla:
   ```bash
   git clone https://github.com/SudeNurErturk/AWS_SecretManager.git
   cd AWS_SecretManager
