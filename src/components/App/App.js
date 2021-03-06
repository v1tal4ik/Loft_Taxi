import React ,{Component,Fragment} from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {getIsAuthorize} from '../../modules/Auth/auth';
import TopMenu from '../TopMenu/TopMenu';
import MapBox from '../MapBox/MapBox';
import OrderWindow from '../OrderWindow/OrderWindow';
import './App.css';

class App extends Component{



    render(){
        const {isAuthorize} = this.props
        if(!isAuthorize) return <Redirect to='/' />;
        return (
            <Fragment>
                <TopMenu />
                <MapBox />
                <OrderWindow />
            </Fragment>
        )
    }
}

export default connect(
    state=>({
        isAuthorize:getIsAuthorize(state)
    }),
    {}
)(App);

/*<button className='btn' onClick={this.call}>Click</button>*/
/**/