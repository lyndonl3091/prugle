import React from 'react'
import {
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Typography
} from '@material-ui/core'

export const Card = ({ title, description, image, route }) => (
    <Card>
        <CardActionArea>
            <CardMedia image={image} title={title} />
        </CardActionArea>
    </Card>
)

export default Card