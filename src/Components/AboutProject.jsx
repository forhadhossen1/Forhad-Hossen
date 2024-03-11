import marginBg from "../assets/margin-bg.png"
const AboutProject = () => {
    return (
        <div className='bg-cover bg-center' style={{ backgroundImage: `url(${marginBg})` }}>
            <div className="max-w-screen-xl mx-auto my-8">
                <div className="flex justify-between">
                    <div className="flex-1">
                        <h1 className="text-4xl md:text-6xl font-bold p-3">Project Workflow</h1>
                    </div>
                    <div className="flex-1">
                        <p>To commence the project, I initiate a comprehensive meeting with the client to gain a thorough understanding of their portfolio requirements and overarching goals. Following this, I delve into research, exploring portfolios of a similar nature to gather valuable insights and inspiration. With these insights in mind, I meticulously craft a layout that aligns with the structure envisioned for the client is portfolio. The concluding stage involves the design and development of the user interface, a process that commences once the chosen layout is finalized. This approach ensures a seamless progression from client collaboration and research to the thoughtful creation of a tailored and visually appealing user interface.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutProject;