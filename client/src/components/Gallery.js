import React from 'react';
import '../css/Gallery.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getPictures } from '../actions';

class Gallery extends React.Component {

  componentDidMount() {
    this.props.getPictures();
    console.log(this.props)
  }

  componentDidUpdate(prevProps) {
    if (this.props.data !== prevProps.data)
    //this.getData();
    this.props.getPictures();
    console.log('Update')
    console.log(this.props.data)
  }

  render() {

    let pictures = this.props.data.map(elem => (
      <div key={elem[0]}>
        <img src={elem[0]} alt=''/>
        <h6>{elem[1]}</h6>
      </div>
    ))
    return (
      <div>
        <h1>Gallery</h1>
        <div class="grid-container">
          {pictures}
        </div>
      </div>        
    )
  }
}

Gallery.protoTypes = {
  data: PropTypes.object.isRequired,
  getPictures: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  data: state.pictures
})

export default connect (mapStateToProps, { getPictures })(Gallery);