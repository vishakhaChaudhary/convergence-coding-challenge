class YupHelper {
    /**
     * @desc Email validation regex
     */
    emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  
    /**
     * @desc Password validation regex
     */
    passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)[A-Za-z\d]{6,12}$/;
  
    /**
     * @desc validate no space password regex
     */
    loginPasswordRegex = /^\S+$/;
  
    /**
     * @desc validate value according to the schema
     *
     * @param schema yup schema
     * @param value to be validated
     *
     * @returns validation error status
     */
    validateValue = async (schema, value) => schema.validate(value);
  
    /**
     * @desc handle error promise
     *
     * @param promise errorPromise
     *
     * @returns errorMessage
     */
    handlePromiseError = async (promise) => {
      let errorMessage = "";
      await promise.catch((err) => {
        errorMessage = err.message;
      });
      return errorMessage;
    };
  }
  
  export default new YupHelper();
  