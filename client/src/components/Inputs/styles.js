import { makeStyles } from '@material-ui/core/styles'
export default makeStyles(theme => ({
    radioInput: {
        marginLeft: theme.spacing(2)
    },
    fileBaseContainer: {
        backgroundColor: "white",
        borderRadius: '50%',
        padding: theme.spacing(1),
        zIndex: 100,
        position: "absolute",
        right: 0,
    }
}))