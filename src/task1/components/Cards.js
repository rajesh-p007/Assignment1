import React from 'react';
import './Cards.css';

const Cards = ({name , username , email , street , suite , city , zipcode , phone , website , companyName , catchphrase , bs}) => (
 
 
//  <div className = "container">
//     <div className="row">
//       <div className="col-9">
//          <div class="card text-center">
//              <div class="card-header">
//                  {username}
//              </div>
//              <div class="card-body">
//               <h5 class="card-title">{name}</h5>
                
//                 <div class="mail"><a href="mailto:{{email}}">{email}</a> </div>
//                 <a href="#" class="btn btn-primary">Location</a>
//               </div>
//               <div class="card-footer text-muted">
//                     2 days ago
//               </div>
//             </div>
//           </div>
//       </div>
// </div> 

 /* <div class="container">
	<div class="row">
        <div class="col-sm-6">
            <div class="business-card">
                <div class="media">
                    <div class="media-left">
                        <img class="media-object img-circle profile-img" src="http://s3.amazonaws.com/37assets/svn/765-default-avatar.png" />
                    </div>
                    <div class="media-body">
<h2 class="media-heading">{username}</h2>
                        <div class="job">CEO</div>
<div class="mail"><a href="mailto:{{email}}">{email}</a> </div>
                    </div>
                </div>
            </div>
        </div>
        
	</div>
  </div>  */

  
  

  
//   <div className="card card-cascade wider mt-2 mb-3">

    
//     <div class="view view-cascade overlay">
//       <img  class="card-img-top" src="http://s3.amazonaws.com/37assets/svn/765-default-avatar.png" alt="Card image cap" height='200px' width='200px' />
//       <a href="#!">
//         <div class="mask rgba-white-slight"></div>
//       </a>
//     </div>

    
//     <div class="card-body card-body-cascade text-center">

      
// <h4 class="card-title"><strong>{name}</strong></h4>
      
// <h5 class="blue-text pb-2"><strong>{username}</strong></h5>
// <div class="mail"><a href="mailto:{{email}}">{email}</a> </div>
      
//       <p class="card-text">Sed ut perspiciatis unde omnis iste natus sit voluptatem accusantium doloremque laudantium, totam rem aperiam. </p>

      
//       <a class="px-2 fa-lg li-ic"><i class="fab fa-linkedin-in"></i></a>
      
//       <a class="px-2 fa-lg tw-ic"><i class="fab fa-twitter"></i></a>
      
//       <a class="px-2 fa-lg fb-ic"><i class="fab fa-facebook-f"></i></a>

//     </div>

//   </div>
  

/* <div className="container">
<h2>{name}</h2>
  <p>Image at the top (card-img-top):</p>
  <div className="card" style={{width:'400px'}}>
    <img className="card-img-top" src="https://www.w3schools.com/bootstrap4/img_avatar1.png" alt="Card image" style={{width:'100%'}} />
    <div className="card-body">
<h3 className="card-title">{username}</h3>
<div class="mail"><a href="mailto:{{email}}">Email : {email}</a> </div>
      <h6 className="card-text">Address :</h6>
      <p className="mt-0">Hno. {suite}</p>
      <p className="card-text">Street {street}</p>
      <p className="card-text">City {city}</p>
      <p className="card-text">Pincode {zipcode}</p>
      <a href="#" className="btn btn-primary">See Profile</a>
    </div> 
  </div>
  </div> */

  
<div className="container" style={{width:'100%'}}>
    <div className="row">
      <div className="col-2"></div>
        <div className="col-8">
            <div className="contact-box center-version">
                <a href="#">
                    <img alt="image" class="img-circle" src="https://bootdey.com/img/Content/avatar/avatar1.png" />
                    <h3 className="m-b-xs"><strong>{name}</strong></h3>
        
                    <div className="font-bold">@{username}</div>
                    
                    
                    <br></br>
                    <div className="row">
                    <div className="col-6">
                    <h5><u><strong>Company</strong></u></h5>
                    <strong>{companyName}</strong><br></br>
                    {catchphrase}<br></br>
                    {bs}<br></br>
                    </div>
                    <div className="col-6">
                    <h5><u><strong>Address</strong></u></h5>
                    {street}, {suite}<br></br>
                    {city}<br></br>
                     Zipcode : {zipcode}<br></br>
                    </div>
                    </div>
        
                </a>
                <div className="contact-box-footer">
                  <h6 className="btn btn-xs btn-white" href="{phone}"><i class="fa fa-phone"></i>Phone : {phone}</h6>
                  <h6 className="btn btn-xs btn-white" href="{email}"><i class="fa fa-envelope"></i> Email : {email}</h6>
                  <h6 className="btn btn-xs btn-white" href="{website}"><i class="fa fa-cloud"></i>Website : {website}</h6> 
                    
                </div>
        
            </div>
        </div>
        
</div>
</div>


);

export default Cards;