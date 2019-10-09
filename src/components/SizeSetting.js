import React, { Component } from 'react';

class SizeSetting extends Component {
    changeSize(value){
        this.props.onChangeSize(value)
    }
    render() {
        return (
            <div className="panel panel-warning">
                <div className="panel-heading">
                    <h3 className="panel-title">Size Setting: {this.props.fontSize}px</h3>
                </div>
                <div className="panel-body">
                    <button type="button" className="btn btn-success mr-20" onClick={()=>{this.changeSize(-2)}}>Add</button>
                    <button type="button" className="btn btn-warning" onClick={()=>{this.changeSize(2)}}>Sub</button>
                </div>
            </div>
        );
    }
}

export default SizeSetting;