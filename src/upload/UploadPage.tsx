import React from 'react';
import { createStyles, WithStyles, withStyles } from '@material-ui/styles'
import UploadContainer from './UploadContainer';

interface UploadPageProps extends WithStyles<typeof styles> {

}

class UploadPage extends React.Component<UploadPageProps> {

    render() {
        const classes = this.props.classes
        return (

            <div className={classes.container}>
                <div className={classes.text_wrapper}>
                    <h1 className={classes.title}>
                        UPLOAD IMAGES
                    </h1>
                    <p className={classes.description}>
                        select images from file, or drag and drop
                    </p>
                </div >
                <UploadContainer />
            </div>

        )
    }

}

const styles = createStyles({
    container: {
        width: '100vw',
        height: '100vh',
        background: 'darkgray',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    text_wrapper: {
    },
    title: {
        display: 'flex',
        justifyContent: 'center',
    },
    description: {
        display: 'flex',
        justifyContent: 'center',
    }

})

export default withStyles(styles)(UploadPage)