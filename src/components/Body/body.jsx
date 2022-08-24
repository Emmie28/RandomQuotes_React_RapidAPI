import React from 'react';
import {Card, Typography, CardContent, Button} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
const useStyles = makeStyles({
    root: {
      maxWidth: 350,
      height: 250,
      margin: '20px',
      padding: '2px',
      display: 'inline-block',
      color: 'white',
      backgroundColor: '#1F2124',
      '&:hover': {
        backgroundColor: "#383A3F",
        transform: "scale3d(1.2, 1.2, 1)",
        transition: "transform 0.5s ease-in-out",
        
        
     }, 
    },

    cardHovered: {
        transform: "scale3d(1.05, 1.05, 1)"
      },

    main: {
        backgroundColor: '#F0FFFF',
    },

    title: {
      fontSize: 14,
    },

    pos: {
      marginBottom: 12,
    },
    
  });

const Body = ({randomQuotes}) => {
    const classes = useStyles();
    
    return(
        <div className={classes.main}>
    
        {
            
            randomQuotes !== undefined && (Object.entries(randomQuotes).map(([key,value], index) =>{
                
                
                    return(
                        <Card className={classes.root}>

                        <CardContent >
                            <Typography className = {classes.title} key={key} >
                               <b>ID: </b>{value.id}<br></br><p style={{paddingTop: 20}}><b>Quote: </b>{value.quote}</p>
                               <br></br><b>Category: </b>{value.category}<br></br>
                               <span 
                               style={{backgroundColor: '	#89CFF0', color: 'black', padding: 5}}>
                                <b>Author: </b><Link to='/FilteredQuotes' state={{Author: value.author}} sytle={{textDecoration: 'none'}}><Button>{value.author}</Button></Link></span>
                            </Typography>
                        </CardContent>
                        </Card>
                    )
            
                
            }))
        }
   

    </div>
    )
    

};

export default Body;