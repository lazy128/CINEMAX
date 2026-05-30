# 🎬 Cinema Canvas - Hệ Thống Đặt Vé Xem Phim

Dự án web ứng dụng đặt vé xem phim với đầy đủ tính năng dành cho Khách hàng và Quản trị viên, được phát triển dựa trên stack **React/Vite** (Frontend) và **Express.js + Prisma** (Backend).

---

## 🚀 Hướng Dẫn Cài Đặt & Chạy Dự Án (Getting Started)

### 1. Khởi chạy Backend (API)
Mở terminal và trỏ vào thư mục `expressjs`:
```bash
cd expressjs
npm install
npx prisma db push   # Cập nhật Schema xuống Database
npx prisma generate  # Khởi tạo Prisma Client
npm run dev          # Chạy server ở chế độ dev
```
- Server mặc định sẽ khởi chạy tại: `http://localhost:5000`
- Tài liệu API (Swagger): `http://localhost:5000/api-docs`

### 2. Khởi chạy Frontend (UI)
Mở một terminal khác và trỏ vào thư mục `FE`:
```bash
cd FE
npm install
npm run dev
```
- Ứng dụng Web sẽ khởi chạy tại: `http://localhost:5173`

---

## 🔑 Hướng Dẫn Thầy Test API & Chức Năng (Admin vs User)

Để kiểm tra cơ chế phân quyền, hệ thống đã chia rạch ròi 2 loại tài khoản:

### 1. Chế Độ Quản Trị Viên (Admin)
- **Tài khoản Test:** `admin01` / **Mật khẩu:** `123456`
- **Đăng nhập** bằng tài khoản có `maLoaiNguoiDung` là `"QuanTri"`.
- Trên giao diện Frontend, bạn sẽ nhận biết tài khoản Admin thông qua **Icon Hình Cái Khiên (Shield)** góc trên bên phải thay vì hình người bình thường.
- Thanh Menu sẽ xuất hiện thêm mục **ADMIN**, cho phép truy cập vào Trang Quản Trị.
- **Test API:** Admin có quyền gọi các API nhạy cảm (được bảo vệ bởi Middleware `restrictTo("QuanTri")`) như:
  - Thêm, Sửa, Xóa Phim (`POST /api/QuanLyPhim/CapNhatPhimUpload`)
  - Tạo Lịch Chiếu (`POST /api/QuanLyDatVe/TaoLichChieu`)
  - Quản trị Người Dùng.

### 2. Chế Độ Khách Hàng (User)
- **Tài khoản Test:** `user01` / **Mật khẩu:** `123456` (Hoặc Thầy có thể tự Đăng Ký tài khoản mới).
- **Đăng nhập** bằng tài khoản có `maLoaiNguoiDung` là `"KhachHang"`.
- Trình duyệt sẽ hiển thị icon người dùng mặc định. Nút **ADMIN** trên Navbar sẽ bị ẩn.
- **Bảo mật kép:** Nếu User cố tình nhập URL `/admin`, Frontend sẽ block và hiển thị màn hình **ACCESS DENIED**. Nếu dùng Postman cố tình gọi API Admin, Backend sẽ trả về lỗi `403 Forbidden`.
- **Test API:** User chỉ có quyền thao tác các API dành cho khách như:
  - Đặt vé (`POST /api/QuanLyDatVe/DatVe`)
  - Xem thông tin tài khoản, lịch sử đặt vé.
  - Các API Public (Danh sách phim, cụm rạp) không yêu cầu Token.

---

## 🔄 Luồng Thực Thi Hoạt Động (Execution Flow)

Hệ thống tuân thủ theo luồng bảo mật tiêu chuẩn sử dụng **JSON Web Token (JWT)**.

1. **Luồng Xác Thực (Authentication Flow):**
   - Người dùng gửi thông tin Đăng nhập.
   - Backend xác thực thành công sẽ sinh ra `JWT Token` (lưu trữ Payload gồm `id`, `maLoaiNguoiDung`).
   - Frontend lưu Token vào `localStorage` và cập nhật Global State (Zustand/Context).

2. **Luồng Đặt Vé (Booking Flow):**
   - User xem thông tin phim -> Click suất chiếu -> Chọn ghế.
   - Khi bấm thanh toán, Frontend gửi Request kèm **JWT Token** qua Header: `Authorization: Bearer <token>`.
   - Backend chạy qua `protect` middleware để Verify Token -> Lưu thông tin vé xuống Database bằng **Transaction** -> Trả về kết quả thành công.

3. **Luồng Quản Trị (Admin Flow - Checkplan Update Phim):**
   - Admin upload hình ảnh + Form Cập Nhật Phim.
   - Frontend dùng `FormData` để đóng gói dữ liệu dạng Multipart gửi lên Server.
   - Tại Backend, Request đi qua chuỗi Pipeline: 
     `protect` (Check Đăng nhập) -> `restrictTo("QuanTri")` (Check Quyền) -> `uploadDiskStorage` (Lưu file vật lý) -> `Controller` -> `Service` (Cập nhật DB qua Prisma) -> Trả về Client.

---

## 🏗️ Kiến Trúc & Design Pattern Áp Dụng

Dự án áp dụng chặt chẽ các Design Pattern để đảm bảo tính dễ bảo trì, mở rộng và tuân thủ nguyên lý SOLID.

### 1. Layered Architecture (MVC Backend)
Backend được chia thành các lớp chuyên biệt:
- **Router:** Cầu nối điều hướng API đến đúng Controller.
- **Controller:** Tiếp nhận Request, điều phối và trả về Response JSON.
- **Service:** Đảm nhận toàn bộ **Business Logic** (Nghiệp vụ cốt lõi). Không phụ thuộc vào Express, dễ dàng viết Unit Test.
- **Repository (Prisma):** Giao tiếp trực tiếp với Cơ sở dữ liệu.

### 2. Singleton Pattern
- Áp dụng trong việc khởi tạo Prisma Client (`connect.prisma.js`). Pattern này đảm bảo toàn bộ ứng dụng Express chỉ sinh ra và sử dụng **duy nhất một connection pool** tới Database, ngăn chặn triệt để tình trạng Memory Leak do mở quá nhiều kết nối.

### 3. Middleware / Chain of Responsibility Pattern
- Mọi luồng API yêu cầu bảo mật đều phải đi qua một chuỗi các trạm kiểm duyệt (Middlewares). Mỗi middleware xử lý 1 nhiệm vụ duy nhất và quyết định có cho Request đi tiếp (`next()`) hay chặn lại.

### 4. Adapter Pattern (Frontend)
- Ở Frontend có file `movie-adapter.ts`. Đây là một Adapter hoàn hảo để làm cầu nối giữa cấu trúc dữ liệu thô từ Backend (ví dụ `ten_phim`, `hinh_anh`) và cấu trúc chuẩn mực mà UI Component của React đang cần (`title`, `poster`). Nó giúp UI tái sử dụng dễ dàng và không bị phá vỡ nếu Backend thay đổi cấu trúc bảng.

### 5. Context / Observer Pattern (Frontend)
- Sử dụng React Context API (`AuthContext`, `LocaleContext`) để quản lý State toàn cục. Các Components đóng vai trò như các Observers (người theo dõi). Bất cứ khi nào AuthState (Trạng thái đăng nhập) thay đổi, tất cả các UI Component đang lắng nghe sẽ tự động re-render và cập nhật giao diện ngay lập tức mà không cần F5.
