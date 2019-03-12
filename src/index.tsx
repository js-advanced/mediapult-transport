import * as React from 'react';
import { connect } from 'react-redux';

class Main extends React.PureComponent <any, any> {

    render () {
        return (
            <React.Suspense fallback={<div>Loading</div>}>

                <h1>Главная</h1>

                <div>
                    
                </div>
                <div>Я загрузился</div>
                <button onClick={() => this.props.openApp('exampleapp')}>открыть другое приложение</button>

            </React.Suspense>
        )
    }
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = (dispatch) => ({})

const connectedApp = connect(mapStateToProps, mapDispatchToProps)(Main)
const reducers = 'reducer'
connectedApp[reducers] = (state = {}, action) => state


export default connectedApp
