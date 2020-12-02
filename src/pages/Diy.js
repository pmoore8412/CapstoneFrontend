import React, { Component } from 'react';

class Diy extends Component {
    render() {
        return (
            <div>
                <h1>DIY Page</h1>
                <div className="container">
                <div class="card" style={{width: 300, height: 300}}>
                    <img src="..." class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
                </div>
            </div>
        );
    }
}

export default Diy;