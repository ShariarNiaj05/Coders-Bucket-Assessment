
const Banner = () => {
  return (
    <div className=" min-h-screen">
      <div
        className="min-h-screen bg-base-200"
        style={{
          backgroundImage:
            "url(https://github.com/ShariarNiaj05/Coders-Bucket-Assessment/blob/main/Shariar-Islam/src/assets/Health-and-Safety-in-construction-scaled.jpg?raw=true)",
        }}
      >
        <div className="mx-auto my-auto justify-center text-center text-white">
          <div className="max-w-full ">
            <h1 className="text-8xl font-bold pt-56">Protection</h1>
            <p className="py-6">
              IS WHAT WE DO BEST
            </p>
            <button className="bg-red-600 font-bold p-5 rounded">LEARN MORE</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
