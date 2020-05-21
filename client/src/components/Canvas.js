import React from 'react';
import '../css/Canvas.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { postPicture } from '../actions';

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
        if (event.x <= Math.floor(window.innerWidth / 4)) {
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
        this.props.postPicture(dataURL);
        break;
      default:
        break;
    }
  }

  render() {
    return (
      <div>
        <div className='canvasContainer'>
          <canvas ref='canvas'></canvas>
        </div>
        <div>        
          <button onClick={this.onClick} name='color' id='black'>Black</button>
          <button onClick={this.onClick} name='color' id='gray'>Gray</button>
          <button onClick={this.onClick} name='color' id='red'>Red</button>
          <button onClick={this.onClick} name='color' id='orange'>Orange</button>
          <button onClick={this.onClick} name='color' id='yellow'>Yellow</button>
          <button onClick={this.onClick} name='color' id='green'>Green</button>
          <button onClick={this.onClick} name='color' id='blue'>Blue</button>
          <button onClick={this.onClick} name='color' id='purple'>Purple</button>
          <button onClick={this.onClick} name='color' id='white'>Eraser</button>
          <button onClick={this.onClick} name='clear'>Clear</button>
          <button onClick={this.onClick} name='save'>Save</button>
        </div>
        <div>
          <label>Size</label>
          <input type="range" name="size" min="1" max="5" defaultValue="1" step="1" onChange={this.onClick}/>   
        </div>
        <img id='saved' alt=''/>
      </div>        
    )
  }
}

Canvas.protoTypes = {
  data: PropTypes.object.isRequired,
  postPicture: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  data: state.pictures
})

export default connect (mapStateToProps, { postPicture })(Canvas);