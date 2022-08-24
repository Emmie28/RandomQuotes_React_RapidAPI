import React, { useEffect } from 'react';
import { LinearProgress } from '@material-ui/core';
import Header from './components/Header/header';
import Body from './components/Body/body';
import Footer from './components/Footer/footer';
import FilteredQuotes from './components/FilteredQuotes/filteredQuotes';
import RandomQuotes from './components/randomQuotes/randomQuotes';
import { get_author_options, getAllQuotes, getAuthorQuotes, getAuthorList } from './api';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

const App = () => {
    const [randomQuotes, setRandomQuotes] = React.useState([]);
    const [isLoading, setIsloading] = React.useState(false);
   

    useEffect(() =>{
        
        setIsloading(true);
        getAllQuotes()

            .then((data) => {
                console.log({data});
                setRandomQuotes(data);
                setIsloading(false);
                
            })
    }, []);

   
    return(
        <>  
         <Router>
        <div className='app'>
            <div className='navbar'>
                <Header  />
            </div>
           <div className='main'>
            <div>

            
           <div>
                { isLoading !== false && (   
                    <div >
                        <LinearProgress />
                    </div>) 
                }
            </div>

            <Routes>
                <Route exact path='/' element={
                    <Body randomQuotes={randomQuotes}/>
                }>
                </Route>
                <Route exact path='/FilteredQuotes' element={
                    <FilteredQuotes 
                    getAuthorQuotes={getAuthorQuotes} 
                    setIsLoading={setIsloading}
                    get_author_options={get_author_options}
                    getAuthorList={getAuthorList} 
                    />
                }>
                </Route>
                <Route exact path= '/RandomQuotes' element={
                    <RandomQuotes />
                }></Route>
            </Routes>
        
            </div>
            <div className='footer'>
                <Footer />
            </div>
            </div> 
        </div>
        </Router>
        </>
    );
};

export default App;