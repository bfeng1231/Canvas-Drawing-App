import React from 'react';
import '../css/Gallery.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getPictures } from '../actions/pictureActions';

class Gallery extends React.Component {

  componentDidMount() {
    this.props.getPictures();
  }

  componentDidUpdate(prevProps) {
    if (this.props.data.pictures !== prevProps.data.pictures)
    this.props.getPictures();
    //console.log('Update')
    //console.log(this.props.data.pictures)
  }

  render() {

    let pictures = this.props.data.pictures.map(elem => (
      <div key={elem[0]}>
        <img src={elem[0]} alt=''/>
        <h6>{elem[1]}</h6>
      </div>
    ))
    return (
      <div>
        <h1>Gallery</h1>
        <div className="grid-container">
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
  data: state.pictureReducer
})

export default connect (mapStateToProps, { getPictures })(Gallery);