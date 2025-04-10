import AboutData from '../../assets/content/content.json'


interface AboutDataType {
    aboutus:{
    headingone: string
    headingonedecrption:string
    yearofexp:string
    YearsofExperience:string
    pcount:string
    projectcount:string
    totalcountclient:string
    happyclient:string
    imageone:string
    imagetwo:string
    headingtwo:string
    headingtwodescriiption:string
    imagethree:string
    }
}
const About = () => {
    const data: AboutDataType = AboutData;
    const datas= data.aboutus
    return (
        <>
        <section className="py-44  relative">
        <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
            <div className="w-full justify-start items-center gap-12 grid lg:grid-cols-2 grid-cols-1">
                <div
                    className="w-full justify-center items-start gap-6 grid sm:grid-cols-2 grid-cols-1 lg:order-first order-last">
                    <div className="pt-24 lg:justify-center sm:justify-end justify-start items-start gap-2.5 flex">
                        <img className=" rounded-xl object-cover" src={datas.imageone} alt="about Us image" />
                    </div>
                    <img className="sm:ml-0 ml-auto rounded-xl object-cover" src={datas.imagetwo}
                        alt="about Us image" />
                </div>
                <div className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
                    <div className="w-full flex-col justify-center items-start gap-8 flex">
                        <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                            <h2
                                className="text-gray-900 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                                {datas.headingone}</h2>
                            <p className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                               {datas.headingonedecrption}</p>
                        </div>
                        <div className="w-full lg:justify-start justify-center items-center sm:gap-10 gap-5 inline-flex">
                            <div className="flex-col justify-start items-start inline-flex">
                                <h3 className="text-gray-900 text-4xl font-bold font-manrope leading-normal">{datas.yearofexp}</h3>
                                <h6 className="text-gray-500 text-base font-normal leading-relaxed">{datas.YearsofExperience}</h6>
                            </div>
                            <div className="flex-col justify-start items-start inline-flex">
                                <h4 className="text-gray-900 text-4xl font-bold font-manrope leading-normal">{datas.pcount}</h4>
                                <h6 className="text-gray-500 text-base font-normal leading-relaxed">{datas.projectcount}</h6>
                            </div>
                            <div className="flex-col justify-start items-start inline-flex">
                                <h4 className="text-gray-900 text-4xl font-bold font-manrope leading-normal">{datas.totalcountclient}</h4>
                                <h6 className="text-gray-500 text-base font-normal leading-relaxed">{datas.happyclient}</h6>
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
                        <h2 className="text-gray-900 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">{datas.headingtwo}</h2>
                        <p className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">{datas.headingtwodescriiption}</p>
                    </div>
                </div>
                <img className="lg:mx-0 mx-auto h-full rounded-3xl object-cover" src={datas.imagethree} alt="about Us image" />
            </div>
        </div>
    </section>
                                            
                                            
        </>
    )

}
export default About;