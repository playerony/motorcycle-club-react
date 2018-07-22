import React, { Component } from 'react';
import Header from '../header/Header';
import Content from '../content/Content';
import ContactForm from '../forms/ContactForm';
import DownloadFilesContent from '../content/DownloadFilesContent';
import { connect } from 'react-redux';
import { sendEmail } from '../../actions/email/sendEmail';

class LandingPage extends Component {
    handleSendEmail = data => {
        const { dispatch } = this.props;

        dispatch(sendEmail(data));
    }

    render() {
        return (
            <div>
                <Header />
                <Content />
                <ContactForm email={this.props.email} handleSendEmail={this.handleSendEmail} />
                <DownloadFilesContent />
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