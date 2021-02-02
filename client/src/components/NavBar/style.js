import { makeStyles } from '@material-ui/core/styles'
export default makeStyles(theme => ({
    menuContent: {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    badge: {
        marginRight: theme.spacing(1)
    },
    gridItem: {
        display: 'flex',
        alignItems: 'center'
    },
    nav: {
        marginRight: theme.spacing(4),
    },
    navButton: {
        padding: theme.spacing(3),
        marginRight: theme.spacing(2)
    },
    list: {
        width: 300,
    },
    fullList: {
        width: 'auto',
    },
    navBar: {
        marginBottom: theme.spacing(3)
    }
}))