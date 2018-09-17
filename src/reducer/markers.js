import { fromJS } from 'immutable';

import { GET_MARKERS } from '../actions';
import { CREATE_MARKER } from '../actions';
import { UPDATE_MARKER } from '../actions';
import { DELETE_MARKER } from '../actions';

const initialState = fromJS([]);

export default (state = initialState, { type, payload } = {}) => {
  switch (type) {
    case GET_MARKERS:
      return state.set('markers', fromJS(payload));

    case CREATE_MARKER:
      return state.push(fromJS(payload));

    case UPDATE_MARKER:
      return state.map(marker => {
        if (marker.get('id') === payload.id) {
          let updatedState = fromJS(payload);
          return updatedState;
        }
        return marker;
      });

    case DELETE_MARKER:
      return state.filter(marker => marker.get('id') !== payload.get('id'));

    default:
      return state;
  }
};
