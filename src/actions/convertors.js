export const goToConvertorForm = (inputData, history) => async (dispatch) => {
    dispatch({ type: "OPEN_CONVERTOR_FORM", payload: inputData});
    history.push("/convertorFormPage");
}