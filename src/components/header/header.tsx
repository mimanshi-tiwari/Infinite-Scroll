import React from "react";
import { AppBar, Button, Grid, Toolbar, Typography } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { HeaderStyles } from "../../assets/styles";
import { clearLocalStorageValue } from "../../utils/utils";

interface HeaderProps {
    isloginFlow?: boolean
}
const Header = (props: HeaderProps) => {
    const history = useHistory();
    const classes = HeaderStyles();
    const { isloginFlow } = props;
    const handleLogout = () => {
        clearLocalStorageValue()
        history.push("/");
    }
    return (<>
        <AppBar position="static" className={classes.stickyHeader}>
            <Toolbar>
                <Grid container>
                    <Grid item xs={6} container justifyContent="flex-start">
                        <Typography variant="h6" className={classes.title}>
                            {isloginFlow ? "Login" : "User List"}
                        </Typography>
                    </Grid>
                    {!isloginFlow && (
                        <Grid item xs={6} container justifyContent="flex-end">
                            <Button color="inherit"
                                className={classes.btnContained}
                                variant="contained"
                                onClick={handleLogout}
                            >
                                Logout
                            </Button>
                        </Grid>
                    )}
                </Grid>
            </Toolbar>
        </AppBar>
    </>);
}
export default Header;