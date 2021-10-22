import React from 'react';
import Particles from 'react-particles-js';
import particleConfig from 'elements/ParticleBackground/particleConfig';

export default function ParticleBackground() {
    return (
        <Particles params={particleConfig}></Particles>
    )
}
