import React from 'react';
import { createStyles, WithStyles, withStyles } from '@material-ui/styles'

interface UploadPageProps extends WithStyles<typeof styles> {

}

class UploadPage extends React.Component<UploadPageProps> {

    render() {
        return (

            <div>
                
            </div>


        )
    }

}

const styles = createStyles({

})

export default withStyles(styles)(UploadPage)