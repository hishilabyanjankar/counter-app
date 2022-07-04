import React, { Component } from 'react';

class Button extends Component {
    constructor(props) {
        super(props);
        this.state = {
          clicks: 0,
          showErrorMessage: false,
          message: ""
          
        };
    }
    IncrementItem = () => {
        this.setState({
          clicks: this.state.clicks + 1,
          showErrorMessage: false,
          message: ""
        })
    }
    DecreaseItem = () => {
        if (this.state.clicks > 0) {
          this.setState({
            clicks: this.state.clicks - 1
          })
        }
        else {
          this.setState({
            showErrorMessage: true,
            message: "Count cannot be less than 0"
          })
        }
    }
    render() {
        return (
          <div className="container pt-5">
            <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
                <div className="card" style= {{width:300}}> 
                    <div className="card-body text-center">
                        <h1>Count:{ this.state.clicks}</h1>
                        <button type="button" class="btn btn-primary mr-3" onClick={this.IncrementItem}>Incerment</button>
                        <button type="button" class="btn btn-danger" onClick={this.DecreaseItem}>Decrement</button>
                        <br></br>
                        <br></br>
                        {this.state.showErrorMessage === true ?
                            <p style={{ color: "red" }}>{this.state.message}</p>
                            : ""
                        }
                    </div>
                </div>
            </div>
          </div>
      );
    }
}
export default Button;