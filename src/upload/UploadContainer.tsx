import { Button } from '@material-ui/core'
import { withStyles, WithStyles, createStyles } from '@material-ui/styles'
import React from 'react'
import { UseFileSelector } from './UseFileSelector'

interface UploadContainerProps extends WithStyles<typeof styles> {

}

class UploadContainer extends React.Component<UploadContainerProps> {
    render() {
        const classes = this.props.classes
        return (
            <div className={classes.container}>
                {/* <Button onClick={UseFileSelector()}> click me </Button> */}
            </div>
        )
    }
}

const styles = createStyles({

    container: {
        background: 'lightgray',
        opacity: '0.4',
        border: '2px solid rgba(160, 160, 160, 1)',
        width: '60%',
        height: '40%',
        marginTop: '20px',
        alignSelf: 'center',
        borderRadius: '30px',
    }

})

export default withStyles(styles)(UploadContainer)

