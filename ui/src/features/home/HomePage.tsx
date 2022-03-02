import { Box, Typography, Button} from "@mui/material";
import Slider from "react-slick";




const HomePage = () => {
    
    const settings = {
        dots:true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }
    return (
        <>
            {/* <Slider {...settings}>
                <div>
                    <img src="/images/hero1.jpg" alt="hero" style={{display: 'block', width: '100%', maxHeight: 500}}/>
                </div>
                <div>
                    <img src="/images/hero2.jpg" alt="hero" style={{display: 'block', width: '100%', maxHeight: 500}}/>
                </div>
            </Slider> */}
            
            <Box display='flex' justifyContent='center' sx={{p:4}}>
                <Typography variant='h1'>
                    Welcome to the store
                </Typography>
            </Box>


            {/*<table>
                <tbody>
                <tr>
                    <td style={{color: '#ff00ff',  backgroundColor: '#FFFFFF'}}>Q</td>
                    <td style={{color: '#442244', backgroundColor: '#442244'}}>Y</td>
                    <td style={{color: '#FFFF00', backgroundColor: '#442244'}}>A</td>
                </tr>
                <tr>
                    <td style={{color: '#FFEEFE', backgroundColor: '#990000'}}>Q</td>
                    <td style={{color: '#FFFF00',  backgroundColor: '#FF0'}}>M</td>
                    <td style={{color: '#000000', backgroundColor: '#FF7777'}}>O</td>
                </tr>
                </tbody>
            </table>*/}

        </>
    )
}

export default HomePage
