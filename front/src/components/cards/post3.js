import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import postImage from "../../assets/post3.jpg";

export default function MediaCard() {
    return (
    <Card sx={{ maxWidth: 345, minWidth: 250}}>
        <CardMedia
            component="img"
            height="140"
            image={postImage}
            alt="RE:vamp brand logo"
        />
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            SOUND Recordist | MONDAY 30 MAY - WEDNESDAY JUNE 23RD | PAID
            </Typography>
            <Typography variant="body2" color="text.secondary" textAlign="justify">
            Sound Recordist (Kit rates are separate) 
            (We will also hire separate boom op to assist) 
            Sydney Based
            Paid MEAA Award Rates for wages only +  kit rates based on requirements 
            Feature Film
            Start Monday 30 May - Wed 23 June (5x day weeks)
            Fun, small bunch of like minded professionals, filming in the Sydney area.
            Please email: xxxx@hotmail.com
            </Typography>
        </CardContent>
        <CardActions>
            <Button size="small"><a href='https://google.com' target="_blank" rel="noopener noreferrer">VIEW PROFILE</a></Button>
            <Button size="small"><a href='https://google.com' target="_blank" rel="noopener noreferrer">SEND INTEREST</a></Button>
        </CardActions>
        </Card>
    );
}