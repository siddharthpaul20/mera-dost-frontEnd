export const goToCompressorForm = (inputData, history) => async (dispatch) => {
    dispatch({ type: "OPEN_COMPRESSOR_FORM", payload: inputData});
    history.push("/compressorFormPage");
}