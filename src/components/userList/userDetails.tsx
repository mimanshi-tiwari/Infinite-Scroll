import { Grid, Typography } from "@material-ui/core"
import { UserDetailsStyles } from "../../assets/styles";
import { isEmpty } from "../../utils/utils";

interface UserDetailsProps {
    userData: object | any
};

export const UserDetails = (props: UserDetailsProps) => {
    const classes = UserDetailsStyles();
    const { userData } = props;
    const { email, phone } = userData;
    const { first, last } = userData.name;
    const { large } = userData.picture;
    const FullName = !isEmpty(first) && !isEmpty(last) ? `${first} ${last}` : first || last;
    const userDetail: any = {
        FullName,
        Email: email,
        Phone: phone
    }
    return (<>
        <Grid container className={classes.cardWrapper}>
            <Grid item xs={12} sm={12} md={12} lg={12}>
                <Grid item xs={12} sm={12} md={12} id="userDetailWrapperDetails" className={classes.userDetailWrapperDetails} >
                    <img src={large} alt="user-img" id="userImg" loading="lazy" className={classes.userImgSmall} />
                    <Grid xs={8} sm={8} md={8} lg={8} className={classes.userDetailContainer}>
                        {Object.keys(userDetail).length ? Object.keys(userDetail).map((item: string) => (
                            <Typography key={item}>
                                <b>{item}</b> : {userDetail[item] || ""}
                            </Typography>
                        )) : "User not available"}
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    </>)
}