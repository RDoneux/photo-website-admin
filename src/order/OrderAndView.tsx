import { withStyles, createStyles, WithStyles } from '@material-ui/styles'
import React from 'react'

interface OrderAndViewProps extends WithStyles<typeof styles> {

}

class OrderAndView extends React.Component<OrderAndViewProps> {

    render() {
        return (
            <div>
                ORDER AND VIEW
            </div>
        )
    }

}

const styles = createStyles({

})

export default withStyles(styles)(OrderAndView)