import React from 'react';
import PropTypes from 'prop-types';
import store from '../store'
//import { ROOT_PATH } from '../constants';

const root_path = (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1") ?
    'http://localhost:3000' : 'https://shadubois.github.io/IdlingInTheWoods/'
const defaultProps = {
    client_id: "f78pj8u7mo2m2jhy6u54cbxnne1ujn",
    base_url: root_path
}

const propTypes = {
    client_id: PropTypes.string,
    base_url: PropTypes.string
};

class LoginManager extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            hasError: false, 
            errorMsg: '', 
            access_token: '',
            user_data: {} };
    }

    componentDidMount() {
        this.status();
    }

    render() {
        return (
            <div>
                <a href={`https://id.twitch.tv/oauth2/authorize?client_id=${this.props.client_id}&redirect_uri=${encodeURIComponent(this.props.base_url)}&response_type=token&scope=user:read:email`}>Login</a>
                {this.state.hasError ? `Quelque chose s'est mal passé` : ``}
                {this.state.errorMsg ? this.state.errorMsg : ``}
            </div>
        );
    }

    headers() {
        return {
            "Client-ID": this.props.client_id,
            "Authorization": "Bearer " + this.state.access_token
        }
    }

    status() {
        // TODO clear url
        if (document.location.hash && document.location.hash !== '') {
            var parsedHash = new URLSearchParams(window.location.hash.substr(1));
            if (parsedHash.get('access_token')) {
                this.setState({ access_token: parsedHash.get('access_token') }, () => {
                    // call API
                    fetch(
                        'https://api.twitch.tv/helix/users',
                        {
                            "headers": this.headers()
                        }
                    )
                        .then(resp => resp.json())
                        .then(resp => {
                            this.setState({user_data: resp.data[0]});
                            store.dispatch({
                                type: 'user/set',
                                payload: {
                                    headers: this.headers(),
                                    user_data: resp.data[0]
                                }
                            })
                        })
                        .catch(err => {
                            console.log(err)
                            this.setState({ hasError: true });
                        });
                });
            }
        } else if (document.location.search && document.location.search !== '') {
            var parsedParams = new URLSearchParams(window.location.search);
            if (parsedParams.get('error_description')) {
                this.setState({ hasError: true, errorMsg: parsedParams.get('error_description') });
            }
        }
    }
}

LoginManager.defaultProps = defaultProps
LoginManager.propTypes = propTypes

export default LoginManager