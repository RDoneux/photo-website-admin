import { withStyles, createStyles, WithStyles } from '@material-ui/styles'
import React from 'react'
import { settings } from '../assets/settings.json'
import slider from '../../../data-structures/ImageDataStructure'
import SliderViewer from './SliderViewer'

interface OrderAndViewProps extends WithStyles<typeof styles> {

}

interface OrderAndViewState {
    sliders: slider[]
}

class OrderAndView extends React.Component<OrderAndViewProps, OrderAndViewState> {

    constructor(props: OrderAndViewProps) {
        super(props)
        this.state = {
            sliders: [],
        }
    }

    componentDidMount() {
        fetch(settings.domain + settings.port + '/slider', {
            method: 'get',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((response) => response.json())
            .then((response) => {
                this.setState({
                    sliders: response,
                })
            })
    }

    render() {
        if (this.state.sliders.length === 0) {
            return <div />
        }
        console.log(this.state.sliders)

        const classes = this.props.classes
        const sliders = this.state.sliders
        return (
            <div className={classes.container}>
                {sliders.map((slider: slider) => (
                    <SliderViewer title={slider.title} collections={slider.collections} />
                ))}
            </div>
        )
    }

}



const styles = createStyles({
    container: {
        width: '100%',
        height: '100%',
        paddingBottom: '5rem',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        //alignContent: 'center',
        background: 'darkgray'
    }
})

export default withStyles(styles)(OrderAndView)