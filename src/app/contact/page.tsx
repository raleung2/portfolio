export default function Contact() {
  return (
    <div className='text-center bg-slate-800 text-white min-h-[calc(100vh-140px)] '> {/*wrapper*/}
      <section id="title">
        <p className="font-semibold text-4xl pt-7">Contact</p>
        <p className="font-semibold text-xl my-2">Send Me a Message!</p>
      </section>

      <section className="flex justify-center">
        <form action="https://formsubmit.co/raffertyleung98@gmail.com" method="POST" className="lg:w-2/3 w-5/6 text-black">
          <input type="hidden" name="_subject" value="Portfolio Contact Form Inquiry"></input>
          <input type="hidden" name="_template" value="table"></input>
          <input type="hidden" name="_autoresponse" value="Thanks for your message! I will get back to you as soon as possible!"></input>
          <input type="hidden" name="_blacklist" value="spammy pattern, banned term, phrase"></input>
          <input type="hidden" name="_next" value="https://yourdomain.co/thanks.html"></input>

          <input type="text" name="name" className="w-full my-2" placeholder="  Full Name" required></input>

          <input type="email" name="email" className="w-full my-2" placeholder="  Email Address" required></input>

          <textarea placeholder="  Your Message" name="message" className="w-full my-2" rows={10} required></textarea>
          <br></br>
          <button type="submit" className='transition-colors bg-cyan-500 hover:bg-cyan-700 text-white hover:opacity-50 font-semibold py-3 px-7 rounded-full my-6'>
            Submit
          </button>

        </form>
      </section>

    </div>
  )
}
