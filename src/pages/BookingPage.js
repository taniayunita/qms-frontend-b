import ContentBooking from 'parts/ContentBooking'
import Footer from 'parts/Footer'
import Header from 'parts/Header'
import React, { Component } from 'react'

export default class BookingPage extends Component  {
    componentDidMount(){
        window.title = "BRIQueue | Daftar Bank";
        window.scrollTo(0, 0);
      }
    render() {
        return (
            <>
                <Header {...this.props}></Header>
                <ContentBooking />
                <Footer />
            
            </>
        )

    }
}
