import React from 'react'
import { createStyles, withStyles, WithStyles } from '@material-ui/styles';
import UploadPageButton from './upload/UploadPageButton';
import MainMenuButton from './MainMenuButton';
import UploadImage from './assets/images/uploadImage.png'
import MagnifyingGlass from './assets/images/magnifyingGlass.png'
import OrderAndViewButton from './order/OrderAndViewButton';

interface MainMenuProps extends WithStyles<typeof styles> {

}

class MainMenu extends React.Component<MainMenuProps> {

    render() {
        const classes = this.props.classes
        return (
            <div className={classes.page}>
                <div className={classes.row}>
                    <UploadPageButton />
                    <OrderAndViewButton />
                </div>
            </div>

        )
    }

}

const styles = createStyles({
    page: {
        width: '100vw',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        background: 'darkgray',
        justifyContent: 'center',
        alignContent: 'center',
    },
    row: {
        alignContent: 'center',
        justifyContent: 'center',
        display: 'flex',
    }
})

export default withStyles(styles)(MainMenu)