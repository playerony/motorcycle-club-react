import React, { Component } from 'react';
import Header from '../header/Header';
import Content from '../content/Content';
import ContactForm from '../forms/ContactForm';
import DownloadFilesContent from '../content/DownloadFilesContent';
import Footer from '../Footer';
import { connect } from 'react-redux';
import { sendEmail, clearEmailInfo } from '../../actions/email/sendEmail';

class LandingPage extends Component {
    handleSendEmail = data => {
        const { dispatch } = this.props;

        dispatch(sendEmail(data));
    }

    handleClearInfo = data => {
        const { dispatch } = this.props;

        dispatch(clearEmailInfo());
    }

    render() {
        return (
            <div>
                <Header />
                <Content />
                <ContactForm email={this.props.email} handleSendEmail={this.handleSendEmail} handleClearInfo={this.handleClearInfo} />
                <DownloadFilesContent />
                <Footer />
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { sendEmail } = state;
  
    return {
        email: sendEmail
    }
}

export default connect(mapStateToProps) (LandingPage);