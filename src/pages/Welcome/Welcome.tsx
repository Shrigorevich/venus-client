import "../../shared/css/Common.css";
import "./Welcome.css";

function Welcome() {
  return (
    <div class="welcome">
      <h1>Welcome</h1>
      <div>
        <a href="http://127.0.0.1:4433/self-service/registration/browser">
          Sign On
        </a>
        <a href="http://127.0.0.1:4433/self-service/login/browser">Login</a>
      </div>
    </div>
  );
}

export default Welcome;
