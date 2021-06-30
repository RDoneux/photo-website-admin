import { Button } from '@material-ui/core'
import { withStyles, WithStyles, createStyles } from '@material-ui/styles'
import React from 'react'

interface UploadContainerProps extends WithStyles<typeof styles> {
}

class UploadContainer extends React.Component<UploadContainerProps> {

    render() {
        const classes = this.props.classes
        const response = document.querySelector('input')
        return (
            <div className={classes.container}>
                <div className={classes.uploadContent}>
                    <Button className={classes.button} variant="contained" component="label">
                        Upload Image
                        <input type="file" hidden accept="image/png, image/jpeg" onClick={() => {alert(response)}} />
                    </Button>
                </div>
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
        display: 'flex',
    },
    uploadContent: {
        display: 'flex',
        width: '100%',
        alignSelf: 'center',
        justifyContent: 'center',
    },
    button: {
        background: 'white',
    }

})

export default withStyles(styles)(UploadContainer)

