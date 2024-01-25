const SafetyShop = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="  mt-48 flex gap-x-10">
        <div className=" w-1/2">
          <img
            className=" rounded my-auto h-full"
            src={
              "https://github.com/ShariarNiaj05/Coders-Bucket-Assessment/blob/main/Shariar-Islam/src/assets/desktop-wallpaper-updated-list-of-health-and-safety-blogs-and-websites-that.jpg?raw=true"
            }
            alt=""
          />
        </div>
        <div className=" w-1/2">
          <h2 className=" font-bold text-4xl te">Your One Stop Safety Shop</h2>
          <p className=" mt-3 text-lg">
            🌟 Welcome to our Ultimate Destination for Safety Solutions! 🌟
          </p>
          <p className=" mt-3 text-lg">
            Discover a comprehensive array of top-notch safety essentials that
            cater to all aspects of your life – from the comfort of your home to
            the demands of your workplace. We are your go-to destination for
            everything safety-related, providing you with a curated selection
            that prioritizes your well-being.
          </p>
          <p className=" mt-3 text-lg">
            Embark on your safety journey with confidence as you explore our
            diverse range of products. From cutting-edge home security to
            workplace essentials, we've thoughtfully assembled a collection to
            meet your every need.
          </p>
          <p className=" mt-3 mb-3 text-lg">
            Your safety is our priority! Browse, shop, and elevate your
            lifestyle with the assurance that comes from choosing the best.
            "Your One Stop Safety Shop" – where safety meets convenience, and
            your peace of mind is our commitment! 🛡️✨
          </p>
          <button className=" text-white bg-red-600 hover:bg-red-900 rounded p-3 font-bold">
            {" "}
            Learn More
          </button>
          <button className=" text-red-600 bg-white border border-red-600 hover:bg-red-900 hover:text-white rounded p-3 font-bold">
            {" "}
            Get In Touch
          </button>
        </div>
      </div>
    </div>
  );
};

export default SafetyShop;
