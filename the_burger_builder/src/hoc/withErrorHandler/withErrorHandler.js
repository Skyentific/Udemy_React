import React, {Component} from 'react';
import Modal from '../../components/UI/Modal/Modal';

const withErrorHandler = (WrappedComponent, axios) => {
    return class extends Component {

        state = {
            error: null
        }
        
        componentWillMount () {
            
            // request handler
            this.reqInterceptor = axios.interceptors.request.use(req => {
                this.setState({error: null});
                return req;
            })
            
            // response handler
            this.resInterceptor = axios.interceptors.response.use(res => res, error =>{
                this.setState({error: error});
            })

        }

        componentWillUnmount () {
            console.log('[withErrorHandler.js] Unmounted', this.reqInterceptor, this.resInterceptor);
            // remove axios interceptors
            axios.interceptors.request.eject(this.reqInterceptor);
            axios.interceptors.response.eject(this.resInterceptor);

        }

        errorConfirmedHandler =() => {
            this.setState({error: null})
        }

        render() {
            return (
                <>
                    <Modal 
                    show={this.state.error}
                    modalClosed={this.errorConfirmedHandler}>
                        {this.state.error ? this.state.error.message : null}
                    </Modal>
                    <WrappedComponent {...this.props}/>
                </>
            ); 
        }
    }
}

export default withErrorHandler;