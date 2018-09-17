import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { Map as ImmutableMap } from 'immutable';
import { connect } from 'react-redux';

import { updateMarker } from '../../actions';
import EditPopup from './../../components/EditPopup';

class EditContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      logo_url: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    // Persisting last edited values
    this.setState({
      title: this.props.markerData.get('title'),
      logo_url: this.props.markerData.get('logo')
    });
  }

  handleChange(event) {
    // Updating values
    const name = event.target.name;
    this.setState({
      [name]: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    // Updating marker
    let updatedMarker = {
      logo: this.state.logo_url,
      title: this.state.title,
      id: this.props.markerData.get('id'),
      lat: this.props.markerData.get('lat'),
      lng: this.props.markerData.get('lng')
    };

    this.props.updateMarker(updatedMarker);
    this.props.goBack();
  }

  render() {
    const { goBack } = this.props;
    const { logo_url, title } = this.state;
    return (
      <EditPopup
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        goBack={goBack}
        logoUrl={logo_url}
        title={title}
      />
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      updateMarker
    },
    dispatch
  );

EditContainer.propTypes = {
  markerData: PropTypes.instanceOf(ImmutableMap).isRequired,
  updateMarker: PropTypes.func,
  goBack: PropTypes.func
};

export default connect(
  null,
  mapDispatchToProps
)(EditContainer);
