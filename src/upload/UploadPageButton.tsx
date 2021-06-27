import React from 'react'
import { withStyles, createStyles, WithStyles, Button } from '@material-ui/core'
import MainMenuButton from '../MainMenuButton'
import UploadImage from '../assets/images/uploadImage.png'

interface UploadPageButtonProps extends WithStyles<typeof styles> {

}



class UploadPageButton extends React.Component<UploadPageButtonProps> {

    render() {

        return (
            <MainMenuButton text="upload new images" onClick="/upload" source={UploadImage} />
        )

    }

}

const styles = createStyles({

})

export default withStyles(styles)(UploadPageButton)