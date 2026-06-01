<div align="center">
  <h1>🎬 CINEMAX (Cinema Canvas)</h1>
  <p><em>Hệ thống đặt vé xem phim trực tuyến hiện đại, mạnh mẽ và toàn diện.</em></p>

  <!-- Badges -->
  <p>
    <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
    <img src="https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E" alt="Vite" />
    <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="NodeJS" />
    <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" alt="ExpressJS" />
    <img src="https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white" alt="Prisma" />
    <img src="https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white" alt="MySQL" />
    <img src="https://img.shields.io/badge/Redis-DC382D?style=for-the-badge&logo=redis&logoColor=white" alt="Redis" />
    <img src="https://img.shields.io/badge/Elasticsearch-005571?style=for-the-badge&logo=elasticsearch&logoColor=white" alt="Elasticsearch" />
    <img src="https://img.shields.io/badge/Kibana-005571?style=for-the-badge&logo=kibana&logoColor=white" alt="Kibana" />
    <img src="https://img.shields.io/badge/Docker-2CA5E0?style=for-the-badge&logo=docker&logoColor=white" alt="Docker" />
  </p>
</div>

---

## 📑 Mục Lục
- [Giới thiệu](#-giới-thiệu)
- [Tính năng nổi bật](#-tính-năng-nổi-bật)
- [Hướng dẫn cài đặt](#-hướng-dẫn-cài-đặt)
  - [Cách 1: Sử dụng Docker (Khuyên dùng)](#cách-1-sử-dụng-docker-khuyên-dùng)
  - [Cách 2: Cài đặt thủ công](#cách-2-cài-đặt-thủ-công)
- [Kiểm thử chức năng (Dành cho Giảng Viên)](#-kiểm-thử-chức-năng-dành-cho-giảng-viên)
- [Kiến trúc hệ thống & Design Patterns](#-kiến-trúc-hệ-thống--design-patterns)

---

## 🌟 Giới thiệu

**Cinema Canvas (CINEMAX)** là một nền tảng Web Application quản lý và đặt vé xem phim được thiết kế theo kiến trúc Microservices & RESTful API. Hệ thống cung cấp trải nghiệm UI/UX mượt mà cho khách hàng đồng thời trang bị một Dashboard mạnh mẽ giúp Quản trị viên dễ dàng vận hành rạp chiếu.

---

## 🚀 Tính năng nổi bật

### 👨‍💼 Dành cho Quản trị viên (Admin)
- **Quản lý Phim:** Thêm, sửa, xóa, upload Poster phim (Cloudinary).
- **Quản lý Lịch chiếu:** Sắp xếp lịch chiếu, chọn rạp, cấu hình giá vé.
- **Quản lý Người dùng:** Phân quyền, kiểm soát danh sách người dùng.
- **Quản lý Ưu đãi (Offers):** Tạo mã giảm giá động, cấu hình phần trăm giảm, icon, hạn sử dụng.
- **Quản lý Đặt vé:** Theo dõi luồng doanh thu và lịch sử đặt vé của khách hàng trực tiếp trên hệ thống.

### 🙎‍♂️ Dành cho Khách hàng (User)
- **Trải nghiệm mua vé:** Quy trình đặt vé đa bước trực quan (Chọn phim ➞ Chọn suất chiếu ➞ Chọn ghế ➞ Áp dụng mã giảm giá ➞ Thanh toán).
- **Lịch sử đặt vé:** Xem chi tiết thông tin vé, rạp, thời gian và giá tiền trên bảng điều khiển cá nhân.
- **Bảo mật tối đa:** Đăng nhập, đăng ký sử dụng chuẩn bảo mật JWT. Hỗ trợ Đăng nhập bằng Google (OAuth2.0).

---

## ⚙️ Hướng dẫn cài đặt

### Cách 1: Sử dụng Docker (Khuyên dùng)
Dự án đã được cấu hình sẵn môi trường containerized hoàn chỉnh bao gồm Node.js, MySQL, Redis, Elasticsearch & Kibana.

1. **Yêu cầu:** Đã cài đặt [Docker Desktop](https://www.docker.com/products/docker-desktop/).
2. **Khởi chạy hệ thống:**
   Mở terminal tại thư mục gốc của dự án và chạy:
   ```bash
   docker compose up --build -d
   ```
3. **Truy cập:**
   - Client (Frontend): `http://localhost:5173`
   - Server API: `http://localhost:5000`
   - Kibana Logs: `http://localhost:5601`

### Cách 2: Cài đặt thủ công (Local Development)

**1. Khởi chạy Backend (API):**
```bash
cd expressjs
npm install
npx prisma db push   # Cập nhật Schema xuống Database
npx prisma generate  # Khởi tạo Prisma Client
npm run start        # Chạy API Server ở cổng 5000
```
*(Lưu ý: Bạn cần cấu hình file `.env` với `DATABASE_URL` MySQL của riêng bạn).*

**2. Khởi chạy Frontend (UI):**
```bash
cd FE
npm install
npm run dev          # Chạy Vite Server ở cổng 5173
```

---

## 🔑 Kiểm thử chức năng (Dành cho Giảng Viên)

Hệ thống được thiết kế với cơ chế phân quyền bảo mật kép (Frontend Router Guard + Backend Middleware). 

| Loại Tài Khoản | Phân Quyền (`maLoaiNguoiDung`) | Chức Năng Cốt Lõi | Tài Khoản Test |
| :--- | :--- | :--- | :--- |
| **Admin** | `QuanTri` | Có quyền truy cập Admin Dashboard, thao tác CRUD Phim, Lịch chiếu, Ưu đãi, Người dùng. | **Tài khoản:** `admin01`<br>**Mật khẩu:** `123456` |
| **Khách Hàng** | `KhachHang` | Chỉ được phép xem phim, đặt vé, áp dụng mã ưu đãi và xem lịch sử cá nhân. | **Tài khoản:** `user01`<br>**Mật khẩu:** `123456` |

*💡 **Lưu ý:** Nếu User cố tình truy cập URL `/admin`, UI sẽ tự động chặn và hiển thị trang `ACCESS DENIED`. Nếu cố tình dùng Postman gọi API Admin, Backend sẽ từ chối và trả về HTTP Status `403 Forbidden`.*

---

## 🏗️ Kiến trúc hệ thống & Design Patterns

Dự án được xây dựng dựa trên nguyên lý **SOLID** và áp dụng chặt chẽ các Design Pattern công nghiệp:

### 1. Kiến trúc phân tầng (Layered Architecture - Backend)
Mô hình MVC truyền thống được tùy biến để tách bạch hoàn toàn Business Logic khỏi Controller:
- **Router:** Cầu nối điều hướng API đến đúng Controller (Sử dụng Express Router).
- **Controller:** Đọc Request, xác thực tham số, gọi tầng Service và định dạng Response trả về (JSON).
- **Service:** Tầng xử lý **Nghiệp vụ cốt lõi**. Việc tính toán, kiểm tra logic phức tạp được cô lập tại đây giúp code dễ bảo trì và dễ dàng viết Unit Test độc lập.
- **Repository (Prisma ORM):** Lớp giao tiếp trực tiếp với cơ sở dữ liệu MySQL một cách Type-Safe.

### 2. Singleton Pattern
- Áp dụng trong việc khởi tạo Database Connection (`connect.prisma.js`). 
- Design pattern này đảm bảo toàn bộ ứng dụng Node.js chỉ sinh ra và sử dụng **duy nhất một Connection Pool** tới Database, ngăn chặn triệt để tình trạng rò rỉ bộ nhớ (Memory Leak) và lỗi hết cổng kết nối (Too many connections).

### 3. Middleware / Chain of Responsibility Pattern
- Mọi luồng API yêu cầu tính bảo mật cao đều phải đi qua một chuỗi các "trạm kiểm duyệt" (Middlewares).
- **Ví dụ Pipeline:** `checkAuth` (Xác thực JWT Token hợp lệ) ➞ `restrictTo("QuanTri")` (Xác thực đúng Quyền) ➞ `validateData` (Xác thực Payload) ➞ `Controller`.
- Mỗi middleware chịu trách nhiệm đúng 1 nhiệm vụ cốt lõi và quyết định xem có cho phép Request đi tiếp (`next()`) hay trả thẳng lỗi về người dùng.

### 4. Adapter Pattern (Frontend)
- Ở lớp UI, các file Adapter (như `movie-adapter.ts`) đóng vai trò làm phiên dịch viên chuyển đổi cấu trúc dữ liệu thô từ Backend (`ten_phim`, `hinh_anh`) thành cấu trúc chuẩn mực, đồng nhất cho UI Component (`title`, `poster`).
- Nhờ Pattern này, giao diện người dùng sẽ không bị sụp đổ (break) dù Backend có thay đổi toàn bộ cấu trúc bảng Database. Nó tạo ra một lớp chống dính cực kỳ hiệu quả giữa Server và Client.

### 5. Observer Pattern (State Management)
- Hệ thống Frontend sử dụng **Context API** kết hợp **React Query** làm kho lưu trữ State toàn cục.
- Các UI Components đóng vai trò như các Observers (người theo dõi). Bất cứ khi nào trạng thái (ví dụ: Auth State, Shopping Cart) bị thay đổi, tất cả các Observers đang "lắng nghe" sẽ được thông báo để tự động re-render và cập nhật giao diện lập tức mà không cần phải tải lại trang.

---

## 🛡️ Bảo Mật & Giám Sát Hệ Thống (Security & Logging)

### 1. Cơ Chế Bảo Mật Toàn Diện
- **XSS & CSRF Protection:** Sử dụng các thư viện bảo mật tiêu chuẩn để lọc đầu vào và thiết lập CORS nghiêm ngặt.
- **Rate Limiting bằng Redis:** Chống Spam/DDoS hiệu quả bằng cách giới hạn số lượng Request từ một IP trong một khoảng thời gian nhất định thông qua bộ nhớ siêu tốc Redis.
- **JWT Authentication:** Xác thực không trạng thái (Stateless), an toàn bằng Access Token & Refresh Token.
- **Mã Hóa Mật Khẩu:** Sử dụng `Bcrypt` để hash mật khẩu trước khi lưu xuống Database.

### 2. Giám Sát Log Tập Trung (Elasticsearch & Kibana)
Dự án tích hợp bộ công cụ giám sát mạnh mẽ để thu thập, phân tích và trực quan hóa Log hệ thống (bỏ qua Logstash trung gian để tối ưu hiệu năng):
- **Winston Logger:** Middleware tự động ghi nhận mọi truy cập API (IP, Method, URL, Thời gian) và đẩy trực tiếp vào Elasticsearch.
- **Elasticsearch:** Lưu trữ toàn bộ Log của Node.js Server dưới dạng Search Engine siêu tốc, giúp tra cứu lỗi (bug) tính bằng mili-giây.
- **Kibana:** Cung cấp Dashboard trực quan ngay trên trình duyệt (Cổng `5601`). Admin/Dev có thể giám sát lưu lượng truy cập API theo thời gian thực (Real-time).

---
<div align="center">
  <p>Được thiết kế và phát triển với ❤️</p>
</div>
