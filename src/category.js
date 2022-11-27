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
import Grid2 from '@mui/material/Unstable_Grid2';




export default function Category({ title, data }) {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div>
            <Accordion className={expanded ? 'accordionE' : 'accordion'} expanded={expanded === 'panel1'} onChange={handleChange('panel1')} >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"

                >
                    <Typography align="center" variant="h4" sx={{ fontFamily:'nunito', width: '100%', flexShrink: 0, color: 'white' }}>{title} </Typography>
                </AccordionSummary>
                <AccordionDetails className='accordionDetails'>
                    <Grid2 display="flex" container spacing={3} justifyContent="center" justify="center" >

                        {data.map((d) => {
                            if (d.category === title) {
                                if (d.type === 'video') {
                                    return <Grid2 key={d.link} xs="auto" alignItems="center" >
                                        <Card className='Card' align="center" >
                                            <CardMedia  sx={{minWidth: '20vw',maxWidth: '25vw', minHeight: '20vw', maxHeight: '25vh' }}
                                                component="iframe"
                                                src={d.link}
                                                frameBorder={0}
                                                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                                                allowFullScreen
                                                
                                            />
                                            <CardContent>
                                                <Typography color='black' align="center" alignContent="center" gutterBottom variant="h5" component="div" fontFamily='Nunito' sx={{ maxWidth: '25vw' }}>
                                                {d.comment}
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                    </Grid2>
                                }

                                else if (d.type === 'image') {
                                    return <Grid2 key={d.link} xs="auto" alignItems="center" >
                                        <Card className='Card' align="center" >
                                            <CardMedia  sx={{ maxWidth: '25vw', maxHeight: '25vh' }}
                                                component="img"
                                                image={d.link}
                                                alt="image"
                                            />
                                            <CardContent>
                                                <Typography color='black' align="center" alignContent="center" gutterBottom variant="h5" component="div" fontFamily='Nunito' sx={{ maxWidth: '25vw' }}>
                                                {d.comment}
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                    </Grid2>
                                }

                                else if (d.type === 'audio') {
                                    return <Grid2 key={d.link} xs="auto" alignItems="center" >
                                    <Card className='Card' align="center" >
                                        <CardMedia  sx={{ width: '350px', height: '150px' }}
                                            component="iframe"
                                            src={d.link}
                                        />
                                        <CardContent>
                                            <Typography color='black' align="center" alignContent="center" gutterBottom variant="h5" component="div" fontFamily='Nunito' sx={{ maxWidth: '25vw' }}>
                                            {d.comment}
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid2>
                                }

                                else {
                                    return <Grid2 key={d.link} xs="auto" alignItems="center" >
                                    <Card className='Card' align="center" >
                                        <CardContent>
                                            <Typography color='black' align="center" alignContent="center" gutterBottom variant="h5" component="div" fontFamily='Nunito' sx={{ maxWidth: '25vw' }}>
                                            {d.link}
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid2>
                                }
                            }
                            else {
                                return null
                            }
                        })
                        }


                    </Grid2>
                </AccordionDetails>
            </Accordion>
        </div>
    )
}

