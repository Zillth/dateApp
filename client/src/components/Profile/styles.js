import { makeStyles } from '@material-ui/core'

export default makeStyles(theme => ({
    avatar: {
        width: theme.spacing(20),
        height: theme.spacing(20),
    },
    avatarContainer: {
        position: "relative",
        margin: theme.spacing(2)
    },
    bannerContainer: {
        position: "relative",
        overflow: "hidden",
    },
    banner: {
        position: "absolute",
        top: 0,
        width: "100%",
        transform: "translate(0, -100px)"
    },
    info: {
        margin: theme.spacing(5),
        position: "relative"
    },
    description: {
        marginBottom: theme.spacing(3),
        marginTop: theme.spacing(2),
    },
    chip: {
        margin: theme.spacing(1)
    },
    appBar: {
        marginTop: theme.spacing(5)
    },
    button: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2)
    },
    input: {
        marginTop: theme.spacing(2)
    },
    editIcon: {
        "&:hover": {
            cursor: "pointer"
        },
    },
    pointer: {
        cursor: "pointer"
    }
    
}))