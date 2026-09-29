const Preloader = () => {
  return (
    <div className="bg-soft top-0 left-0 fixed w-screen h-screen flex justify-center items-center">
      <img
        src="/assets/circle-logo.svg"
        alt="Algo Logo"
        className="animate-spin mr-3 h-30 w-30"
      />
    </div>
  );
};

export default Preloader;
