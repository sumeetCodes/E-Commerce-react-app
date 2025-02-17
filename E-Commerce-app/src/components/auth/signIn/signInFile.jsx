import { Password } from "@mui/icons-material";
import { Button, TextField, Typography } from "@mui/material";
import axios from "axios";
import { Controller, useForm } from "react-hook-form";
import { Navigate, useNavigate } from "react-router-dom";


const SignInFileComponent = () => {

    const navigate = useNavigate();

    const { control, register, handleSubmit, watch, 
        formState: { errors } } = useForm(
            {
                defaultValues: {
      email: " ",
      password:"",
            }
            }
        );
  const onSubmit = data => {

    const payload = {username: data?.email, password: data?.password};

      console.log(data);
    
      const loginUser = async () => {
        const resp = await axios.post(
            "https://fakestoreapi.com/auth/login",
        payload);

        console.log(resp, "resp");
        

        if (resp.status === 401){
 alert("something went wrong")
        }

        if (resp && resp?.data?.token && resp?.status === 200){
            navigate("/");
        } 

        localStorage.setItem("token", resp?.data?.access_token)

    
      }

loginUser();
      
    }


    return(

<>

<Typography variant="h2">
Sign In
</Typography>
<Typography variant="body1">
Welcome to our E-Commerce Store Site
</Typography>

<form onSubmit={handleSubmit(onSubmit)}>

<div>


{/* Email */}

<div className="my-4">

<Controller
        name="email"
        control={control}
        rules={{ required: true }}
        render={({ field }) => <TextField {...field} 
        id="outlined-basic" size={"small"}
        label="Email" variant="outlined" />}
        />

        </div>


{/* Password */}
<div className="my-3">

<Controller
        name="password"
        control={control}
        rules={{ required: true }}
        render={({ field }) => <TextField {...field} 
        id="outlined-basic" size={"small"}
        label="Password" variant="outlined" />}
        />
        
        </div>


<Button variant="contained" type="submit">
    Sign In
</Button>

</div>
</form>

</>

    );

};

export default SignInFileComponent;
