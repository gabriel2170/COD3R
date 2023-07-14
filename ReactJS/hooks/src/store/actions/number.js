export function add2(dispatch) {

    fetch('url')
        .then(resp => resp.json())
        .then(json => dispatch({ type: 'userListReady', payload: json }))
    dispatch({ type: 'add2' })
}