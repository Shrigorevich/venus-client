function Welcome() {
  return (
    <div class="bg-stone-900 h-screen p-12 flex justify-center content-center flex-wrap">
      <div class="text-white text-center pb-32">
        <h1 class="text-5xl font-bold my-2">Welcome</h1>
        <div>
          <a href="http://127.0.0.1:4433/self-service/registration/browser">
            Sign On
          </a>
          <a href="http://127.0.0.1:4433/self-service/login/browser">Login</a>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
