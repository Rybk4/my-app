import {View, Text} from 'react-native';

 

import  Navbar  from "../components/Navbar"


const Home =() => {

    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>Home Screen</Text>

                <Navbar/>
             
        </View>
    );

}

export default Home;