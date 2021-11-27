import { Button, Container, FormControl, FormHelperText, Grid, IconButton, InputAdornment, InputLabel, OutlinedInput } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router-dom";
import { LoginStyles } from "../../assets/styles";
import { UserCredentials } from "../../auth";
import { clearLocalStorageValue, setLocalStorageValue } from "../../utils/utils";
import Header from "../header/header";

export const Login = () => {
    const classes = LoginStyles();
    const history = useHistory();
    const labelWidth = 80;
    const [loginDetails, setLoginDetails] = React.useState({
        userName: "",
        password: "",
        showPassword: false,
        helperText: "",
    });
    const handleChange = (prop: any) => (event: React.ChangeEvent<{ value: string }>) => {
        const { value } = event.target;
        setLoginDetails({ ...loginDetails, [prop]: value, helperText: "" });
    };

    const handleShowPassword = () => {
        setLoginDetails({ ...loginDetails, showPassword: !loginDetails.showPassword });
    };

    const handleMouseDown = (event: React.MouseEvent) => {
        event.preventDefault();
    };

    const handleLogin = (event: React.MouseEvent) => {
        event.preventDefault();
        const data = {
            userName: loginDetails.userName,
            password: loginDetails.password
        }
        if (data.userName === UserCredentials.userName && data.password === UserCredentials.password) {
            setLocalStorageValue("user", data)
            history.push("/home");
            setLoginDetails({ ...loginDetails, helperText: "" })
        } else {
            clearLocalStorageValue()
            setLoginDetails({ ...loginDetails, helperText: "Incorrect username or password" })
        }
    }

    return (<div className={classes.root}>
        <Header isloginFlow/>
        <Container className={classes.container}>
            <Grid className={classes.loginWrapper}>
                <Grid className={classes.loginHead}>
                    Login
                </Grid>
                <Grid item xs={12} className={classes.wrapper}>
                    <FormControl className={classes.margin} variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-password">UserName</InputLabel>
                        <OutlinedInput
                            data-testid="outlined-adornment-username"
                            type='text'
                            value={loginDetails.userName}
                            onChange={handleChange('userName')}
                            labelWidth={labelWidth}
                        />
                    </FormControl>
                </Grid>
                <Grid item xs={12} className={classes.wrapper}>
                    <FormControl className={classes.margin} variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                        <OutlinedInput
                            data-testid="outlined-adornment-password"
                            type={loginDetails.showPassword ? 'text' : 'password'}
                            value={loginDetails.password}
                            onChange={handleChange('password')}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleShowPassword}
                                        onMouseDown={handleMouseDown}
                                        edge="end"
                                    >
                                        {loginDetails.showPassword}
                                    </IconButton>
                                </InputAdornment>
                            }
                            labelWidth={labelWidth}
                        />
                    </FormControl>
                </Grid>
                {loginDetails.helperText ? <Grid item xs={12} className={classes.wrapper}><FormHelperText className={classes.errorMsg}>{loginDetails.helperText}</FormHelperText> </Grid> : null}
                <Grid item xs={12} className={classes.wrapper}>
                    <Button variant="contained" color="primary" className={classes.margin}
                        onClick={handleLogin}
                    >
                        Login
                    </Button>
                </Grid>
            </Grid>
        </Container>
    </div>
    )
}