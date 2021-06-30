import React from 'react'
import { withStyles, WithStyles, createStyles } from '@material-ui/styles'
import { classes } from 'istanbul-lib-coverage'
import { image } from '../../../data-structures/ImageDataStructure'

interface OrderAndViewImageProps extends WithStyles<typeof styles> {
    image: image
}

class OrderAndViewImage extends React.Component<OrderAndViewImageProps> {

    render() {
        const classes = this.props.classes
        return (
            <div>
                <img className={classes.container} src={this.props.image.url} alt=""/>
            </div>
        )
    }

}

const styles = createStyles({
    container: {
        width: '290px',
        height: '100%', 
        objectFit: 'cover',
        marginRight: '5px'
    }
})

export default withStyles(styles)(OrderAndViewImage)