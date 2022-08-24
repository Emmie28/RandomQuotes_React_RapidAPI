import React from 'react';

import {makeStyles } from '@material-ui/core/styles';
import { Typography, Card, CardContent, Input, Button, TextField } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import { useLocation } from 'react-router-dom';


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



const FilteredQuotes = ({setIsloading, getAuthorQuotes, getAuthorList, 
    get_author_options}) => {
    const [quotes, setQuotes] = React.useState([]);
    const classes = useStyles();
    const [authorList, set_Author_List] = React.useState([]);
    const [author, setAuthor] = React.useState('');
    const location = useLocation();
    if(location.state !== null){
        var { Author } = location.state;
    }
    const handleChange = (e, value) =>{
        setAuthor(value);
    }
    
    React.useEffect(() =>{  
    
        if(Author){
            get_author_options.params.author = Author;
            getAuthorQuotes()
            .then((data) => {
                setQuotes(data);    
            })
        }

        getAuthorList()
            .then((data) => {
                set_Author_List(data);
            })
    }, [])

    
    const  handleClick =  () =>  {
     get_author_options.params.author = author;
            
        getAuthorQuotes()
            .then((data) => {
                setQuotes(data);    
            })
        }
    const opt = [];

    authorList !== undefined && (Object.entries(authorList).map(([key,value])=>{
        opt.push(value);
    }))

    return (

        <>

        <div style={{padding: 20}}>
        <Autocomplete
                disablePortal
                id='0'
                options={opt}
                onChange={handleChange}
                renderInput={(params) => <TextField {...params} label='Select Author' />}  
            />  
            <Button onClick={handleClick}>Search</Button>
        </div>
          
            {
                quotes !== undefined && (Object.entries(quotes).map(([key,value])=>{
                    console.log(value.id)
                    return(
                        <Card className={classes.root}>

                        <CardContent >
                            <Typography className = {classes.title} key={key}>
                               <b>ID: </b>{value.id}<br></br><p style={{paddingTop: 20}}><b>Quote: </b>{value.quote}</p>
                               <br></br><b>Category: </b>{value.category}<br></br>
                               <span 
                               style={{backgroundColor: '	#89CFF0', color: 'black', padding: 5}}>
                                <b>Author: </b>{value.author}</span>
                            </Typography>
                        </CardContent>
                        </Card>
                    )
                }))
            }
        </>
    );

}

export default FilteredQuotes;