import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';

import { useAppState } from "../context";
import { Button, Error, TextBox } from "../components";
import { LoginFormSchema } from "../validations";
import { checkLogin } from "../shared/functions";

const Login = () => {
  const { isLoggedIn, setLoginUser } = useAppState("auth");

  const navigate = useNavigate();

  const { handleSubmit, setError, formState: { errors }, control } = useForm({
    mode: "all",
    reValidateMode: "onChange",
    resolver: yupResolver(LoginFormSchema)
  });

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/")
    }
  }, [isLoggedIn, navigate])

  const onSubmit = (data: any) => {
    // Login check Login will be here
    if (checkLogin(data)) {
      setLoginUser()
    } else {
      setError('invalidInput', { type: 'custom', message: 'Invalid Username and Password input' });
    }
  }

  return (
    <div>
      <h1> Login </h1>
      <form onSubmit={handleSubmit(onSubmit)}>

        <div>
          <Error name="invalidInput" errors={errors} />
        </div>

        {/* UserName */}
        <div>
          <TextBox
            label="Username"
            name="username"
            control={control}
            errors={errors}
          />
        </div>

        {/* Password */}
        <div>
          <TextBox
            label="Password"
            name="password"
            control={control}
            errors={errors}
          />
        </div>

        <Button type="submit">Login</Button>
      </form>
    </div>
  )
}

export default Login