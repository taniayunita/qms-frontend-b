import React, { Component } from "react";
import ParticleBackground from "utils/ParticleBackground";
import LoginForm from "parts/LoginForm";

export default class LoginPage extends Component {
  render() {
    return (
      <>
        <ParticleBackground />
        <LoginForm/>
      </>
    );
  }
}
