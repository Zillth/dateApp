import { makeStyles } from '@material-ui/core'

export default makeStyles(theme => ({
    avatar: {
        width: theme.spacing(20),
        height: theme.spacing(20),
        margin: theme.spacing(5)
    },
    bannerContainer: {
        position: "relative",
        overflow: "hidden",
    },
    banner: {
        position: "absolute",
        top: 0,
        width: "100%"
    },
    info: {
        marginLeft: theme.spacing(5),
        marginBottom: theme.spacing(5),
        marginTop: theme.spacing(5)
    },
}))