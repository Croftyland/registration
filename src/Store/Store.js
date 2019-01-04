import {observable, action } from "mobx";


const emptyValues = {
    firstName: "",
    lastName: "",
    password: "",
    repeatPassword: "",
    gender: "male",
    email: "",
    mobile: "",
    country: "1",
    city: "1",

};

const emptyErrors = {
    firstName: false,
    lastName: false,
    password: false,
    repeatPassword: false,
    email: false,
    mobile: false,
    city: false
};

class Store {
    @observable
    values = emptyValues;

    @observable
    errors = emptyErrors;

    @observable
    activeStep = 1;


    validateFields = () => {
        const errors = {};
        const {activeStep, values} = this;
        switch (activeStep) {
            case 1:
                if (values.firstname.length < 5) {
                    errors.firstname = "Must be more then 4 charecters";
                }
                if (values.lastname.length < 5) {
                    errors.lastname = "Must be more then 4 charecters";
                }
                if (values.password.length < 6) {
                    errors.password = "Must be more then 5 charecters";
                }
                if (
                    values.repeatPassword !== values.password ||
                    values.password.length === 0
                ) {
                    errors.repeatPassword = "Password must be the same";
                }
                return errors;
            case 2:
                const regExpMail = new RegExp("^.+@[^.].*.[a-z]{2,}$");
                const regExpMobile = new RegExp("[0-9]{9,}");
                if (!regExpMail.test(values.email)) {
                    errors.email = "Invalid email address";
                }
                if (!regExpMobile.test(values.mobile)) {
                    errors.mobile = "Invalid mobile number";
                }
                return errors;
            case 3:
                if (!values.avatar) {
                    errors.avatar = "Required";
                }
                return errors;
            default:
                return errors;
        }
    };


    @action
    onChange = event => {
        this.values[event.target.name] = event.target.value;
    };

    @action
    onChangeStep = name => event => {
        event.preventDefault();

        if (name === "Previous" && this.activeStep > 1) {
            this.activeStep = this.activeStep - 1;
        }
        if (name === "Next" && this.activeStep < 4) {
            const errors = this.validateFields();
            if (Object.keys(errors).length > 0) {
                this.errors = errors;
            } else {
                this.activeStep = this.activeStep + 1;
                this.errors = emptyErrors;
            }
        }
    };

    @action
    onChangeAvatar = event => {
        const avatar = event.target.files[0];
        const reader = new FileReader();

        reader.onload = event => {
            this.values.avatar = event.target.result;
        };

        reader.readAsDataURL(avatar);
    };

    @action
    onClearInfo = () => {
        this.activeStep = 1;
        this.values = emptyValues;
    };
}

export default Store;