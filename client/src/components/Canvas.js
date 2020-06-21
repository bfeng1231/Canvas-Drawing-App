import React from 'react';
import '../css/Canvas.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { postPicture } from '../actions/pictureActions';

class Canvas extends React.Component {

  componentDidMount() {
    const canvas = this.refs.canvas;
    canvas.width = Math.floor(window.innerWidth / 2);
    canvas.height = Math.floor(window.innerHeight / 2);
    const ctx = canvas.getContext("2d");
    let mouse = {
      x: undefined,
      y: undefined,
      down: false
    }

    const borderX = 10;
    const borderY = 10;
    const margin = 20;

    window.addEventListener('resize', () => {
      canvas.width = Math.floor(window.innerWidth / 2);
      canvas.height = Math.floor(window.innerHeight / 2);
    })

    window.addEventListener('mousedown', (event) => {
      mouse.down = true
      mouse.x = event.offsetX;
      mouse.y = event.offsetY;
    })

    window.addEventListener('mousemove', (event) => {
      if (mouse.down) {
        if (event.x <= Math.floor(window.innerWidth / 4) - borderX) {
          mouse.down = false
          return
        }
        if (event.y >= Math.floor(window.innerHeight / 2) + borderY + margin || event.y <= margin) {
          mouse.down = false
          return
        }
        draw(mouse.x, mouse.y, event.offsetX, event.offsetY)
        mouse.x = event.offsetX;
        mouse.y = event.offsetY;
      }
    })

    window.addEventListener('mouseup', () => {
      mouse.down = false
    })

    window.addEventListener('mouseout', () => {
      mouse.down = false
    })

    function draw(x1, y1, x2, y2) {
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
    }
  }

  onClick = (event) => {
    const canvas = this.refs.canvas;
    const ctx = canvas.getContext("2d");
    switch (event.target.name) {
      case('clear'):
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        break;
      case('color'):
        ctx.strokeStyle = event.target.id;
        break;
      case('size'):
        ctx.lineWidth = event.target.value;
        break;
      case('save'):
        let dataURL = {src: canvas.toDataURL()};
        //console.log(dataURL);
        //document.getElementById('saved').src = dataURL;
        this.props.postPicture(dataURL, this.props.data.token);
        break;
      default:
        break;
    }
  }

  render() {
    return (
      <div className='drawingApp'>
        <div className='canvasContainer'>
          <canvas ref='canvas'></canvas>
        </div>
        <div>
          <h2>How to use:</h2>
          <ul>
            <li>Use your mouse and hold down left click in the canvas to start drawing.</li>
            <li>You can change the line color and size using the buttons below.</li>
            <li>To display your drawing in the gallery, click on save when you are done drawing.</li>
          </ul>
        </div>
        <div className='buttons'>      
          <button onClick={this.onClick} name='color' id='black' style={{backgroundColor: 'black'}}></button>
          <button onClick={this.onClick} name='color' id='gray' style={{backgroundColor: 'gray'}}></button>
          <button onClick={this.onClick} name='color' id='red' style={{backgroundColor: 'red'}}></button>
          <button onClick={this.onClick} name='color' id='orange' style={{backgroundColor: 'orange'}}></button>
          <button onClick={this.onClick} name='color' id='yellow' style={{backgroundColor: 'yellow'}}></button>
          <button onClick={this.onClick} name='color' id='green' style={{backgroundColor: 'green'}}></button>
          <button onClick={this.onClick} name='color' id='blue' style={{backgroundColor: 'blue'}}></button>
          <button onClick={this.onClick} name='color' id='purple' style={{backgroundColor: 'purple'}}></button>
          <button onClick={this.onClick} name='color' id='white'>Eraser</button>
          <button onClick={this.onClick} name='clear'>Clear</button>
          <button onClick={this.onClick} name='save'>Save</button>
        </div>
        <div>
          <label>Size</label>
          <input type="range" name="size" min="1" max="5" defaultValue="1" step="1" onChange={this.onClick}/>   
        </div>
      </div>        
    )
  }
}

Canvas.protoTypes = {
  data: PropTypes.object.isRequired,
  postPicture: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  data: state.authReducer
})

export default connect (mapStateToProps, { postPicture })(Canvas);