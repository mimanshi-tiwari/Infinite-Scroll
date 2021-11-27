import { CircularProgress, Paper } from "@material-ui/core";
import React, { useCallback, useRef, useState } from "react";
import { UserListStyles } from "../../assets/styles";
import useInfiniteScroll from "../../utils/useInfiniteScroll";
import { UserDetails } from "./userDetails";

export const UserList = () => {
    const [pageNumber , setPageNumber] = useState(1);
    const { user, loading, error } = useInfiniteScroll(pageNumber);
    const classes = UserListStyles();
    const observer: any = useRef();
    const clearObserver = () => {
        if (observer.current) {
            observer.current.disconnect()
        }
    }

    const observeNode = useCallback(node => {
        if(loading) return;
        clearObserver();
        observer.current = new IntersectionObserver(entries => {
            if(entries[0].isIntersecting){
                setPageNumber(prevState => prevState + 1);
            }
        });
        if(node) observer.current.observe(node)
        return () => {
            clearObserver();
        }
    }, [loading, observer]);

    return (        
    <div className={classes.root}>  
        {!error ? <Paper className={user instanceof Array ? "": classes.userList}>
            {user instanceof Array ? 
            user.map(item => <UserDetails  key={item.login.uuid} userData={item}/>) : 
            <p>No User Available</p>}
            <div ref={observeNode}>
                <CircularProgress />
            </div>
        </Paper> : "Error Fetchig Data, Please refresh the page"}
    </div>
    )
}