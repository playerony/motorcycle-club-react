import React, { Component } from 'react';
import Header from '../header/Header';
import Content from '../content/Content';
import Contact from '../content/Contact';
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
                <Contact email={this.props.email} handleSendEmail={this.handleSendEmail} />
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { email } = state;
  
    return {
        email
    }
}

export default connect(mapStateToProps) (LandingPage);