export const GET_MARKERS = 'marker/GET_MARKERS';
export const CREATE_MARKER = 'marker/CREATE_MARKER';
export const UPDATE_MARKER = 'marker/UPDATE_MARKER';
export const DELETE_MARKER = 'marker/DELETE_LANGUAGE';

export const getMarkers = markers => {
  return dispatch => {
    dispatch({
      type: GET_MARKERS,
      payload: markers
    });
  };
};

export const createMarker = createdMarker => {
  return dispatch => {
    dispatch({
      type: CREATE_MARKER,
      payload: createdMarker
    });
  };
};

export const updateMarker = updatedMarkers => {
  return dispatch => {
    dispatch({
      type: UPDATE_MARKER,
      payload: updatedMarkers
    });
  };
};

export const deleteMarker = deletedMarker => {
  return dispatch => {
    dispatch({
      type: DELETE_MARKER,
      payload: deletedMarker
    });
  };
};
