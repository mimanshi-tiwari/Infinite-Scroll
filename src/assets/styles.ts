import { createStyles, makeStyles, Theme } from "@material-ui/core";

export const LoginStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            background: "#FFFFFF",
        },
        container: {
            maxWidth: "500px"
        },
        loginWrapper: {
            background: "#f2f2f2",
            border: '1px solid #d6cbcb',
            borderRadius: "4px"
        },
        margin: {
            width: "calc(100% - 10px)"
        },
        btnMargin: {
            margin: theme.spacing(3),
        },
        errorMsg: {
            color: "red",
            display: "flex",
            justifyContent: "center"
        },
        loginHead: {
            display: "flex",
            padding: theme.spacing(2),
            borderBottom: "1px solid #d6cbcb"
        },
        wrapper: {
            display: "flex",
            padding: theme.spacing(2),
        }
    })
);

export const HeaderStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            marginLeft: theme.spacing(2),
        },
        stickyHeader: {
            position: "fixed",
            top: 0,
            background: "#767676"
        },
        btnContained: {
            color: "#3F51B5",
            background: "#FFF"
        }
    })
);

export const UserListStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            height: "100%",
            marginTop: '60px',
            '& > *': {
                margin: theme.spacing(1),
                width: theme.spacing(86),
                height: "auto",
            },
        },
        userList: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        }
    })
);

export const UserDetailsStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        cardWrapper: {
            border: "1px solid #f2f2f2",
            display: "flex",
            justifyContent: "center",
            background: "azure",
            padding: "25px"
        },
        buttonContainer: {
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center"
        },
        userCardContainer: {
            padding: theme.spacing(1)
        },
        userDetailWrapperList: {
            display: "flex",
            alignSelf: "center",
            borderRadius: "50px",
        },
        userDetailWrapperDetails: {
            display: "flex",
            justifyContent: "center",
            borderRadius: "50px",
            height: "140px"
        },
        userImgSmall: {
            width: `calc(30% - 30px)`,
            borderRadius: "50%"
        },
        userImgLarge: {
            maxWidth: "200px",
            borderRadius: "3%"
        },
        userName: {
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            paddingLeft: theme.spacing(2)
        },
        userDetailContainer: {
            background: "rgb(35 81 57 / 60%)",
            color: "#FFF",
            borderRadius: "20px",
            fontSize: "8px",
            padding: theme.spacing(2),
            margin: theme.spacing(3),
            height: "fit-content",
            textAlign: "start"
        }
    })
);