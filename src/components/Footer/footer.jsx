import React from 'react';
import { Typography } from '@material-ui/core';


const Footer = () =>{

    return(
        <Typography level={5} style={{ color: 'white', textAlign: 'center' }}>
            Copyright © 2022
        <br />
            DailyQuotes Inc.
        <br />
          <i sytle={{ color: 'black'}}>All Rights Reserved.</i>
            
        </Typography>
    );
}

export default Footer;