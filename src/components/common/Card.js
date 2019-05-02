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
            <CardMedia image={image} />
            <CardContent>
                <Typography>{title}</Typography>
                <Typography>{description}</Typography>
            </CardContent>
        </CardActionArea>
        <CardActions>
            {/*button goes here */}
        </CardActions>
    </MuiCard>
)

export default Card