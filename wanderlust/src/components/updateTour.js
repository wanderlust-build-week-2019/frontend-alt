import React from 'react';
import axios from 'axios';
import axiosAuth from '../reducers/axiosAuth';

class UpdateTour extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      max_duration: '',
      location: '',
      type: ''
    };
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  updateTour = e => {
    e.preventDefault();
    axiosAuth()
      .put(`https://wanderlust-api.herokuapp.com/api/tours/${e.id}`, e)

      .then(res => {
        console.log(res.data);
        let tour = {
          location: '',
          max_duration: '',
          type: ''
        };
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <form>
          <input
            onChange={this.handleInputChange}
            placeholder="duration"
            type="number"
            value={this.state.max_duration}
            name="max_duration"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="location"
            value={this.state.location}
            name="location"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="tour type"
            value={this.state.type}
            name="type"
          />

          <button type="submit" onClick={this.updateTour}>
            SUBMIT
          </button>
        </form>
      </div>
    );
  }
}

export default UpdateTour;
