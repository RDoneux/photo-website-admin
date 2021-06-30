import React from 'react'
import { WithStyles, withStyles, createStyles } from '@material-ui/styles'
import { collection } from '../../../data-structures/ImageDataStructure'
import OrderAndViewImage from './OrderAndViewImage'
import ScrollBars from 'react-scroll-horizontal';

interface SliderViewerProps extends WithStyles<typeof styles> {
    title: string
    collections: collection[]
}

class SliderViewer extends React.Component<SliderViewerProps> {

    render() {
        const classes = this.props.classes
        return (
            <div className={classes.container}>
                <p className={classes.title}>
                    {this.props.title.toUpperCase()}
                </p>
                <div className={classes.wrapper}>
                    <ScrollBars reverseScroll>
                        {this.props.collections.map((collection: collection) => (
                            <OrderAndViewImage image={collection.images[0]} />
                        ))}
                    </ScrollBars>
                </div>
            </div>
        )
    }

}

const styles = createStyles({

    container: {
        marginTop: '60px',
        width: '95vw',
        height: '25vh',
        justifySelf: 'center',
        justifyContent: 'center',
    },
    title: {
        marginLeft: '40px',
        marginBottom: '3px'
    },
    wrapper: {
        width: '100%',
        height: '100%',
        background: 'lightgray',
        borderRadius: '30px',
        boxShadow: '3px 3px 5px #9E9E9E ',
        overflowX: 'auto',
    }
})

export default withStyles(styles)(SliderViewer)