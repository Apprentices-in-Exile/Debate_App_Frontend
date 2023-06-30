import { Input } from "@material-tailwind/react";

const LoginForm = () => {
    return (
        <form>
            <Input label="Email" size="lg"/>
            <Input label="Password" size="lg"/>
        </form>
    );
}

export default LoginForm;