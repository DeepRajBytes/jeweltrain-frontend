import AboutData from "../../assets/content/content.json";

interface AboutDataType {
  aboutus: {
    headingone: string;
    headingonedecrption: string;
    yearofexp: string;
    YearsofExperience: string;
    pcount: string;
    projectcount: string;
    totalcountclient: string;
    happyclient: string;
    imageone: string;
    imagetwo: string;
    headingtwo: string;
    headingtwodescriiption: string;
    imagethree: string;
  };
}
const About = () => {
  const data: AboutDataType = AboutData;
  const datas = data.aboutus;
  return (
    <>
      <div className="font-mono bg-white relative isolate">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-20 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%-11rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>

        <section className="py-30 md:py-44 relative">
          <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
            <div className="w-full justify-start items-center gap-12 grid lg:grid-cols-2 grid-cols-1">
              <div className="w-full justify-center items-start gap-6 grid sm:grid-cols-2 grid-cols-1 lg:order-first order-last">
                <div className="pt-24 lg:justify-center sm:justify-end justify-start items-start gap-2.5 flex">
                  <img
                    className=" rounded-xl object-cover"
                    src={datas.imageone}
                    alt="about Us image"
                  />
                </div>
                <img
                  className="sm:ml-0 ml-auto rounded-xl object-cover"
                  src={datas.imagetwo}
                  alt="about Us image"
                />
              </div>
              <div className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
                <div className="w-full flex-col justify-center items-start gap-8 flex">
                  <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                    <h2 className="text-gray-900 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                      {datas.headingone}
                    </h2>
                    <p className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                      {datas.headingonedecrption}
                    </p>
                  </div>
                  <div className="w-full lg:justify-start justify-center items-center sm:gap-10 gap-5 inline-flex">
                    <div className="flex-col justify-start items-start inline-flex">
                      <h3 className="text-gray-900 text-4xl font-bold font-manrope leading-normal">
                        {datas.yearofexp}
                      </h3>
                      <h6 className="text-gray-500 text-base font-normal leading-relaxed">
                        {datas.YearsofExperience}
                      </h6>
                    </div>
                    <div className="flex-col justify-start items-start inline-flex">
                      <h4 className="text-gray-900 text-4xl font-bold font-manrope leading-normal">
                        {datas.pcount}
                      </h4>
                      <h6 className="text-gray-500 text-base font-normal leading-relaxed">
                        {datas.projectcount}
                      </h6>
                    </div>
                    <div className="flex-col justify-start items-start inline-flex">
                      <h4 className="text-gray-900 text-4xl font-bold font-manrope leading-normal">
                        {datas.totalcountclient}
                      </h4>
                      <h6 className="text-gray-500 text-base font-normal leading-relaxed">
                        {datas.happyclient}
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-14 relative">
          <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
            <div className="w-full justify-start items-center gap-8 grid lg:grid-cols-2 grid-cols-1">
              <div className="w-full flex-col justify-start lg:items-start items-center gap-10 inline-flex">
                <div className="w-full flex-col justify-start lg:items-start items-center gap-4 flex">
                  <h2 className="text-gray-900 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                    {datas.headingtwo}
                  </h2>
                  <p className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                    {datas.headingtwodescriiption}
                  </p>
                </div>
              </div>
              <img
                className="lg:mx-0 mx-auto h-full rounded-3xl object-cover"
                src={datas.imagethree}
                alt="about Us image"
              />
            </div>
          </div>
        </section>

        
      </div>
    </>
  );
};
export default About;
