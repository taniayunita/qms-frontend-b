//Halaman Detail Antrian Bank

import React, {Component} from 'react'
import ContentAntrianBank from 'parts/ContentAntrianBank';
import Header from 'parts/Header';
import Footer from 'parts/Footer';


export default class AntrianBankPage extends Component{
    componentDidMount(){
        window.title = "BRIQueue | Daftar Bank";
        window.scrollTo(0, 0);
      }
    render () {
        return (
            <>
                <Header {...this.props}></Header>
                <ContentAntrianBank />
                <Footer />
            </>
        )
    }
}