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
        <img src={elem[1]} alt=''/>
      </div>
    ))
    return (
      <div>
        Gallery
        <div>
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