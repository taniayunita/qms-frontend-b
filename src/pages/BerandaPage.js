import React, {Component} from 'react'
import Header from 'parts/Header';
import Footer from 'parts/Footer';
import ContentDataBeranda from 'parts/ContentDataBeranda';

export default class BerandaPage extends Component{
    render () {
        return (
            <>
                <Header {...this.props}></Header>
                <ContentDataBeranda />
                <Footer />
            </>
        )
    }
}
