import { useState } from "react";
import "./App.scss";

function App() {
  const [isLogin, setIsLogin] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      alert("Đăng nhập thành công!");
    } else {
      alert("Đăng ký thành công!");
    }
  };

  return (
    <div className="App">
      <div className="form-container">
        <h2>{isLogin ? "Đăng nhập" : "Đăng ký"}</h2>
        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <div className="form-group">
              <label>Họ tên</label>
              <input type="text" placeholder="Nhập họ tên" required />
            </div>
          )}
          <div className="form-group">
            <label>Email</label>
            <input type="text" placeholder="Nhập email" required />
          </div>
          <div className="form-group">
            <label>Mật khẩu</label>
            <input type="password" placeholder="Nhập mật khẩu" required />
          </div>
          <button type="submit">
            {isLogin ? "Đăng nhập" : "Đăng ký"}
          </button>
        </form>
        <p>
          {isLogin ? "Chưa có tài khoản?" : "Đã có tài khoản?"}{" "}
          <span
            className="toggle-link"
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? "Đăng ký" : "Đăng nhập"}
          </span>
        </p>
      </div>
    </div>
  );
}

export default App;