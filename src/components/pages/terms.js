import React, { Component } from 'react'

class Terms extends Component{
    render(){
        return(
            <div className='container' style={{marginLeft:'1px',marginTop:'45px'}}>
                <p style={{fontWeight:'700',fontSize:'30px'}}><b>Terms and conditions:-</b></p>
                <ol>
                    <li style={{fontSize:'20px'}}>Package excludes Travel and Accommodation charges.</li>
                    <li style={{fontSize:'20px'}}>Customer will get 10/20/30 Page album in given package.</li>
                    <li style={{fontSize:'20px'}}>Extra pages are chargeable.</li>
                    <li style={{fontSize:'20px'}}>Extra per page R$ 500.</li>
                    <li style={{fontSize:'20px'}}>70% amount has to pay on wedding day.</li>
                    <li style={{fontSize:'20px'}}>Remaining 30% amount has to pay on album delivery.</li>
                    <li style={{fontSize:'20px'}}>Album or video will be delivered within 15 to 2 months (depends on correction date).</li>
                </ol>
            </div>
        )
    }
}
export default Terms;  