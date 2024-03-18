
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import Swal from 'sweetalert2';
import email from '../../assets/email.png';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_u7loai8', 'template_760fmmp', form.current, {
                publicKey: '7oWVg52YNlkiiXfdU',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Success, Send Your Message",
                        showConfirmButton: false,
                        timer: 1500
                    });
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };


    return (
        <div className='max-w-screen-xl mx-auto md:h-[90vh]'>

            {/* <form ref={form} onSubmit={sendEmail}>
                <label>Name</label>
                <input type="text" name="user_name" />
                <label>Email</label>
                <input type="email" name="user_email" />
                <label>Message</label>
                <textarea name="message" />
                <input type="submit" value="Send" />
            </form> */}
            <div>
                <h1 className="text-4xl md:text-6xl text-center font-bold my-8 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-pink-500 to-pink-500">Contact</h1>
            </div>

            <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32">
                <div className="flex flex-col justify-between ">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold leading-tight lg:text-4xl p-3">Lets talk!</h2>
                        <div className="dark:text-gray-400 p-3">Have a project in mind?
                            My inbox is always open to new opportunities.
                            Feel free to contact me for any of your inquiries!</div>
                    </div>
                    <img src={email} alt="" className="p-3 md:h-64" />
                </div>
                <form ref={form} onSubmit={sendEmail} className="space-y-8 text-gray-600">
                    <div>
                        <label className="text-md text-white">Name</label>
                        <input id="name" type="text" name='user_name' placeholder="" className="w-full p-3 rounded dark:bg-gray-800" />
                    </div>
                    <div>
                        <label className="text-md text-white">Email</label>
                        <input id="email" type="email" name='user_email' className="w-full p-3 rounded dark:bg-gray-800" />
                    </div>
                    <div>
                        <label className="text-md text-white">Message</label>
                        <textarea id="message" rows="3" className="w-full p-3 rounded dark:bg-gray-800" name='message'></textarea>
                    </div>
                    <button type="submit" className="w-full p-3 text-md font-bold tracking-wide uppercase rounded bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">Send Message</button>
                </form>
            </div>
        </div>
    );
};

export default Contact