import React from 'react'

function Contact(){
  return(
    <div style={{padding:"20px", backgroundColor: "#f9f9f9", minHeight: "100vh"}}>
      <br/><br/>
      <h1 className='sidehead' style={{textAlign: "center", fontSize: "2.5em", marginBottom: "30px"}}>
        📞 Contact Us - Brothers Cafe
      </h1>
      
      <div style={{display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px", maxWidth: "1000px", margin: "0 auto"}}>
        
        {/* Left Column - Contact Info */}
        <div className='con' style={{backgroundColor: "white", padding: "30px", borderRadius: "10px", boxShadow: "0 2px 10px rgba(0,0,0,0.1)"}}>
          <h3 style={{fontSize: "1.2em", marginBottom: "20px"}}>
            We would love to hear from you! If you have any questions, feedback, or inquiries, feel free to contact us using the details below.
          </h3>
          
          <div style={{marginTop: "20px"}}>
            <h2 style={{color: "#8B4513", marginBottom: "10px"}}>📍 Address:</h2>
            <h3>Brothers Cafe, Bedi, Rajkot, Gujarat, India</h3>
          </div>

          <div style={{marginTop: "20px"}}>
            <h2 style={{color: "#8B4513", marginBottom: "10px"}}>📞 Phone:</h2>
            <h3>+91 9642 123456</h3>
          </div>

          <div style={{marginTop: "20px"}}>
            <h2 style={{color: "#8B4513", marginBottom: "10px"}}>✉️ Email:</h2>
            <h3><a href="mailto:brotherscafe@gmail.com" style={{color: "#0066cc", textDecoration: "none"}}>brotherscafe@gmail.com</a></h3>
          </div>

          <div style={{marginTop: "20px"}}>
            <h2 style={{color: "#8B4513", marginBottom: "10px"}}>🕐 Opening Hours:</h2>
            <h3>Monday - Thursday: 8:00 AM - 11:00 PM</h3>
            <h3>Friday - Saturday: 8:00 AM - 12:00 AM</h3>
            <h3>Sunday: 9:00 AM - 10:00 PM</h3>
          </div>
        </div>

        {/* Right Column - Social & Additional Info */}
        <div style={{backgroundColor: "white", padding: "30px", borderRadius: "10px", boxShadow: "0 2px 10px rgba(0,0,0,0.1)"}}>
          <h2 style={{color: "#8B4513", marginBottom: "20px"}}>🌐 Follow Us On Social Media:</h2>
          <div style={{marginBottom: "20px"}}>
            <h3>📱 Instagram: <a href="https://instagram.com/brotherscafe" target="_blank" rel="noopener noreferrer" style={{color: "#0066cc"}}>@brotherscafe</a></h3>
            <h3>👍 Facebook: <a href="https://facebook.com/brotherscafe" target="_blank" rel="noopener noreferrer" style={{color: "#0066cc"}}>Brothers Cafe</a></h3>
            <h3>🐦 Twitter: <a href="https://twitter.com/brotherscafe" target="_blank" rel="noopener noreferrer" style={{color: "#0066cc"}}>@brotherscafe</a></h3>
          </div>

          <h2 style={{color: "#8B4513", marginTop: "30px", marginBottom: "15px"}}>🎯 About Us:</h2>
          <h3 style={{lineHeight: "1.8"}}>
            Brothers Cafe is a modern and friendly café focused on bringing people together in a comfortable and enjoyable environment. We serve high-quality coffee, delicious snacks, and refreshing beverages for customers of all ages.
          </h3>

          <h3 style={{lineHeight: "1.8", marginTop: "15px"}}>
            Visit Brothers Cafe and enjoy a pleasant experience with great taste, excellent service, and a welcoming atmosphere!
          </h3>
        </div>
      </div>

      {/* Map or Additional Section */}
      <div style={{marginTop: "50px", textAlign: "center", padding: "30px", backgroundColor: "white", borderRadius: "10px", maxWidth: "1000px", margin: "50px auto 0"}}>
        <h2 style={{color: "#8B4513", marginBottom: "20px"}}>📍 Find Us Here:</h2>
        <p style={{fontSize: "1.1em"}}>Location: Bedi, Rajkot, Gujarat, India</p>
        <p style={{fontSize: "0.95em", color: "#666"}}>Near the main market, easily accessible by public transport</p>
      </div>
    </div>
  )
}
export default Contact;