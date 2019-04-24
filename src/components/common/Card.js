import React from 'react'
import {
    Card as MuiCard,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Typography
} from '@material-ui/core'

export const Card = ({ title, description, image, route }) => (
    <MuiCard>
        <CardActionArea>
            <CardMedia image={image} title={title} />
        </CardActionArea>
    </MuiCard>
)

export default Card