export default function Contact(){
return(<>
<section className="flex justify-center items-center p-6 bg-gray-100">
  <div className="text-center max-w-lg mb-8">
    <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact Us</h2>
    <p className="text-gray-600 mb-2">
      Baba Hassan St, near Quraishi Masjid, Sector 11-D Sector 11 D New Karachi Town, Karachi, Karachi City, Sindh, Pakistan
    </p>
    <p className="text-gray-600 mb-2 flex items-center justify-center">
      <span className="mr-2">📞</span>
      <a href="https://wa.me/923481341392" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
        Chat with us on WhatsApp
      </a>
    </p>
    <p className="text-gray-600 mb-4 flex items-center justify-center">
      <span className="mr-2">✉️</span>
      <a href="mailto:kshahmeer10@gmail.com" className="text-blue-600 hover:underline">
        Send us an email
      </a>
    </p>

    <div className="flex justify-center items-center ">
      <h3 className="text-xl font-semibold text-gray-800 mb-3 mr-10">Social Media</h3>
      <div className="flex justify-center space-x-4 text-[30px] text-orange-800">
        <a href="https://www.facebook.com/kshahmeer10" className="text-blue-600 hover:translate-y-[-5px] transition-all">
          <i className="fab fa-facebook"></i>
        </a>
        <a href="https://api.whatsapp.com/send?phone=923481341392" className="text-green-500 hover:translate-y-[-5px] transition-all">
          <i className="fab fa-whatsapp"></i>
        </a>
        <a href="https://www.linkedin.com/in/shahmeer-khan-96b1a42b4/" className="text-blue-700 hover:translate-y-[-5px] transition-all">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="https://www.pinterest.com/kshahmeer10/" className="text-red-500 hover:translate-y-[-5px] transition-all">
          <i className="fab fa-pinterest"></i>
        </a>
      </div>
    </div>
  </div>

  <div className="w-full max-w-lg border-4 border-gray-300 rounded-md overflow-hidden">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d714.5883204202436!2d67.07749212696494!3d24.983130774254953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb341c0fa91c57b%3A0x4998f85bfe5a794a!2sKhan&#39;s%20tuition!5e1!3m2!1sen!2s!4v1729962756323!5m2!1sen!2s"
      width="600"
      height="450"
      className="w-full h-[450px] border-0"
      loading="lazy"
      allowFullScreen
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
</section>

</>)
}

