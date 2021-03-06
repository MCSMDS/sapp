export default function pureFinalPropsSelectorFactory(dispatch) {
  const mapStateToProps = (state) => ({ getStorage: (key) => state[key] });
  const mapDispatchToProps = (dispatch) => ({ setStorage: (key, value) => dispatch({ type: key, value }) });

  function shallowEqual(objA, objB) {
    if (objA === objB) return true;
    if (typeof objA !== "object" || objA === null || typeof objB !== "object" || objB === null) return false;
    const keysA = Object.keys(objA);
    const keysB = Object.keys(objB);
    if (keysA.length !== keysB.length) return false;
    for (let i = 0; i < keysA.length; i++) {
      if (!objB.hasOwnProperty(keysA[i]) || objA[keysA[i]] !== objB[keysA[i]]) return false;
    }
    return true;
  }

  let hasRunAtLeastOnce = false;
  let state;
  let ownProps;
  let stateProps;
  let dispatchProps;
  let mergedProps;

  function handleFirstCall(firstState, firstOwnProps) {
    state = firstState;
    ownProps = firstOwnProps;
    stateProps = mapStateToProps(state);
    dispatchProps = mapDispatchToProps(dispatch);
    mergedProps = { ...ownProps, ...stateProps, ...dispatchProps };
    hasRunAtLeastOnce = true;
    return mergedProps;
  }

  function handleNewPropsAndNewState() {
    stateProps = mapStateToProps(state);
    mergedProps = { ...ownProps, ...stateProps, ...dispatchProps };
    return mergedProps;
  }

  function handleNewProps() {
    mergedProps = { ...ownProps, ...stateProps, ...dispatchProps };
    return mergedProps;
  }

  function handleNewState() {
    const nextStateProps = mapStateToProps(state);
    stateProps = nextStateProps;
    mergedProps = { ...ownProps, ...stateProps, ...dispatchProps };
    return mergedProps;
  }

  function handleSubsequentCalls(nextState, nextOwnProps) {
    const propsChanged = !shallowEqual(nextOwnProps, ownProps);
    const stateChanged = nextState !== state;

    state = nextState;
    ownProps = nextOwnProps;
    if (propsChanged && stateChanged) return handleNewPropsAndNewState();
    if (propsChanged) return handleNewProps();
    if (stateChanged) return handleNewState();
    return mergedProps;
  }

  return (nextState, nextOwnProps) => hasRunAtLeastOnce ? handleSubsequentCalls(nextState, nextOwnProps) : handleFirstCall(nextState, nextOwnProps);
}
