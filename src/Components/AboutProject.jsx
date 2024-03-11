import marginBg from "../assets/margin-bg.png"
const AboutProject = () => {
    return (
        <div className="hero min-h-[100vh]" style={{ backgroundImage: `url(${marginBg})` }}>
            <div className="hero-overlay bg-opacity-80 bg-[#0c0c1d]"></div>

            <div className="max-w-screen-xl mx-auto my-12">

                <div className="flex justify-between flex-col md:flex-row py-12">
                    <div className="flex-1">
                        <h1 className="text-4xl md:text-6xl font-bold p-3">Project Workflow</h1>
                    </div>
                    <div className="flex-1 p-3 text-md md:text-xl text-gray-300">
                        <p>To commence the project, I initiate a comprehensive meeting with the client to gain a thorough understanding of their portfolio requirements and overarching goals. Following this, I delve into research, exploring portfolios of a similar nature to gather valuable insights and inspiration. With these insights in mind, I meticulously craft a layout that aligns with the structure envisioned for the client is portfolio. The concluding stage involves the design and development of the user interface, a process that commences once the chosen layout is finalized. This approach ensures a seamless progression from client collaboration and research to the thoughtful creation of a tailored and visually appealing user interface.</p>
                    </div>
                </div>

                <div className="flex justify-center py-9">
                    <ul className="steps steps-vertical md:steps-horizontal w-full text-xl p-3 md:space-x-3 space-y-3 md:space-y-0">

                        <li className="">
                            <h4 className="border rounded-full p-3 px-7 text-center">1. Briefing</h4>
                        </li>
                        <li className="">
                            <h4 className="border rounded-full p-3 px-7 text-center">2. Research</h4>
                        </li>
                        <li className="">
                            <h4 className="border rounded-full p-3 px-7 text-center">3. Design</h4>
                        </li>
                        <li className="">
                            <h4 className="border rounded-full p-3 px-7 text-center">4. Development</h4>
                        </li>

                    </ul>
                </div>
            </div>

        </div>
    );
};

export default AboutProject;