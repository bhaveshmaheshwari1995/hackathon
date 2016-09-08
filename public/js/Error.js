function AppError(response) {
    var errorMessage = null;
    if (response.message) {
        errorMessage = response.message;
    } else {
        errorMessage = 'System Error! Please try after few mniutes';
    }

    this.getErrorMessage = function() {
        return errorMessage;
    }
}