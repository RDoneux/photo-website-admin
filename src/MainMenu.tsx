import React from 'react'
import { createStyles, withStyles, WithStyles } from '@material-ui/styles';

interface MainMenuProps extends WithStyles<typeof styles> {

}

class MainMenu extends React.Component<MainMenuProps> {

    render() {
        return (
            <div>
                
            </div>
        )
    }

}

const styles = createStyles({

})

export default withStyles(styles)(MainMenu)