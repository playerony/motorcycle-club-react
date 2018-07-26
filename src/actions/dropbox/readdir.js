import {
    FAILURE_READDIR,
    REQUEST_READDIR,
    RESPONSE_READDIR
} from '../../constants/dropbox/dropbox.contants';
import * as dropboxService from '../../services/dropbox.service';
  
function readdirRequest(path) {
    return {
        type: REQUEST_READDIR,
        path
    }
}
  
function readdirResponse(json) {
    return {
        type: RESPONSE_READDIR,
        json
    }
}
  
function readdirFailure(error) {
    return {
        type: FAILURE_READDIR,
        error: error
    }
}
  
export function readdir(path) {
    return dispatch => {
        dispatch(readdirRequest(path));
        dropboxService.readdir(path)
            .then(
                json => {
                    dispatch(readdirResponse(json.response));
                }
            )
            .catch(error => {
                dispatch(readdirFailure(error));
            })
    }
}