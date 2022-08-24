import React from 'react';
import {Typography} from '@material-ui/core';
import useStyles from './styles.js';
import { Menu } from 'antd';
import { HomeOutlined, FilterOutlined, DatabaseOutlined} from '@ant-design/icons';
import {Link} from 'react-router-dom';


const Header = () =>{
    const classes = useStyles();

    return(
        <div>
            
            <Typography variant='h5' style={{ alignContent: 'center'}} className={classes.logo}>
                Daily Quotes
            </Typography>
                    
      <Menu  style={{ padding: 40, listStyleType: 'none'}}>
        <Menu.Item style={{ padding: 10, color: '#89CFF0'}} icon={<HomeOutlined />}>
          <Link to='/' style={{textDecoration: 'none'}}> Home</Link>
        </Menu.Item>
        <Menu.Item style={{ padding: 10, color: '#89CFF0'}} icon={<FilterOutlined />}>
          <Link to='/FilteredQuotes' style={{textDecoration: 'none'}}>Get Quotes by an Author</Link>
        </Menu.Item>
        <Menu.Item style={{ padding: 10, color: '#89CFF0'}} icon={<DatabaseOutlined />}>
           <Link to='/RandomQuotes' style={{textDecoration: 'none'}}> Random Quotes</Link>
        </Menu.Item>
       
      </Menu>
      
        
            
        </div>);
};

export default Header;