/* General Reset */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Vazir", sans-serif;
  background-color: #1f1f1f;
  color: white;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  flex-direction: column;
}

.container {
  max-width: 500px;
  background-color: #333;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  text-align: center;
}

h1 {
  color: #fff;
  font-size: 2rem;
  margin-bottom: 20px;
}

#click-target {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  cursor: pointer;
  margin-top: 20px;
  transition: transform 0.2s ease;
  border: 5px solid #fff;
}

#click-target:active {
  transform: scale(0.95);
}

#coin-count {
  font-size: 24px;
  margin-top: 20px;
  color: #fff;
}

#telegram-user {
  font-size: 16px;
  color: #ccc;
  margin-top: 10px;
}

#shop {
  margin-top: 30px;
  text-align: right;
  direction: rtl;
}

.upgrade {
  background-color: #444;
  padding: 10px 15px;
  border: 1px solid #666;
  border-radius: 12px;
  margin-bottom: 10px;
  cursor: pointer;
  transition: background 0.3s ease;
}

.upgrade:hover {
  background-color: #555;
}

/* Style for login section */
#login-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

#login-container h1 {
  color: #fff;
}
