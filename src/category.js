import * as React from 'react';
import './category.css';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Masonry from '@mui/lab/Masonry';
import Divider from '@mui/material/Divider';




export default function Category({ title, data }) {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div>
            <Accordion className={expanded ? 'accordionE' : 'accordion'} expanded={expanded === 'panel1'} onChange={handleChange('panel1')} align="center">
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"

                >
                    <Typography align="center" variant="h4" sx={{ fontFamily: 'nunito', width: '100%', flexShrink: 0, color: 'white' }}>{title} </Typography>
                </AccordionSummary>
                <AccordionDetails className='accordionDetails' align="center">
                    <Masonry  className='Masonry' columns={{ xs: 1, sm: 2, md: 3, lg:4, xl:5}} spacing={2} display="flex"  sx={{ alignContent:'center', width:'100%'}}>

                        {data.map((d) => {
                            if (d.category === title) {
                                if (d.type === 'video') {
                                    return <Card className='Card' align="center" key={d.link}  >
                                        <CardMedia className='CardMediaVideo'sx={{  minHeight:'25vh', objectFit: "contain"}}
                                            component="iframe"
                                            src={d.link}
                                            frameBorder={0}
                                            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                                            allowFullScreen

                                        />
                                        <CardContent className='CardContent'>
                                            <Typography className='CardComment' color='black' align="center" alignContent="center" gutterBottom variant="h5" component="div" fontFamily='Nunito' >
                                                {d.comment}
                                            </Typography>
                                            <Divider  className='divider' sx={{  height:'0.1vh'}}/>
                                            <Typography className='CardComment' color='black' align="center" alignContent="center" gutterBottom variant="h6" component="div" fontFamily='Nunito Light' >
                                                {d.date}
                                            </Typography>
                                        </CardContent>
                                    </Card>

                                }

                                else if (d.type === 'image') {
                                    return <Card className='Card' align="center" key={d.link}  >
                                        <CardMedia className='CardMedia'  sx={{  objectFit: "contain" }}
                                            component="img"
                                            image={d.link}
                                            alt="image"
                                        />
                                        <CardContent className='CardContent'>
                                            <Typography className='CardComment' color='black' align="center" alignContent="center" gutterBottom variant="h5" component="div" fontFamily='Nunito' >
                                                {d.comment}
                                            </Typography>
                                            <Divider light className='divider' sx={{  height:'0.1vh'}}/>
                                            <Typography className='CardComment' color='black' align="center" alignContent="center" gutterBottom variant="h6" component="div" fontFamily='Nunito Light' >
                                                {d.date}
                                            </Typography>
                                        </CardContent>
                                    </Card>

                                }

                                else if (d.type === 'audio') {
                                    return <Card className='Card' align="center"  key={d.link} >
                                        <CardMedia   className='CardMediaAudio'  
                                            component="iframe"
                                            src={d.link}
                                        />
                                        <CardContent className='CardContent'>
                                            <Typography className='CardComment' color='black' align="center" alignContent="center" gutterBottom variant="h5" component="div" fontFamily='Nunito' >
                                                {d.comment}
                                            </Typography>
                                            <Divider light className='divider' sx={{  height:'0.1vh'}}/>
                                            <Typography className='CardComment' color='black' align="center" alignContent="center" gutterBottom variant="h6" component="div" fontFamily='Nunito Light' >
                                                {d.date}
                                            </Typography>
                                        </CardContent>
                                    </Card>

                                }

                                else if (d.type === 'pdf') {
                                    return <Card className='Card' align="center"  key={d.link} >
                                        <CardMedia   className='CardMediaAudio'   sx={{  minHeight:'25vh', objectFit: "contain"}}
                                            component="iframe"
                                            src={d.link+'#view=fitH'}
                                        />
                                        <CardContent className='CardContent'>
                                            <Typography className='CardComment' color='black' align="center" alignContent="center" gutterBottom variant="h5" component="div" fontFamily='Nunito' >
                                                {d.comment}
                                            </Typography>
                                            <Divider light className='divider' sx={{  height:'0.1vh'}}/>
                                            <Typography className='CardComment' color='black' align="center" alignContent="center" gutterBottom variant="h6" component="div" fontFamily='Nunito Light' >
                                                {d.date}
                                            </Typography>
                                        </CardContent>
                                    </Card>

                                }

                                else {
                                    return <Card className='Card' align="center" key={d.link} >
                                        <CardContent className='CardContent'>
                                            <Typography className='CardComment' color='black' align="justify" alignContent="center" gutterBottom variant="h5" component="div" fontFamily='Nunito' >
                                                {d.link}
                                            </Typography>
                                            <Divider light className='divider' sx={{  height:'0.1vh'}}/>
                                            <Typography className='CardComment' color='black' align="center" alignContent="center" gutterBottom variant="h6" component="div" fontFamily='Nunito Light' >
                                                {d.date}
                                            </Typography>
                                        </CardContent>
                                    </Card>

                                }
                            }
                            else {
                                return null
                            }
                        })
                        }


                    </Masonry >
                </AccordionDetails>
            </Accordion>
        </div>
    )
}

