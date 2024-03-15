import * as Yup from 'yup';

const SignUpSchema = Yup.object().shape({
    phoneNumber: Yup.string()
        .length(10, "Số điện thoại gồm 10 chữ số")
        .required('Required'),
    password: Yup.string()
        .min(8, 'Mật khẩu có ít nhât 8 kí tự')
        .max(20, 'Mật khẩu không quá 20 kí tự')
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*()]).+$/, "Mật khẩu phải có ít nhất 1 chữ cái và 1 chữ số")
        .required('Required'),
    code: Yup.number(),
});