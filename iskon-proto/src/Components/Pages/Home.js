import React ,{Component} from 'react';
import Swiper from '../Common/Swiper.js';
import Contacts from '../Common/Psychiatrists.js';
import Rec from '../Common/Rec.js';

class Home extends Component {

    render(){
        return (
            <div>
                <Swiper 
                  
                />
                <br/>
                <br/>
                <Contacts>

                </Contacts>

                <Rec></Rec>

            </div> 
        );
    }
}

export default Home;