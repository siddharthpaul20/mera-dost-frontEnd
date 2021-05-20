const convertorsReducer = (state= { inputType: null, outputType: null, acceptKey: null } , action) => {
    switch(action.type) {
        case "OPEN_COMPRESSOR_FORM":
        case "OPEN_CONVERTOR_FORM":
            //inputData = action.payload;
            return { ...state, inputType: action.payload.inputType, outputType: action.payload.outputType, acceptKey: action.payload.acceptKey };
        default:
        return state;
    }
  }


export default convertorsReducer;