import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import postImage from "../../assets/post.jpg";

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
            EVENT VIDEOGRAPHER | MT TAMBOURINE, QLD| FRI 20, Sat 21 MAY | $850 per day.
            </Typography>
            <Typography variant="body2" color="text.secondary" textAlign="justify">
            Hi guys, looking for someone with their own gear to record speakers at a small conference this coming Friday & Saturday.
- Fri 10am - 5pm
- Sat 9am - 4pm
1x camera, 1x tripod with fluid head, 2x mics (1x wireless lapel and 1x wireless handheld/Rode reporter style).
Just needs to be in 25fps 1080p. Event in small conference room, but will need to be able to frame up the speakers and the presentations on screen at the same time.
Most event sessions 45mins, but need to be able to record up to 2 hours continuously for a couple of them. Be aware for power and recording considerations.
If you've got some experience in events and happy with the above rate, email me at XXXX@picturehousecollective.com 
Looks like you'll get a morning tea and lunch break too, no filming required in breaks.
            </Typography>
        </CardContent>
        <CardActions>
            <Button size="small"><a href='https://google.com' target="_blank" rel="noopener noreferrer">VIEW PROFILE</a></Button>
            <Button size="small"><a href='https://google.com' target="_blank" rel="noopener noreferrer">SEND INTEREST</a></Button>
        </CardActions>
        </Card>
    );
}