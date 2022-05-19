import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import postImage from "../../assets/post2.png";

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
            Britney Spears fan Music Video | MONDAY 23RD MAY | UNPAID
            </Typography>
            <Typography variant="body2" color="text.secondary" textAlign="justify">
Hey Everyone, In support of Britney being free, im looking for crew to film a 3min music video featuring some of Britney's most ICONIC songs. Sadly funding from FILM Australia has fallen through do this is a non paid role. I know that y'all would be passionate enough to help out just for the exposure though! Email me at: number1britneyfanboyaus@gmail.com. 
            </Typography>
        </CardContent>
        <CardActions>
            <Button size="small"><a href='https://google.com' target="_blank" rel="noopener noreferrer">VIEW PROFILE</a></Button>
            <Button size="small"><a href='https://google.com' target="_blank" rel="noopener noreferrer">SEND INTEREST</a></Button>
        </CardActions>
        </Card>
    );
}