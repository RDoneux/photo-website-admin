import React from 'react';
import { WithStyles, createStyles, withStyles, Button } from '@material-ui/core'

interface MainMenuButtonProps extends WithStyles<typeof styles> {
    text: string,
    onClick: string,
    source: string,
    iconWidth?: number,
    iconHeight?: number
}

class MainMenuButton extends React.Component<MainMenuButtonProps> {

    render() {
        const classes = this.props.classes
        return (
            <div>
                <a href={this.props.onClick} className={classes.link}>
                    <Button className={classes.wrapper} >
                        <div className={classes.image_wrapper}>
                            <img className={classes.image} width={this.props.iconWidth ?? '60px'} height={this.props.iconHeight ?? '40px'} src={this.props.source} alt={""} />
                            <p className={classes.text}>
                                {this.props.text}
                            </p>
                        </div>
                    </Button>
                </a>
            </div>
        )
    }

}

const styles = createStyles({

    wrapper: {
        margin: '20px',
        background: '#d3d3d3',
        width: '12vw',
        height: '20vh',
        borderRadius: '20px',
        display: 'flex',
        opacity: '1',
        boxShadow: '3px 3px 5px #9E9E9E ',
    },
    image_wrapper: {
        width: '100%',
        alignSelf: 'center',
    },
    image: {
        opacity: '0.5',
    },
    text: {
        opacity: '0.5',
    },
    link: {
        textDecoration: 'none'
    }

})

export default withStyles(styles)(MainMenuButton)