import React, {Component} from 'react';


class MemeGenerator extends Component {
    constructor() {
        super();
        this.state = {
            topText: '',
            bottomText: '',
            randomImage: 'http://i.imgflip.com/1bij.jpg',
            allMemeImgs: []
        };
        this.handleChange = this.handleChange.bind(this);
        this.generateMeme = this.generateMeme.bind(this);
    }

    componentDidMount() {
        // this.setState({
        //     loading: true
        // });
        //
        //
        fetch('https://api.imgflip.com/get_memes')
            .then(response => response.json())
            .then(response => {
                const {memes} = response.data;
                this.setState({
                    allMemeImgs: memes
                });
            });
    }

    handleChange(event) {
        const {name, value} = event.target;
        this.setState({
            [name]: [value]
        })
    }

    generateMeme(e) {
        e.preventDefault();
        const randIndex = Math.floor(Math.random() * this.state.allMemeImgs.length);
        const newImage = this.state.allMemeImgs[randIndex].url;
        this.setState({
            randomImage: newImage
        })
    }

    render() {
        return (
            <div className='profile'>
                <form onSubmit={this.generateMeme} className="meme-form">
                    <input
                        type="text"
                        placeholder='Top text'
                        name='topText'
                        id='topText'
                        value={this.state.topText}
                        onChange={this.handleChange}
                        autoComplete="off"
                    />

                    <input
                        type="text"
                        placeholder='Bottom text'
                        name='bottomText'
                        id='bottomText'
                        value={this.state.bottomText}
                        onChange={this.handleChange}
                        autoComplete="off"
                    />

                    <button disabled={!this.state.allMemeImgs}>Gen</button>
                </form>
                <div className="meme">
                    <img src={this.state.randomImage} alt=""/>
                    <div className="top-text">
                        <p>{this.state.topText}</p>
                    </div>
                    <div className="bottom-text">
                        <p>{this.state.bottomText}</p>
                    </div>

                </div>
            </div>
        );
    }
}

export default MemeGenerator;
