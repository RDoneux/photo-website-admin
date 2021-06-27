import { withStyles, WithStyles, createStyles } from '@material-ui/styles'
import React from 'react'
import MainMenuButton from '../MainMenuButton'
import MagnifyingGlass from '../assets/images/magnifyingGlass.png'


interface OrderAndViewButtonProps extends WithStyles<typeof styles> {

}

class OrderAndViewProps extends React.Component<OrderAndViewButtonProps> {

    render() {
        return (
            <MainMenuButton text="view and order" source={MagnifyingGlass} iconWidth={40} iconHeight={40} onClick="/order&view" />
        )
    }

}

const styles = createStyles({

})

export default withStyles(styles)(OrderAndViewProps)