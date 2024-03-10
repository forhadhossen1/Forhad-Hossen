import Particles from "react-tsparticles";
import ParticleJson from "./ParticleJson";
const ParticleBg = () => {
    return (
        <div>
            <Particles params={ParticleJson}></Particles>
        </div>
    );
};

export default ParticleBg;